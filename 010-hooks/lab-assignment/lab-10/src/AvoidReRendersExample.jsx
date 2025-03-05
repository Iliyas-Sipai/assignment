import React, { useState, useRef } from "react";

const AvoidReRendersExample = () => {
  console.log("Component Rendered");

  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const incrementState = () => {
    setCount(count + 1);
  };

  const incrementRef = () => {
    countRef.current += 1;
    console.log("Ref Value:", countRef.current);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-2xl font-bold">Avoid Re-renders using useRef</h1>
      
      <p className="text-lg">State Count: {count}</p>
      <button 
        onClick={incrementState} 
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Increment State
      </button>

      <p className="text-lg">Ref Count: {countRef.current}</p>
      <button 
        onClick={incrementRef} 
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Increment Ref (No Re-render)
      </button>
    </div>
  );
};

export default AvoidReRendersExample;