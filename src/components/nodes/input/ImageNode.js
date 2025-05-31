import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import useFlowStore from '../../../store/flowStore';

const ImageNode = ({ id, data }) => {
  const [image, setImage] = useState(null);
  const updateNodeData = useFlowStore((state) => state.updateNodeData);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        setImage(imageData);
        updateNodeData(id, { imageData });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-3 rounded-md bg-white shadow-md border border-gray-200 w-64">
      <div className="font-bold text-sm mb-2">Image Node</div>
      <div className="mb-2">
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageUpload} 
          className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
        />
      </div>
      {image && (
        <div className="mt-2">
          <img src={image} alt="Uploaded" className="w-full h-auto rounded" />
        </div>
      )}
      <Handle type="source" position={Position.Right} id="output" />
    </div>
  );
};

export default ImageNode;