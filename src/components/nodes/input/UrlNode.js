import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import useFlowStore from '../../../store/flowStore';

const UrlNode = ({ id, data }) => {
  const [url, setUrl] = useState(data.url || '');
  const [loading, setLoading] = useState(false);
  const [extracted, setExtracted] = useState(false);
  const updateNodeData = useFlowStore((state) => state.updateNodeData);

  const handleUrlChange = (e) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    updateNodeData(id, { url: newUrl });
  };

  const extractContent = () => {
    setLoading(true);
    // In a real app, you would fetch and extract content from the URL here
    // For now, we'll simulate it with a timeout
    setTimeout(() => {
      const extractedContent = `Content extracted from ${url}`;
      updateNodeData(id, { url, extractedContent });
      setLoading(false);
      setExtracted(true);
    }, 1000);
  };

  return (
    <div className="p-3 rounded-md bg-white shadow-md border border-gray-200 w-64">
      <div className="font-bold text-sm mb-2">URL Node</div>
      <div className="mb-2">
        <input
          type="url"
          value={url}
          onChange={handleUrlChange}
          placeholder="https://example.com"
          className="w-full p-2 border border-gray-300 rounded-md text-sm"
        />
      </div>
      <button
        onClick={extractContent}
        disabled={!url || loading}
        className="w-full py-1 px-2 bg-blue-500 text-white rounded-md text-sm disabled:bg-gray-300"
      >
        {loading ? 'Extracting...' : extracted ? 'Re-extract' : 'Extract Content'}
      </button>
      {extracted && (
        <div className="mt-2 text-xs text-gray-500">
          <p>Content extracted</p>
        </div>
      )}
      <Handle type="source" position={Position.Right} id="output" />
    </div>
  );
};

export default UrlNode;