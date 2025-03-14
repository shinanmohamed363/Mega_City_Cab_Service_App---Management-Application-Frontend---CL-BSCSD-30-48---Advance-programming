import React, { useState } from 'react';

export default function ManufacturerForm() {
    const [formData, setFormData] = useState({
      name: '',
      address: '',
      contact: '',
    });
    const [agreed, setAgreed] = useState(false); // For the "Agree to policies" checkbox
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const response = await fetch('/api/manufacturer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Manufacturer form submitted successfully');
          setFormData({ name: '', address: '', contact: '' }); // Reset the form
        } else {
          console.error('Failed to submit manufacturer form');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <div className="max-h-[45vh] sm:max-h-[70vh] overflow-y-auto sm:overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            
           
  <div className="relative z-0 w-full mb-5 group mt-2">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  
  <div className="relative z-0 w-full mb-5 group mt-2">
      <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
 
          </div>
        </div>
  
        {/* Agree to policies checkbox */}
        <div className="sm:sticky sm:bottom-10 sm:w-full mt-8">
          <div className="mt-6 sm:mt-4">
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={() => setAgreed(!agreed)}
                  className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 dark:bg-gray-600 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                />
              </div>
              <label className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400">
                By selecting this, you agree to our{' '}
                <a href="#" className="font-semibold text-indigo-600 dark:text-indigo-400">
                  privacy&nbsp;policy
                </a>
                .
              </label>
            </div>
          </div>
        </div>
  
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          Submit
        </button>
      </form>
    );
}
