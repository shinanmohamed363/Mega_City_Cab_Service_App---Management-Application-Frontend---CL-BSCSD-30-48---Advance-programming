import React, { useState } from 'react';

export default function ToggleButton() {
  const [isLogin, setIsLogin] = useState(true);  // State to track whether "Login" or "Register" is shown

  const toggleForm = () => {
    setIsLogin(!isLogin);  // Toggle between "Login" and "Register"
  };

  return (
    <div className="fixed bottom-0 inset-x-0 py-4 z-50">
      {/* Main Container with dynamic width adjustments for mobile and large screens */}
      <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 mx-auto p-4 rounded-xl shadow-lg flex items-center justify-between dark:bg-gray-800 bg-transparent backdrop-blur-sm backdrop-filter">

        {/* Left Side: Typography */}
        <div className="flex items-center justify-start px-4 sm:px-0 w-full sm:w-auto">
          <h2 className="text-xs sm:text-lg font-bold text-gray-800 dark:text-white w-full sm:w-auto text-left">
            Courier Connect  {/* Static text on the left */}
          </h2>
        </div>

        {/* Right Side: Links for Login/Register */}
        <div className="flex items-center justify-end px-4 sm:px-0 w-full sm:w-auto">
          {/* Conditional rendering for Login or Register */}
          {isLogin ? (
            <div
              onClick={toggleForm}
              className="cursor-pointer text-xs sm:text-lg font-medium text-gray-800 dark:text-white w-1/2 sm:w-1/3 md:w-auto text-right"
            >
              Login
            </div>
          ) : (
            <div
              onClick={toggleForm}
              className="cursor-pointer text-xs sm:text-lg font-medium text-gray-800 dark:text-white w-1/2 sm:w-1/3 md:w-auto text-right"
            >
              Register
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
