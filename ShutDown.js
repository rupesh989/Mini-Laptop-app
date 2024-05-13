import React from "react";

// Last screen - shutdown screen
const ShutDown = () => {
  return (
    <div className="shutdown h-full w-full flex flex-col justify-center gap-2 items-center text-white bg-gradient-to-b from-red-800 to-red-600">
      <svg
        role="status"
        className="w-7 h-7 text-gray-200 animate-spin dark:text-gray-600 fill-black"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      
          
      
       </svg>
      <p>Shutting down</p>
    </div>
  );
};

export default ShutDown;
