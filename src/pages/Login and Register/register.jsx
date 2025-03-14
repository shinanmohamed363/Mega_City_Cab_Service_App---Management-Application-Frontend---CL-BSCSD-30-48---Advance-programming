// src/pages/Register/Login.jsx

import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

import { useMediaQuery } from "@uidotdev/usehooks";
import { CheckCircle, Facebook, Globe, Instagram, LogIn, Truck, UserRound,UserPen, MoveRight, ArrowRight, MailSearch, MailCheck, Key, MailWarning, UserCheck, UserRoundCheck, LogInIcon, UserRoundSearch } from "lucide-react";
import axios from "axios";
import img from "../../assets/undraw_delivery-truck_mjui.svg";
import fectory from "../../assets/undraw_factory_4d61.svg";
import management from "../../assets/management.svg";
import car from "../../assets/car.svg";

export default function Register() {
 const [chooseType,setChooseType] = useState("type");
 const [currentstep,setCurrentStep]=useState("")

 const[formData, setFormData]=useState({
  preview: ""
        
})

const step={
  Administrator:["A1","A2","A3","A4"],
  Customer:["c1","c2"]
 };

    useEffect(()=>{
      if(chooseType==="administrator"){
        setCurrentStep(step.Administrator[0]);
      }
      else if(chooseType==="customer"){
        setCurrentStep(step.Customer[0]);
      }
      else{
        setCurrentStep("");
      }
    },[chooseType]);
    

    const handleNextStep = () => {
      if (chooseType && currentstep) {
        const currentIndex = step[chooseType].indexOf(currentstep);
        if (currentIndex < step[chooseType].length - 1) {
          setCurrentStep(step[chooseType][currentIndex + 1]);
        }
      }
    };
    const handlePreviousStep = () => {
      if (chooseType && currentstep) {
        const currentIndex = steps[chooseType].indexOf(currentstep);
        if (currentIndex > 0) {
          setCurrentStep(step[chooseType][currentIndex - 1]);
        }
      }
    };

    

    const handleLoginClick = () => {
      window.location.href = 'http://localhost:3001/Login'; // External URL
    };
    
  return (
    <div className="min-h-screen w-full dark:bg-slate-950 bg-white dark:bg-grid-slate-700 bg-grid-black/[0.2] flex flex-col relative">
  {/* Radial gradient for the container */}
  <div className="absolute pointer-events-none inset-0 dark:bg-slate-950 bg-white [mask-image:radial-gradient(ellipse_at_bottom,transparent_-10%,black)] z-0"></div>

  {/* Main Content */}
 
  <div className="grid grid-cols-1 min-h-screen justify-items-center items-center z-10 relative">
    {chooseType ==="type" &&(
    <div className="card lg:max-w-1/2 md:w-2/4 w-11/12">
      <div className="flex items-center justify-center gap-2">
        <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
          <UserRound size={20} />
        </div>
        <p className="card-title">Register</p>
      </div>

      <div className="grid grid-cols-1 ">
        <div className=" grid col-span-1 justify-center ">
        <p className="card-title"> How Would You Like to Register?</p>
        </div >
              
        <div className="flex justify-evenly items-center p-4 bottom-3 gap-3">
        
        <button className="max-h-44 max-w-40 w-full h-full rounded-lg dark:bg-slate-950 transition-colors flex justify-center align-middle dark:hover:bg-blue-600  hover:bg-blue-500"  onClick={() => setChooseType("administrator")}>
          <div className="flex flex-col items-center justify-center gap-2 p-2">
          <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors hover:bg-blue-500 hover:text-white dark:bg-slate-950 dark:text-blue-600  ">
          <img src={management} alt="manu"  className="w-36 h-16"/></div>
          <p className="card-title">Adminitration</p>
          </div> 
        </button>

        <button className="max-h-44 max-w-40 w-full h-full rounded-lg dark:bg-slate-950 flex flex-col items-center justify-center gap-2 p-2 transition-colors hover:bg-blue-500 dark:hover:bg-blue-600" onClick={() => setChooseType("customer")}>
          <div className="w-fit rounded-lg  p-2 text-blue-500 transition-colors hover:bg-blue-500  hover:text-white dark:bg-slate-950   dark:text-blue-600 ">
            <img src={car } alt="Delivery Truck" className="w-36 h-16" />
          </div>
          <p className="card-title">Customer</p>
        </button>
      </div>   
    </div>
   </div>
   )}
 
 {currentstep === "A1" && (

        <div className="card grid sm:grid-cols-1 w-11/12 lg:max-w-5xl md:grid-cols-2 lg:grid-cols-2 gap-4 mt-3">
          <div className="grid md:col-span-2 lg:col-span-2  col-span-1">
            <div className="flex items-center gap-2">
                               <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                   <UserPen size={15} />
                               </div>
                                   <p className="card-title">Manufecture Registation</p>
                       </div> 
            </div>
         <div className="gird col-span-1  ">
                <div className="flex flex-col gap-y-1 sm:pb-7 md:pb-1 lg:pb-1">
                      <p className="bookinputlable">Name</p>
                      <div className="bookinputfield">
                        <input
                          type="text"
                          name="Mode_of_delivery"
                        
                          placeholder="Enter Your Name"
                          className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                        
                        />
                      </div>
                </div>
                <div className="flex flex-col gap-y-1  ">
                      <p className="bookinputlable">Collection Addess</p>
                      <div className="bookinputfield">
                        <input
                          type="text"
                          name="Mode_of_delivery"
                        
                          placeholder="Enter Your Collection Address"
                          className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                        
                        />
                      </div>
                </div>

            </div>
          
            <div className="gird col-span-1 ">
            <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 ">
              <p className="bookinputlable">Profile Picture (Optional)</p>
              <div className="bookinputfield relative flex flex-col items-center justify-center h-28   rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-slate-950 dark:hover:bg-slate-950 ">
              {formData.preview ? (
                      // Show preview if an image is uploaded
                      <img
                       
                        alt="Uploaded Preview"
                        className="h-20 w-20 object-cover rounded-lg"
                      />
                    ) :(
                
                <div className="flex flex-col items-center justify-center gap-y-2">
                  <svg
                    className="w-8 h-8 text-slate-500 dark:text-slate-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="text-sm text-slate-500 dark:text-slate-300">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    SVG, PNG, JPG, or GIF (MAX. 800x400px)
                  </p>
                </div>)}
                <input
                  id="product_picture"
                  type="file"
                  accept="image/*"
                 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>
            </div>
            <div className="gird col-span-1 ">
         <div className="flex flex-col gap-y-1 ">
              <p className="bookinputlable">Email</p>
              <div className="bookinputfield">
                <input
                  type="text"
                  name="Mode_of_delivery"
                 
                  placeholder="Enter Your E-mail"
                  className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                
                />
              </div>
         </div>
            </div>
            <div className="gird col-span-1 ">
            <div className="flex flex-col gap-y-1 ">
              <p className="bookinputlable">Organization Name</p>
              <div className="bookinputfield">
                <input
                  type="text"
                  name="Mode_of_delivery"
                  placeholder="Enter Your Organization Name"
                  className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                
                />
              </div>
         </div>
            </div>
            <div className="gird col-span-1 ">
            <div className="flex flex-col gap-y-1 ">
              <p className="bookinputlable"> contact number</p>
              <div className="bookinputfield">
                <input
                  type="text"
                  name="Mode_of_delivery"
                  placeholder="Enter contact number"
                  className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                />
              </div>
         </div>
            </div>
            <div className="gird col-span-1 ">
            <div className="flex flex-col gap-y-1 ">
              <p className="bookinputlable">Secondary Contact Number (Optional)</p>
              <div className="bookinputfield">
                <input
                  type="text"
                  name="Mode_of_delivery"
                  placeholder="Enter secondary Contact Number"
                  className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                />
              </div>
         </div>
            </div>
          
            <div className=" flex md:col-span-2 lg:col-span-2 col-span-1 align-middle items-end justify-end ">
             <button
              onClick={handleNextStep}
             type="submit"
             className={`btn-ghost flex h-10 items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors 
               bg-blue-500 text-white hover:bg-blue-600 
               dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600 
               lg:max-w-52 md:max-w-52 w-full sm:w-auto md:w-1/2 lg:w-1/2 xl:w-1/2`}
           >
             <ArrowRight size={20} /> {/* Icon */}
             <span>Next</span> {/* Button Text */}
           </button>
            </div>
            
            
          </div>
  )}
   {currentstep === "A4" && (
          <div className=' card grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 grid-flow-row rounded-lg boarder  border-slate-300  bg-white p-1   transition-colors dark:border-slate-700 dark:bg-slate-900  gap-8 '>
          <div className='grid col-span-5 sm:col-span-5 p-2 gap-4  '>
                          <div className="flex items-center gap-2">
                              <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                  <MailSearch size={15} />
                              </div>
                                  <p className="card-title">Verify Email</p>
                      </div>     
                      <div className="card-noboarder flex justify-center items-center bg-slate-100 transition-colors dark:bg-slate-950 mx-auto max-w-6xl  w-full ">
                    
                      <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                      <MailSearch size={30} />
                  </div>
                  <p className="card-title text-center xl:text-xl lg:text-lg ">For verification purposes, we have sent a One-Time Password (OTP) to your registered email address. Please enter the OTP below to proceed</p>
                  
                  <div className="card-header mt-24">
                  <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                      <Key size={16} />
                  </div>
                 
                  <div className='card-header'></div>
                 
                  <input
  type="text"
  name="Mode_of_delivery"
  placeholder=" Enter OTP "
  className="w-full rounded-lg bg-blue-600/20 text-center text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
/>

             
                
                 

             
              </div>
              <p className="card-title text-center text-md  ">Please enter your One-Time Password (OTP) in the field above to proceed.</p> 
          </div>
          <div className='flex justify-center items-center'>
          <button
          onClick={handleNextStep}
          type="submit"


          className={`btn-ghost flex h-10 xl:w-40  items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors 
            bg-blue-500 text-white hover:bg-blue-600 
            dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600 
          `}
          >
          <UserRoundSearch size={20} /> 
          <span>Verify</span> 
          </button>
          </div>
          </div>
          
        
         
</div>    
  )}
  {currentstep==="A2" &&(
     <div className="card grid sm:grid-cols-1 w-11/12 lg:max-w-5xl md:grid-cols-2 lg:grid-cols-2 gap-4 mt-3">
       <div className="grid md:col-span-2 lg:col-span-2  col-span-1">
            <div className="flex items-center gap-2">
                <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                    <UserPen size={15} />
                </div>
                    <p className="card-title">Create Password</p>
            </div> 
                       
        </div>
        <div className="gird col-span-1 ">
         <div className="flex flex-col gap-y-1 ">
              <p className="bookinputlable">New Password</p>
              <div className="bookinputfield">
                <input
                  type="text"
                  name="Mode_of_delivery"
                 
                  placeholder="Enter Your Password"
                  className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                
                />
              </div>
         </div>
          </div>
            <div className="gird col-span-1 ">
             <div className="flex flex-col gap-y-1 ">
              <p className="bookinputlable">Re-Enter Password</p>
              <div className="bookinputfield">
                <input
                  type="text"
                  name="Mode_of_delivery"
                 
                  placeholder="Re-Enter Your Password"
                  className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                
                />
              </div>
           </div>
          </div>
          <div className=" flex md:col-span-2 lg:col-span-2 col-span-1 align-middle items-center justify-center ">
             <button
               onClick={handleNextStep}
             type="submit"
             className={`btn-ghost flex h-10 items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors 
               bg-blue-500 text-white hover:bg-blue-600 
               dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600 
               lg:max-w-52 md:max-w-52 w-full sm:w-auto md:w-1/2 lg:w-1/2 xl:w-1/2`}
           >
             <ArrowRight size={20} /> {/* Icon */}
             <span>Submit</span> {/* Button Text */}
           </button>
            </div>


    </div>
  )}
  {
    currentstep==="A3" &&(
     
      <div className="card grid sm:grid-cols-1 w-11/12 lg:max-w-5xl md:grid-cols-2 lg:grid-cols-2 gap-4 mt-3">
                <div className='grid col-span-5 sm:col-span-5 p-2 gap-4  '>
                                <div className="flex items-center gap-2">
                                    <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                        <UserCheck size={15} />
                                    </div>
                                        <p className="card-title">Registation Status</p>
                            </div>     
                            <div className="card-noboarder flex justify-center items-center bg-slate-100 transition-colors dark:bg-slate-950 mx-auto max-w-6xl  w-full ">
                          
                            <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <UserRoundCheck size={30} />
                        </div>
                        <p className="card-title text-center xl:text-xl lg:text-lg ">Welcome to Courier Connect, Shinan! Your account has been created successfully. We're excited to have you with us!</p>
                        
                        
                    <p className="card-title text-center text-md  ">You may now proceed to log in to your account.</p>

                </div>
                <div className='flex justify-center items-center'>
                <button

                type="button"
                onClick={handleLoginClick}
                className={`btn-ghost flex h-10 xl:w-40  items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors 
                  bg-blue-500 text-white hover:bg-blue-600 
                  dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600 
                `}
                >
                <LogInIcon size={20} /> {/* Icon */}
                <span>Login</span> {/* Button Text */}
                </button>
                </div>
                </div>
                
              
               
  </div>
 
    )
  }
  {
    currentstep==="c1" &&(
      <div className="card grid sm:grid-cols-1 w-11/12 lg:max-w-5xl md:grid-cols-2 lg:grid-cols-2 gap-4 mt-3">
      <div className="grid md:col-span-2 lg:col-span-2  col-span-1">
        <div className="flex items-center gap-2">
                           <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                               <UserPen size={15} />
                           </div>
                               <p className="card-title">Courier Registation</p>
                   </div> 
        </div>
     <div className="gird col-span-1  ">
            <div className="flex flex-col gap-y-1 sm:pb-7 md:pb-1 lg:pb-1">
                  <p className="bookinputlable">Name</p>
                  <div className="bookinputfield">
                    <input
                      type="text"
                      name="Mode_of_delivery"
                    
                      placeholder="Enter Your Name"
                      className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                    
                    />
                  </div>
            </div>
            <div className="flex flex-col gap-y-1  ">
                  <p className="bookinputlable">Addess</p>
                  <div className="bookinputfield">
                    <input
                      type="text"
                      name="Mode_of_delivery"
                    
                      placeholder="Enter Your Address"
                      className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                    
                    />
                  </div>
            </div>

        </div>
      
        <div className="gird col-span-1 ">
        <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 ">
          <p className="bookinputlable">Courier Profile Picture</p>
          <div className="bookinputfield relative flex flex-col items-center justify-center h-28   rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-slate-950 dark:hover:bg-slate-950 ">
          {formData.preview ? (
                  // Show preview if an image is uploaded
                  <img
                   
                    alt="Uploaded Preview"
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                ) :(
            
            <div className="flex flex-col items-center justify-center gap-y-2">
              <svg
                className="w-8 h-8 text-slate-500 dark:text-slate-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="text-sm text-slate-500 dark:text-slate-300">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                SVG, PNG, JPG, or GIF (MAX. 800x400px)
              </p>
            </div>)}
            <input
              id="product_picture"
              type="file"
              accept="image/*"
             
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
        </div>
        
        <div className="gird col-span-1 ">
     <div className="flex flex-col gap-y-1 ">
          <p className="bookinputlable">Email</p>
          <div className="bookinputfield">
            <input
              type="text"
              name="Mode_of_delivery"
             
              placeholder="Enter Your E-mail"
              className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
            
            />
          </div>
     </div>
        </div>
        <div className="gird col-span-1 ">
        <div className="flex flex-col gap-y-1 ">
          <p className="bookinputlable">Organization Name</p>
          <div className="bookinputfield">
            <input
              type="text"
              name="Mode_of_delivery"
              placeholder="Enter Your Organization Name"
              className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
            
            />
          </div>
     </div>
        </div>
        <div className="gird col-span-1 ">
        <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 ">
          <p className="bookinputlable">Vehical Picture</p>
          <div className="bookinputfield relative flex flex-col items-center justify-center h-28   rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-slate-950 dark:hover:bg-slate-950 ">
          {formData.preview ? (
                  // Show preview if an image is uploaded
                  <img
                   
                    alt="Uploaded Preview"
                    className="h-20 w-20 object-cover rounded-lg"
                  />
                ) :(
            
            <div className="flex flex-col items-center justify-center gap-y-2">
              <svg
                className="w-8 h-8 text-slate-500 dark:text-slate-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="text-sm text-slate-500 dark:text-slate-300">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500">
                SVG, PNG, JPG, or GIF (MAX. 800x400px)
              </p>
            </div>)}
            <input
              id="product_picture"
              type="file"
              accept="image/*"
             
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
        </div>
        </div>
        <div className="gird col-span-1  ">
            <div className="flex flex-col gap-y-1 sm:pb-7 md:pb-1 lg:pb-1">
                  <p className="bookinputlable">Name</p>
                  <div className="bookinputfield">
                    <input
                      type="text"
                      name="Mode_of_delivery"
                    
                      placeholder="Enter Your Name"
                      className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                    
                    />
                  </div>
            </div>
            <div className="flex flex-col gap-y-1  ">
                  <p className="bookinputlable">Addess</p>
                  <div className="bookinputfield">
                    <input
                      type="text"
                      name="Mode_of_delivery"
                    
                      placeholder="Enter Your Address"
                      className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                    
                    />
                  </div>
            </div>

        </div>
        <div className="gird col-span-1 ">
        <div className="flex flex-col gap-y-1 ">
          <p className="bookinputlable">Business Registation Number</p>
          <div className="bookinputfield">
            <input
              type="text"
              name="Mode_of_delivery"
              placeholder="Enter Business Registation Number"
              className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
            />
          </div>
     </div>
        </div>
        <div className="gird col-span-1 ">
        <div className="flex flex-col gap-y-1 ">
          <p className="bookinputlable">Business Contact Number</p>
          <div className="bookinputfield">
            <input
              type="text"
              name="Mode_of_delivery"
              placeholder="Enter Contact Number"
              className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
            />
          </div>
     </div>
        </div>
        <div className="gird col-span-1 ">
        <div className="flex flex-col gap-y-1 ">
          <p className="bookinputlable">Personal Contact Number</p>
          <div className="bookinputfield">
            <input
              type="text"
              name="Mode_of_delivery"
              placeholder="Enter Contact Number"
              className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
            />
          </div>
     </div>
        </div>
        <div className="gird col-span-1 ">
        <div className="flex flex-col gap-y-1 ">
          <p className="bookinputlable">National ID Number / passport ID Number</p>
          <div className="bookinputfield">
            <input
              type="text"
              name="Mode_of_delivery"
              placeholder="Enter National ID Number / passport ID Number "
              className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
            />
          </div>
     </div>
        </div>
        <div className=" flex md:col-span-2 lg:col-span-2 col-span-1 align-middle items-end justify-end ">
         <button
          onClick={handleNextStep}
         type="submit"
         className={`btn-ghost flex h-10 items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors 
           bg-blue-500 text-white hover:bg-blue-600 
           dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600 
           lg:max-w-52 md:max-w-52 w-full sm:w-auto md:w-1/2 lg:w-1/2 xl:w-1/2`}
       >
         <ArrowRight size={20} /> {/* Icon */}
         <span>Next</span> {/* Button Text */}
       </button>
        </div>
        
        
      </div>
    )
  }
   {
    currentstep==="c2" &&(
      <div>
        kk
        </div>
    )
  }
 
 </div>

</div>

  );
}
