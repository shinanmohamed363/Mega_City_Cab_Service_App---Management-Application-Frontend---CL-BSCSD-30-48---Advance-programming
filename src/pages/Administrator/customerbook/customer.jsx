import { CheckCircle, CircleArrowLeft, Key, MailCheck, MailWarning, Package, TrendingUp, User, UserCheck, UserPen } from 'lucide-react';
import React, { useState } from 'react'
import { overviewData, recentSalesData, topProducts } from "@/constants";
import { Description } from '@headlessui/react';


 const customer = () => {
  const [formData,setFormData]=useState({
    name:"",
    address:"",
    mobile:"",
    username:"",
    password:"",
    nic:"",

  });

  const [currentStep,setCurrentStep]=useState(1);

 const handleNaxt=()=>{
  setCurrentStep((prev)=>prev + 1);
 };
 const handleerror=()=>{
  setCurrentStep((3));
 }
 const handleprevious=()=>{
  setCurrentStep((prev)=>prev-1);
 }

  return (
    <div className='flex flex-col gap-y-4'>
      <h1 className='title'>Register Customer</h1>
      {currentStep === 1 && (
      <div className=' grid sm:grid-cols-1 gap-x-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4  grid-flow-row rounded-lg border border-slate-300 bg-white p-1 transition-colors  dark:border-slate-700 dark:bg-slate-900 '>
                   <div className='grid col-span-4 sm:col-span-4 p-2  '>
                   <div className="flex items-center gap-2 ">
                          <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                              <UserCheck size={15} />
                          </div>
                              <p className="card-title">Insert Customer Detailes  </p>
                          </div>        
                  </div>
                  <div className='xl:col-span-2 col-span-4 gap-y-3  flex flex-col gap-y-1 p-2 '>
             
                    <div>
                  <p className="bookinputlable">Name</p>
                    <div className="bookinputfield">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                       
                        placeholder="Enter customer name"
                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                      />
                  </div>
                  </div>
                  </div>
                   
      
                 
              
                  <div className=' xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2 '>
                    <p className="bookinputlable">Address</p>
                    <div className="bookinputfield">
                      <input
                        type="text"
                        name="Address"
                        value={formData.address}
                     
                        placeholder="Enter Customer Address"
                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                      />
                    </div>
                  </div>
                  <div className=' xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2 '>
                    <p className="bookinputlable">Mobile</p>
                    <div className="bookinputfield">
                      <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}  
                        placeholder="Enter Customer Mobile"
                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                      />
                    </div>
                  </div>
                
                  <div className=' xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2 '>
                    <p className="bookinputlable">National ID Number</p>
                    <div className="bookinputfield">
                      <input
                        type="text"
                        name="NIC"
                        value={formData.nic}
                      
                        placeholder="Enter From Post Code"
                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                      />
                    </div>
                  </div>
               
               
                  <div className=' xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2 '>
                    <p className="bookinputlable">user Name</p>
                    <div className="bookinputfield">
                      <input
                        type="text"
                        name="Condition"
                        value={formData.username}
                   
                        placeholder="Enter Mode Of Delivery"
                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                      />
                    </div>
                  </div>
                  <div className=' xl:col-span-2 col-span-4 flex xl:flex-row md:flex-row gap-y-1 p-2 justify-evenly items-center w-full '>
                
                      <button
                        onClick={handleNaxt}
                        type="submit"
                        
                        className={`btn-ghost flex h-10 xl:w-40  items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors 
                          bg-blue-500 text-white hover:bg-blue-600 
                          dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600 
                         `}
                      >
                        <CheckCircle size={20} /> {/* Icon */}
                        <span>Submit</span> {/* Button Text */}
                      </button>
                             
                  </div>
      
                 
          
      
                </div> )}
                {currentStep === 2 && (
      <div flex  flex-col gap-y-4>
          <div className=' card grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 grid-flow-row rounded-lg boarder  border-slate-300  bg-white p-1   transition-colors dark:border-slate-700 dark:bg-slate-900  gap-8 '>
                      <div className='grid col-span-5 sm:col-span-5 p-2 gap-4  '>
                                      <div className="flex items-center gap-2">
                                          <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                              <UserPen size={15} />
                                          </div>
                                              <p className="card-title">Message Status</p>
                                  </div>     
                                  <div className="card-noboarder flex justify-center items-center bg-slate-100 transition-colors dark:bg-slate-950 mx-auto max-w-6xl  w-full ">
                                
                                  <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                  <UserCheck size={30} />
                              </div>
                              <p className="card-title text-center xl:text-xl lg:text-lg ">Customer Booking Successful.</p>
                              
                              
                          
      
                      </div>
                      <div className='flex justify-center items-center'>
                      <button
      
                      type="submit"
      
                      className={`btn-ghost flex h-10 xl:w-40  items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors 
                        bg-blue-500 text-white hover:bg-blue-600 
                        dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600 
                      `}
                      >
                      <CheckCircle size={20} /> {/* Icon */}
                      <span>Home</span> {/* Button Text */}
                      </button>
                      </div>
                      </div>
                      
                    
                     
        </div>
          </div>)}


    </div>
  )
}

export default customer;