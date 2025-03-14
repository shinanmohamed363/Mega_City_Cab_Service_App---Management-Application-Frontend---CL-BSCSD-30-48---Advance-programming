import React, { useState } from 'react';
import CourierForm from './CourierForm';
import ManufacturerForm from './ManufacturerForm';

export default function Form() {
  const [selectedTab, setSelectedTab] = useState('courier');

  return (
    <div className="mx-auto mt-11 max-w-lg sm:mt-6 sm:mb-32 shadow-lg rounded-lg p-6 bg-white dark:bg-gray-800 backdrop-blur-sm bg-opacity-30">
      {/* Tabs Section */}
      <div className="flex space-x-4 mb-6 border-b border-gray-300 dark:border-gray-600">
        <button
          type="button"
          className={`w-full py-2 text-sm sm:text-base md:text-lg font-semibold transition-all ease-in-out duration-300 transform ${
            selectedTab === 'courier'
              ? 'bg-indigo-600/80 text-white border-b-4 border-indigo-600/80'
              : 'bg-transparent text-gray-900 dark:text-gray-300 hover:bg-indigo-600/50 hover:text-white hover:border-b-4 hover:border-indigo-600/35'
          } focus:outline-none`}
          onClick={() => setSelectedTab('courier')}
        >
          Courier
        </button>
        <button
          type="button"
          className={`w-full py-2 text-sm sm:text-base md:text-lg font-semibold transition-all ease-in-out duration-300 transform ${
            selectedTab === 'manufacturer'
              ? 'bg-indigo-600/80 text-white border-b-4 border-indigo-600/80'
              : 'bg-transparent text-gray-900 dark:text-gray-300 hover:bg-indigo-600/50 hover:text-white hover:border-b-4 hover:border-indigo-600/35'
          } focus:outline-none`}
          onClick={() => setSelectedTab('manufacturer')}
        >
          Manufacturer
        </button>
      </div>

      {/* Render the correct form based on the selected tab */}
      

      
      {selectedTab === 'courier' ? <CourierForm /> : <ManufacturerForm />}
     
    </div>
  );
}
