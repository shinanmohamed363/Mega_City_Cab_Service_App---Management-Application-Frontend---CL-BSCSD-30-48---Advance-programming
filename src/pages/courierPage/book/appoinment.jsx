import { Button } from '@material-tailwind/react';
import { Bell, CheckCircle, Package, Pencil, PencilLine, Search, Star, Trash } from 'lucide-react';
import React, { useState, useRef } from 'react';
import { topProducts } from '../../../constants';

const Appointment = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const areas = ['Area 1', 'Area 2', 'Area 3', 'Area 4']; // Example areas

  // Refs for the date and time input fields
  const toDateRef = useRef(null);
  const toTimeRef = useRef(null);
  const fromDateRef = useRef(null);
  const fromTimeRef = useRef(null);

  // Handle area selection
  const handleSelectArea = (e) => {
    setSelectedArea(e.target.value); // Set the selected area
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to handle the focus on date or time input field
  const handleFocus = (ref) => {
    ref.current?.focus(); // Focus on the input field when the parent div is clicked
  };

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="title">Trip</h1>
      <div className="card">
        <div className="card-header">
          <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
            <Pencil size={15} />
          </div>
          <p className="card-title">Insert Your Trip Schedule</p>
          
        </div>
        <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
          <div className="grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
            <div className="flex flex-col gap-y-1">
              <p className="inputlable">Post Area Number</p>
              <div className="inputfield">
                <select
                  name="area"
                  id="area"
                  value={selectedArea}
                  onChange={handleSelectArea}
                  className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:text-slate-50 focus:bg-white focus:text-slate-700 dark:focus:bg-slate-900 focus:text-white"
                >
                  <option value="">Select Area</option>
                  {areas.map((area, index) => (
                    <option
                      key={index}
                      value={area}
                      className="bg-transparent hover:bg-slate-950 hover:text-white"
                    >
                      {area}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-y-1">
              <p className="inputlable">Mode Of Delivery</p>
              <div className="inputfield">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Enter Mode Of Delivery"
                  className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:text-slate-50"
                  onChange={handleSearchChange}
                />
              </div>
            </div>

            {/* To Date Of Delivery */}
            <div
  className="flex flex-col gap-y-1"
  onClick={() => handleFocus(toDateRef)} // Focus on the date input when the parent div is clicked
>
  <p className="inputlable">To Date Of Delivery</p>
  <div className="inputfield">
    <input
      type="date"
      ref={toDateRef}
      name="toDate"
      id="toDate"
      placeholder="Choose date"
      className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:text-slate-50"
      onFocus={(e) => e.target.showPicker()} // This forces the date picker to show on focus (optional, for better compatibility)
    />
  </div>
</div>

            {/* To Time Of Delivery */}
            <div
  className="flex flex-col gap-y-1"
  onClick={() => handleFocus(toTimeRef)} // Focus on the time input when the parent div is clicked
>
  <p className="inputlable">To Time Of Delivery</p>
  <div className="inputfield">
    <input
      type="time"
      ref={toTimeRef}
      name="toTime"
      id="toTime"
      placeholder="Choose time"
      className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:text-slate-50"
      onFocus={(e) => e.target.showPicker()} // Explicitly triggers the time picker when the input is focused
    />
  </div>
</div>

            {/* From Date Of Delivery */}
          
            <div
  className="flex flex-col gap-y-1"
  onClick={() => handleFocus(fromDateRef)} // Focus on the date input when the parent div is clicked
>
  <p className="inputlable">from Date Of Delivery</p>
  <div className="inputfield">
    <input
      type="date"
      ref={fromDateRef}
      name="FromDate"
      id="FromDate"
      placeholder="Choose date"
      className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:text-slate-50"
      onFocus={(e) => e.target.showPicker()} // This forces the date picker to show on focus (optional, for better compatibility)
    />
  </div>
</div>

              
            <div
  className="flex flex-col gap-y-1"
  onClick={() => handleFocus(fromTimeRef)} // Focus on the time input when the parent div is clicked
>
  <p className="inputlable">To Time Of Delivery</p>
  <div className="inputfield">
    <input
      type="time"
      ref={fromTimeRef}
      name="FromTime"
      id="FromTime"
      placeholder="Choose time"
      className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:text-slate-50"
      onFocus={(e) => e.target.showPicker()} // Explicitly triggers the time picker when the input is focused
    />
  </div>
</div>


          </div>
          <div className="flex justify-center">
  <button
    type="submit"
    className="btn-ghost flex h-10 flex-shrink-0 items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors hover:bg-blue-50 hover:text-white bg-blue-500 dark:hover:bg-blue-700 dark:hover:text-slate-300 dark:bg-slate-900 
      w-full sm:w-auto md:w-1/2 lg:w-1/2 xl:w-1/2   
      hover:bg-blue-500
      dark:hover:bg-slate-900 dark:hover:text-slate-300
      dark:bg-slate-900 dark:text-slate-50
      bg-white text-slate-900"
  >
    <CheckCircle size={20} /> {/* Icon */}
    <span>Submit</span> {/* Button Text */}
  </button>
</div>
        </div>
     
      </div>

      <div className="card">
    <div className="card-header">
        <p className="card-title">Top Orders</p>
    </div>
    <div className="card-body p-0">
        <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
            <table className="table">
                <thead className="table-header">
                    <tr className="table-row">
                        <th className="table-head">#</th>
                        <th className="table-head">Postal Area</th>
                        <th className="table-head">Mode Of Delivery</th>
                        <th className="table-head">To Date</th>
                        <th className="table-head">To Time</th>
                        <th className="table-head">From Date</th>
                        <th className="table-head">From Time</th>
                        <th className="table-head">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {topProducts.map((product) => (
                        <tr
                         key={product.number} 
                         className="table-row">
                            <td className="table-cell">{product.number}</td>
                            <td className="table-cell">{product.postalArea}</td>
                            <td className="table-cell">{product.modeOfDelivery}</td>
                            <td className="table-cell">{product.toDate}</td>
                            <td className="table-cell">{product.toTime}</td>
                            <td className="table-cell">{product.fromDate}</td>
                            <td className="table-cell">{product.fromTime}</td>
                            <td className="table-cell">
                                <div className="flex items-center gap-x-3">
                                    <button className="text-blue-500 dark:text-blue-600">
                                        <PencilLine size={20} />
                                    </button>
                                    <button className="text-red-500">
                                        <Trash size={20} />
                                    </button>
                                    <button className=" grid-cols-1 flex text-yellow-500">
                                   
                                     <div className='items-center '>
                                     <Bell size={20} />
                                     </div>
                                     <div className='grid justify-end text-xs'>
                                      21
                                     </div>
                          
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
</div>

    </div>
  );
};

export default Appointment;
