import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import useFlowStore from '../../../store/flowStore';

const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data.text || '');
  const updateNodeData = useFlowStore((state) => state.updateNodeData);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    updateNodeData(id, { text: newText });
  };

  return (
    <div className="p-3 rounded-md bg-white shadow-md border border-gray-200 w-64">
      <div className="font-bold text-sm mb-2">Text Node</div>
      <div className="mb-2">
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Enter your text here..."
          className="w-full p-2 border border-gray-300 rounded-md text-sm"
          rows={4}
        />
      </div>
      <Handle type="source" position={Position.Right} id="output" />
    </div>
  );
};

export default TextNode;