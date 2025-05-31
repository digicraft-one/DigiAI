import React from 'react';
import useFlowStore from '../../store/flowStore';

const Sidebar = () => {
  const addNode = useFlowStore((state) => state.addNode);

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="w-64 bg-white border-l border-gray-200 h-full overflow-y-auto p-4">
      <h3 className="text-lg font-semibold mb-4">Nodes</h3>
      
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-500 mb-2">Input Nodes</h4>
        <div className="space-y-2">
          <div 
            className="p-2 bg-blue-50 border border-blue-200 rounded-md cursor-move flex items-center"
            draggable
            onDragStart={(e) => onDragStart(e, 'imageNode')}
          >
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm">Image Node</span>
          </div>
          
          <div 
            className="p-2 bg-red-50 border border-red-200 rounded-md cursor-move flex items-center"
            draggable
            onDragStart={(e) => onDragStart(e, 'pdfNode')}
          >
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm">PDF Node</span>
          </div>
          
          <div 
            className="p-2 bg-green-50 border border-green-200 rounded-md cursor-move flex items-center"
            draggable
            onDragStart={(e) => onDragStart(e, 'textNode')}
          >
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v-1H5v1h10zm0 3v-1H5v1h10z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm">Text Node</span>
          </div>
          
          <div 
            className="p-2 bg-yellow-50 border border-yellow-200 rounded-md cursor-move flex items-center"
            draggable
            onDragStart={(e) => onDragStart(e, 'urlNode')}
          >
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm">URL Node</span>
          </div>
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-gray-500 mb-2">Processing Nodes</h4>
        <div className="space-y-2">
          <div 
            className="p-2 bg-purple-50 border border-purple-200 rounded-md cursor-move flex items-center"
            draggable
            onDragStart={(e) => onDragStart(e, 'llmNode')}
          >
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
            </div>
            <span className="text-sm">LLM Node</span>
          </div>
          
          <div 
            className="p-2 bg-indigo-50 border border-indigo-200 rounded-md cursor-move flex items-center"
            draggable
            onDragStart={(e) => onDragStart(e, 'imageGenerationNode')}
          >
            <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
              </svg>
            </div>
            <span className="text-sm">Image Generation</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;