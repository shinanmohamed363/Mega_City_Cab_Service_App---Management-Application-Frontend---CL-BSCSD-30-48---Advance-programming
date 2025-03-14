import { CheckCircle, CircleArrowLeft, Key, MailCheck, MailWarning, Package, TrendingUp, User, UserPen } from 'lucide-react';
import React, { useState } from 'react'
import { overviewData, recentSalesData, topProducts } from "@/constants";
import { Input } from '@material-tailwind/react';

const Book = () => {
  const [formData, setFormData] = useState({
    Mode_of_delivery: "",
    Postal_Code_Number: "",
    date_of_delivery: "",
    courierid: "",
    product_picture: null,
    preview: "",
    productName:"",
    Quentity:"",
    Categories:"",
    ToAddress:"",
    FromAddress:"",
    FromPostCode:"",
    description:"",
    Condition:"",
    ProductStatus: "",

  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handleerror=()=>{
    setCurrentStep((5))
  }

  const handleprevious=()=>{
    setCurrentStep((prev)=>prev-1);
  }
  const handleSubmit = () => {
    console.log("Form data submitted", formData);
    setCurrentStep((pre)=> pre+1);
  };
  const areas = ['Area 1', 'Area 2', 'Area 3', 'Area 4']; // Example areas
  const status= ['onehand','transit','delivery'];

// Handle area selection
const handleselectStatus = (e) => {
  const { value } = e.target;

  setFormData((prevFormData) => ({
    ...prevFormData,
    ProductStatus: value, // Update ProductStatus in formData
  
  }));
};


const handleSelectCategory=(e)=>{
  const {value} = e.target;
 
  setFormData((prevFormData)=>({
    ...prevFormData,
    Categories:value,

  }))

}
const handleSelectArea = (e) => {
  setSelectedArea(e.target.value); // Set the selected area
};


  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setFormData({ product_picture: file, preview });
    }
  };
  

  return (
    <div className='flex flex-col gap-y-4'>
        <h1 className='title'>Schedule Delivery</h1>
        {currentStep === 1 && (
        <div className='grid sm:grid-cols-1   md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 grid-flow-row rounded-lg border border-slate-300  bg-white p-1   transition-colors dark:border-slate-700 dark:bg-slate-900'>
            <div className='grid col-span-5 sm:col-span-5 p-2'>
                 <div className="flex items-center gap-2">
                    <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                        <UserPen size={15} />
                    </div>
                        <p className="card-title">Choose Your Courier</p>
            </div>     
            </div>
            <div className=' card-noboarder col-span-5 xl:col-span-2 flex items-starts justify-center  '>
            <div className="flex flex-col gap-y-1">
              <p className="bookinputlable">Mode Of Delivery</p>
              <div className="bookinputfield">
                <input
                  type="text"  
                  name="Mode_of_delivery"
                  value={formData.Mode_of_delivery}
                  onChange={handleInputChange}
                  placeholder="Enter Mode Of Delivery"
                  className="w-full bg-transparent text-slate-950 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <p className="bookinputlable">Postal Code Number</p>
              <div className="bookinputfield">
                <input
                  type="text"
                  name="Postal_Code_Number"
                  value={formData.Postal_Code_Number}
                  onChange={handleInputChange}
                  placeholder="Enter Postal Code Number "
                  className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-1">
              <p className="bookinputlable">date of delivery</p>
              <div className="bookinputfield">
                <input
                  type="text"
                  name="date_of_delivery"
                  value={formData.date_of_delivery}
                  onChange={handleInputChange}
                  placeholder="Enter Mode Of Delivery"
                  className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                
                />
              </div>
            </div>
            <div className="flex justify-center">
            <button
  type="submit"
  className={`btn-ghost flex h-10 items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors 
    bg-blue-500 text-white hover:bg-blue-600 
    dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600 
    w-full sm:w-auto md:w-1/2 lg:w-1/2 xl:w-1/2`}
>
  <CheckCircle size={20} /> {/* Icon */}
  <span>Search</span> {/* Button Text */}
</button>

</div>
      </div>
          <div className='grid card-noboarder col-span-5 xl:col-span-3  bg-slate-100 transition-colors dark:bg-slate-950 xl:mx-5'>
            <div className="card-header justify-between ">
                    <p className="card-title">Courier based on priority Rating</p>
                    <p className="card-title">Date :24/5/2025</p>
                </div>
                <div className="card-header justify-between  bg-blue-500/20 p-2 rounded-lg text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                        <p className="card-title"> Courier Detailes</p>
                        <p className="card-title"> Mode: Van</p>
                    </div>
                    <div className="card-body h-[200px] overflow-auto p-0 [scrollbar-width:_thin]">
                        {recentSalesData.map((sale) => (
                            <div
                                key={sale.id}
                                className="flex items-center justify-between gap-x-4 py-2 pr-2"
                            >
                                <div className="flex items-center gap-x-4">
                                    <img
                                        src={sale.image}
                                        alt={sale.name}
                                        className="size-10 flex-shrink-0 rounded-full object-cover"
                                    />
                                    <div className="flex flex-col gap-y-2">
                                        <p className="font-medium text-slate-900 dark:text-slate-50">{sale.name}</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">contacts</p>
                                    </div>
                                </div>
                               
                                
                                <span    n className="flex w-fit items-center gap-x-2 rounded-full border border-blue-500 px-1 py-1 font-medium text-blue-500 dark:border-blue-600 dark:text-blue-600">
                            Collected
                        </span>
                               
                            </div>
                        ))}
                    </div>

                <div className="card-body p-0">
              
                </div>

                            
          </div>
        
            <div className='grid col-span-5 sm:col-span-5 p-2'>
                 <div className="flex items-center gap-2 xl:justify-end px-4 justify-end  w-full ">
                    
                    <button
                   onClick={handleNext}
  type="submit"
  className={`btn-ghost flex h-10 items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors 
    bg-blue-500 text-white hover:bg-blue-600 
    dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600 
   `}
>
  <CheckCircle size={20} /> {/* Icon */}
  <span>Next</span> {/* Button Text */}
</button>
            </div>    
             
            </div>
        </div>
)}
{
currentStep === 2 && (
          <div className=' grid sm:grid-cols-1 gap-x-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4  grid-flow-row rounded-lg border border-slate-300 bg-white p-1 transition-colors  dark:border-slate-700 dark:bg-slate-900 '>
             <div className='grid col-span-4 sm:col-span-4 p-2  '>
             <div className="flex items-center gap-2 ">
                    <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                        <UserPen size={15} />
                    </div>
                        <p className="card-title">Insert Your Product Detailes</p>
                    </div>        
            </div>
            <div className='xl:col-span-2 col-span-4 gap-y-3  flex flex-col gap-y-1 p-2 '>
         <div className=''>
          <p className="bookinputlable">Name</p>
              <div className="bookinputfield ">
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleInputChange}
                  placeholder="Enter Product Name"
                  className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                />
            </div>
        </div>
              <div>
            <p className="bookinputlable">Quentity</p>
              <div className="bookinputfield">
                <input
                  type="text"
                  name="Quentity"
                  value={formData.Quentity}
                  onChange={handleInputChange}
                  placeholder="Enter Quentity"
                  className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                />
            </div>
            </div>
            </div>
             <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
              <p className="bookinputlable">Product Picture</p>
              <div className="bookinputfield relative flex flex-col items-center justify-center h-28   rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-slate-950 dark:hover:bg-slate-950 ">
              {formData.preview ? (
                      // Show preview if an image is uploaded
                      <img
                        src={formData.preview} 
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
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>

            <div className='xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2'>
            
              <p className="bookinputlable">Categories</p>
              
              <div className="bookinputfield ">
                <select
                  name="area"
                  id="area"
                  value={formData.Categories}
                  onChange={handleSelectCategory}
                  className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:text-slate-50 focus:bg-slate-300/10 focus:text-slate-700 dark:focus:bg-slate-900 focus:text-slate-500"
                >
                  <option value="">Select Area</option>
                  {areas.map((area, index) =>  (
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
           
           
            <div className=' xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2 '>
              <p className="bookinputlable">ProductStatus</p>
              <div className="bookinputfield ">
                <select
                  name="status"
                  id="status"
                  value={formData.ProductStatus}
                  onChange={handleselectStatus}
                  className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-500 dark:text-slate-50 focus:bg-slate-300/10 focus:text-slate-700 dark:focus:bg-slate-900 focus:text-slate-500"
                >
                  <option value="">Select Status</option>
                  {status.map((status, index) =>  (
                    <option
                      key={index}
                      value={status}
                      className="bg-transparent hover:bg-slate-950 hover:text-white"
                    >
                      {status}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className=' xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2 '>
              <p className="bookinputlable">To Address</p>
              <div className="bookinputfield">
                <input
                  type="text"
                  name="ToAddress"
                  value={formData.ToAddress}
                  onChange={handleSelectArea}
                  placeholder="Enter To Address"
                  className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                />
              </div>
            </div>
            <div className=' xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2 '>
              <p className="bookinputlable">From Address</p>
              <div className="bookinputfield">
                <input
                  type="text"
                  name="FromAddress"
                  value={formData.FromAddress}
                  onChange={handleInputChange}
                  placeholder="Enter From Address"
                  className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                />
              </div>
            </div>
          
            <div className=' xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2 '>
              <p className="bookinputlable">From Post Code</p>
              <div className="bookinputfield">
                <input
                  type="text"
                  name="From Post Code"
                  value={formData.FromPostCode}
                  onChange={handleInputChange}
                  placeholder="Enter From Post Code"
                  className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                />
              </div>
            </div>
            <div className=' xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2 '>
              <p className="bookinputlable">Description</p>
              <div className="bookinputfield">
                <input
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter Description"
                  className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                />
              </div>
            </div>
         
            <div className=' xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2 '>
              <p className="bookinputlable">Condition</p>
              <div className="bookinputfield">
                <input
                  type="text"
                  name="Condition"
                  value={formData.Condition}
                  onChange={handleInputChange}
                  placeholder="Enter Mode Of Delivery"
                  className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                />
              </div>
            </div>
            <div className=' xl:col-span-2 col-span-4 flex xl:flex-row md:flex-row gap-y-1 p-2 justify-evenly items-center w-full '>
            <button
                  
                  type="Prev"
                  onClick={handleprevious}
                  className={`btn-ghost flex h-10 xl:w-40   items-center justify-  gap-x-2 rounded-lg p-4 mt-2 transition-colors 
                    bg-blue-500 text-white hover:bg-blue-600 
                    dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600 
                   `}
                >
                  
                  <CircleArrowLeft size={20} /> {/* Icon */}
                  <span>Previous</span> {/* Button Text */}
                </button>
                <button
                  onClick={handleerror}
                  type="submit"
                  
                  className={`btn-ghost flex h-10 xl:w-40  items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors 
                    bg-blue-500 text-white hover:bg-blue-600 
                    dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600 
                   `}
                >
                  <CheckCircle size={20} /> {/* Icon */}
                  <span>submit</span> {/* Button Text */}
                </button>
                       
            </div>

           
          

          </div>
        )}
        {
currentStep === 3 && (
  <div className='flex flex-col gap-y-4 '>
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
                            <MailCheck size={30} />
                        </div>
                        <p className="card-title text-center xl:text-xl lg:text-lg ">Booking successful! Once the courier confirms your request, we will notify you promptly </p>
                        
                        <div className="card-header mt-24">
                        <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                            <Key size={16} />
                        </div>
                       
                        <div className='card-header'></div>
                        <div className="card-noboarder h-5 justify-center dark:text-slate-500 overflow-hidden">
                  <p >000123bc</p>
                      </div>
                        <button className="card-title border dark:border-slate-700 rounded-lg px-2 py-1 hover:bg-blue-600 ">Copy</button>

                   
                    </div>
                    <p className="card-title text-center text-md  ">This is tracking key you can use to track status</p>

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
  </div>
 
  
)}
{
currentStep === 5 && (
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
                            <MailWarning size={30} />
                        </div>
                        <p className="card-title text-center xl:text-xl lg:text-lg ">An error occurred while processing your request.</p>
                        
                        
                    <p className="card-title text-center text-md  ">Please Try Again</p>

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
    </div>
)}

    </div>
  )
}
export default Book;
