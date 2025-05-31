import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

const ImageGenerationNode = ({ id, data }) => {
  const [prompt, setPrompt] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const generateImage = () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    // In a real app, you would call an image generation API here
    // For now, we'll simulate it with a timeout and a placeholder image
    setTimeout(() => {
      // Using a placeholder image for demonstration
      setGeneratedImage('https://placehold.co/300x300/e2e8f0/1e293b?text=AI+Generated+Image');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="p-3 rounded-md bg-white shadow-md border border-gray-200 w-64">
      <div className="font-bold text-sm mb-2">Image Generation Node</div>
      <div className="mb-2">
        <textarea
          value={prompt}
          onChange={handlePromptChange}
          placeholder="Describe the image you want to generate..."
          className="w-full p-2 border border-gray-300 rounded-md text-sm"
          rows={3}
        />
      </div>
      <button
        onClick={generateImage}
        disabled={!prompt.trim() || loading}
        className="w-full py-1 px-2 bg-purple-600 text-white rounded-md text-sm disabled:bg-gray-300"
      >
        {loading ? 'Generating...' : 'Generate Image'}
      </button>
      {generatedImage && (
        <div className="mt-3">
          <img src={generatedImage} alt="Generated" className="w-full h-auto rounded-md" />
        </div>
      )}
      <Handle type="target" position={Position.Left} id="input" />
    </div>
  );
};

export default ImageGenerationNode;