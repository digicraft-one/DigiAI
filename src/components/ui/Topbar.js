import React from 'react';

const Topbar = () => {
  return (
    <header className="h-14 bg-white border-b border-gray-200 flex items-center px-4 justify-between">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-gray-800">Digi AI Flow</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700 transition-colors">
          Save Flow
        </button>
        <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-gray-200 transition-colors">
          Clear
        </button>
      </div>
    </header>
  );
};

export default Topbar;