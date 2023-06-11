import React, { useState } from 'react';

const App = () => {
  const [isDivVisible, setDivVisible] = useState(false);

  const handleButtonClick = () => {
    setDivVisible(!isDivVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <button
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={handleButtonClick}
      >
        Toggle Div
      </button>
      {isDivVisible && (
        <div className="mt-4 w-64 bg-gray-200 rounded overflow-hidden transform transition-all duration-500 ease-in-out">
          <p className="p-4">This is the animated div</p>
        </div>
      )}
    </div>
  );
};

export default App;
