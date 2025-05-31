import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';
import useFlowStore from '../../../store/flowStore';

const PDFNode = ({ id, data }) => {
  const [pdfName, setPdfName] = useState('');
  const [pdfContent, setPdfContent] = useState(null);
  const updateNodeData = useFlowStore((state) => state.updateNodeData);

  const handlePdfUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPdfName(file.name);
      // In a real app, you would use a PDF parsing library here
      // For now, we'll just store the file reference
      updateNodeData(id, { pdfFile: file.name, pdfContent: 'PDF content would be extracted here' });
      setPdfContent('PDF content would be extracted here');
    }
  };

  return (
    <div className="p-3 rounded-md bg-white shadow-md border border-gray-200 w-64">
      <div className="font-bold text-sm mb-2">PDF Node</div>
      <div className="mb-2">
        <input 
          type="file" 
          accept=".pdf" 
          onChange={handlePdfUpload} 
          className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-50 file:text-blue-700
                    hover:file:bg-blue-100"
        />
      </div>
      {pdfName && (
        <div className="mt-2 text-xs">
          <p className="font-medium">Loaded: {pdfName}</p>
          <p className="text-gray-500 mt-1 truncate">{pdfContent}</p>
        </div>
      )}
      <Handle type="source" position={Position.Right} id="output" />
    </div>
  );
};

export default PDFNode;