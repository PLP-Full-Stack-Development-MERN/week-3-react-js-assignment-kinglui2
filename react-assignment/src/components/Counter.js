import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-4">Counter</h2>
      <p className="text-gray-700 text-center text-2xl mb-4">{count}</p>
      <div className="flex justify-center space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
