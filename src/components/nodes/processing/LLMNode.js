import React, { useState, useEffect } from 'react';
import { Handle, Position, useNodes, useEdges } from 'reactflow';
import { generateGeminiResponse, generateMultimodalResponse } from '../../../services/geminiService';

const LLMNode = ({ id, data }) => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const nodes = useNodes();
  const edges = useEdges();

  // Get connected input nodes
  const getConnectedInputs = () => {
    const connectedEdges = edges.filter(edge => edge.target === id);
    return connectedEdges.map(edge => {
      const sourceNode = nodes.find(node => node.id === edge.source);
      return sourceNode;
    });
  };

  // Gather context from connected nodes
  const gatherContext = () => {
    const inputs = getConnectedInputs();
    let textContext = [];
    let images = [];

    inputs.forEach(input => {
      if (!input) return;

      switch (input.type) {
        case 'textNode':
          textContext.push(input.data.text);
          break;
        case 'imageNode':
          if (input.data.imageData) {
            images.push({
              base64Data: input.data.imageData.split(',')[1]
            });
          }
          break;
        case 'pdfNode':
          if (input.data.pdfContent) {
            textContext.push(input.data.pdfContent);
          }
          break;
        case 'urlNode':
          if (input.data.extractedContent) {
            textContext.push(input.data.extractedContent);
          }
          break;
      }
    });

    return { textContext: textContext.join('\n\n'), images };
  };

  const generateResponse = async () => {
    if (!prompt.trim()) return;

    try {
      setLoading(true);
      setError(null);
      
      const { textContext, images } = gatherContext();
      
      let result;
      if (images.length > 0) {
        // Use multimodal endpoint if images are present
        result = await generateMultimodalResponse(prompt, images);
      } else {
        // Use text-only endpoint
        result = await generateGeminiResponse(prompt, textContext);
      }
      
      setResponse(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-3 rounded-md bg-white shadow-md border border-gray-200 w-80">
      <div className="font-bold text-sm mb-2">LLM Node (Gemini)</div>
      <div className="mb-2">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          className="w-full p-2 border border-gray-300 rounded-md text-sm"
          rows={3}
        />
      </div>
      <button
        onClick={generateResponse}
        disabled={!prompt.trim() || loading}
        className="w-full py-1 px-2 bg-green-600 text-white rounded-md text-sm disabled:bg-gray-300"
      >
        {loading ? 'Generating...' : 'Generate Response'}
      </button>
      {error && (
        <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded-md">
          <p className="text-xs text-red-600">{error}</p>
        </div>
      )}
      {response && (
        <div className="mt-3 p-2 bg-gray-50 rounded-md border border-gray-200">
          <p className="text-xs font-medium mb-1">Response:</p>
          <p className="text-sm whitespace-pre-wrap">{response}</p>
        </div>
      )}
      <Handle type="target" position={Position.Left} id="input" />
    </div>
  );
};

export default LLMNode;