import React, { useState,useEffect } from 'react'
import { CheckCircle, CircleArrowLeft, Key, MailCheck, MailWarning, Package, TrendingUp, User, UserPen, UserPlus, Star, PencilLine, Trash, UserRound, UserCheck, Car, CarTaxiFront, CarFront, Bell } from 'lucide-react';
import { overviewData, recentSalesData, topProducts } from "@/constants";
import { deliveryProducts } from "@/constants";
import car from "../../../assets/car.svg";
import management from "../../../assets/management.svg";
import axios from 'axios';
const vehical = () => {

 const [chooseType,setChooseType] = useState("type");
 const [currentstep,setCurrentStep]=useState("")
const [formData,setFormData]=useState("")
 const [formPremiumData, setFormPremiumData] = useState({
  type: "PREMIUM", // Default type for Premium vehicle
  name: "",
  model: "",
  color: "",
  year: "",
  registrationNumber: "",
  seatingCapacity: "",
  hasWiFi: "No", // Default value for radio buttons
});

const [formRegularData, setFormRegularData] = useState({
  type: "REGULAR",
  name: "",
  model: "",
  color: "",
  year: "",
  registrationNumber: "",
  seatingCapacity: "",
});
const [formVIPData, setFormVIPData] = useState({
  type: "VIP",
  name: "",
  model: "",
  color: "",
  year: "",
  registrationNumber: "",
  seatingCapacity: "",
  hasChauffeurService: "No", // Default value for radio buttons
});

const [vipVehicles, setVipVehicles] = useState([]);
const[PremiumVehicles,setPremiumVehicles]=useState([]);
const[RegularVehicles,setRegularVehicles]=useState([]);
const [selectedVehicleId, setSelectedVehicleId] = useState(null);
useEffect(() => {
  if (currentstep === "V1") {
    fetchVIPVehicles();
  }
  else if(currentstep==="P1"){
    fetchPremiumVehicles();
  }
  else if(currentstep==="R1"){
    fetchRegularVehicle();
  }
}, [currentstep]);


// Function to fetch VIP vehicles from the backend
const fetchVIPVehicles = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/vehicle?type=VIP"
    );
    setVipVehicles(response.data); // Update state with fetched data
  } catch (error) {
    console.error("Error fetching VIP vehicles:", error);
  }
};
// Function to fetch VIP vehicles from the backend
const fetchPremiumVehicles = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/vehicle?type=Premium"
    );
    setPremiumVehicles(response.data); // Update state with fetched data
  } catch (error) {
    console.error("Error fetching VIP vehicles:", error);
  }
};
  const  fetchRegularVehicle = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/vehicle?type=Regular"
      );
      setRegularVehicles(response.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching VIP vehicles:", error);
    }
  };

const handleUpdateSubmit = async (e, vehicleId) => {
  e.preventDefault();

  // Validate input fields
  if (
    !formPremiumData.name ||
    !formPremiumData.model ||
    !formPremiumData.color ||
    !formPremiumData.year ||
    !formPremiumData.registrationNumber ||
    !formPremiumData.seatingCapacity
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  try {
    // Parse numeric fields safely
    const year = parseInt(formPremiumData.year, 10);
    const registrationNumber = parseInt(formPremiumData.registrationNumber, 10);
    const seatingCapacity = parseInt(formPremiumData.seatingCapacity, 10);

    // Validate numeric fields
    if (isNaN(year) || isNaN(registrationNumber) || isNaN(seatingCapacity)) {
      alert("Please enter valid numeric values for Year, Registration Number, and Seating Capacity.");
      return;
    }

    // Construct payload
    const payload = {
      type: formPremiumData.type,
      name: formPremiumData.name,
      model: formPremiumData.model,
      color: formPremiumData.color,
      year: year,
      registration_number: registrationNumber,
      seating_capacity: seatingCapacity,
      hasWiFi: formPremiumData.hasWiFi === "Yes", // Convert to boolean
    };

    console.log("Updating vehicle with ID:", vehicleId); // Debugging: Log vehicle ID
    console.log("Sending payload:", payload); // Debugging: Log payload

    // Send data to the backend API using PUT method
    const response = await fetch(
      `http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/vehicle?id=${vehicleId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include",
      }
    );

    const responseData = await response.json(); // Parse response JSON
    console.log("Backend response:", responseData); // Debugging: Log backend response

    if (response.ok) {
      alert("Vehicle updated successfully!");
      // Reset form after successful submission
      setFormPremiumData({
        type: "PREMIUM",
        name: "",
        model: "",
        color: "",
        year: "",
        registrationNumber: "",
        seatingCapacity: "",
        hasWiFi: "No",
      });
      // Refetch vehicles to reflect the updated data
      fetchPremiumVehicles();
    } else {
      alert(`Failed to update vehicle. Error: ${responseData.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error("Error updating vehicle:", error);
    alert("An error occurred while updating the vehicle.");
  }
};

const handleRegularUpdateSubmit = async (e, vehicleId) => {
  e.preventDefault();

  // Validate input fields
  if (
      !formRegularData.name ||
      !formRegularData.model ||
      !formRegularData.color ||
      !formRegularData.year ||
      !formRegularData.registrationNumber ||
      !formRegularData.seatingCapacity
  ) {
      alert("Please fill in all required fields.");
      return;
  }

  try {
      // Parse numeric fields safely
      const year = parseInt(formRegularData.year, 10);
      const registrationNumber = parseInt(formRegularData.registrationNumber, 10);
      const seatingCapacity = parseInt(formRegularData.seatingCapacity, 10);

      // Validate numeric fields
      if (isNaN(year) || isNaN(registrationNumber) || isNaN(seatingCapacity)) {
          alert("Please enter valid numeric values for Year, Registration Number, and Seating Capacity.");
          return;
      }

      // Construct payload
      const payload = {
          type: formRegularData.type,
          name: formRegularData.name,
          model: formRegularData.model,
          color: formRegularData.color,
          year: year,
          registration_number: registrationNumber,
          seating_capacity: seatingCapacity,
      };

      console.log("Updating vehicle with ID:", vehicleId); // Debugging: Log vehicle ID
      console.log("Sending payload:", payload); // Debugging: Log payload

      // Send data to the backend API using PUT method
      const response = await fetch(
          `http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/vehicle?id=${vehicleId}`,
          {
              method: "PUT",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
              credentials: "include",
          }
      );

      const responseData = await response.json(); // Parse response JSON
      console.log("Backend response:", responseData); // Debugging: Log backend response

      if (response.ok) {
          alert("Vehicle updated successfully!");
          // Reset form after successful submission
          setFormRegularData({
              type: "REGULAR",
              name: "",
              model: "",
              color: "",
              year: "",
              registrationNumber: "",
              seatingCapacity: "",
          });
          setSelectedVehicleId(null); // Clear the selected vehicle ID
          // Refetch vehicles to reflect the updated data
          fetchRegularVehicle();
      } else {
          alert(`Failed to update vehicle. Error: ${responseData.message || "Unknown error"}`);
      }
  } catch (error) {
      console.error("Error updating vehicle:", error);
      alert("An error occurred while updating the vehicle.");
  }
};



const handleVIPUpdateSubmit = async (e, vehicleId) => {
  e.preventDefault();

  // Validate input fields
  if (
      !formVIPData.name ||
      !formVIPData.model ||
      !formVIPData.color ||
      !formVIPData.year ||
      !formVIPData.registrationNumber ||
      !formVIPData.seatingCapacity ||
      !formVIPData.hasChauffeurService
  ) {
      alert("Please fill in all required fields.");
      return;
  }

  try {
      // Parse numeric fields safely
      const year = parseInt(formVIPData.year, 10);
      const registrationNumber = parseInt(formVIPData.registrationNumber, 10);
      const seatingCapacity = parseInt(formVIPData.seatingCapacity, 10);

      // Validate numeric fields
      if (isNaN(year) || isNaN(registrationNumber) || isNaN(seatingCapacity)) {
          alert("Please enter valid numeric values for Year, Registration Number, and Seating Capacity.");
          return;
      }

      // Construct payload
      const payload = {
          type: formVIPData.type,
          name: formVIPData.name,
          model: formVIPData.model,
          color: formVIPData.color,
          year: year,
          registration_number: registrationNumber,
          seating_capacity: seatingCapacity,
          has_chauffeur_service: formVIPData.hasChauffeurService === "Yes", // Convert to boolean
      };

      console.log("Updating vehicle with ID:", vehicleId); // Debugging: Log vehicle ID
      console.log("Sending payload:", payload); // Debugging: Log payload

      // Send data to the backend API using PUT method
      const response = await fetch(
          `http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/vehicle?id=${vehicleId}`,
          {
              method: "PUT",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
              credentials: "include",
          }
      );

      const responseData = await response.json(); // Parse response JSON
      console.log("Backend response:", responseData); // Debugging: Log backend response

      if (response.ok) {
          alert("Vehicle updated successfully!");
          // Reset form after successful submission
          setFormVIPData({
              type: "VIP",
              name: "",
              model: "",
              color: "",
              year: "",
              registrationNumber: "",
              seatingCapacity: "",
              hasChauffeurService: "No",
          });
          setSelectedVehicleId(null); // Clear the selected vehicle ID
          // Refetch vehicles to reflect the updated data
          fetchVIPVehicles();
      } else {
          alert(`Failed to update vehicle. Error: ${responseData.message || "Unknown error"}`);
      }
  } catch (error) {
      console.error("Error updating vehicle:", error);
      alert("An error occurred while updating the vehicle.");
  }
};





const handleEdit = (vehicle) => {
  setSelectedVehicleId(vehicle.id);
  setFormVIPData({
    type: "VIP",
    name: vehicle.name,
    model: vehicle.model,
    color: vehicle.color,
    year: vehicle.year.toString(), // Convert to string for input fields
    registrationNumber: vehicle.registration_number.toString(),
    seatingCapacity: vehicle.seating_capacity.toString(),
    hasChauffeurService: vehicle.has_chauffeur_service ? "Yes" : "No", // Convert boolean to "Yes"/"No"
  });
};
const handlePremiumEdit = (vehicle) => {
  setSelectedVehicleId(vehicle.id);
  setFormPremiumData({
    type: "PREMIUM",
    name: vehicle.name,
    model: vehicle.model,
    color: vehicle.color,
    year: vehicle.year.toString(), // Convert to string for input fields
    registrationNumber: vehicle.registration_number.toString(),
    seatingCapacity: vehicle.seating_capacity.toString(),
    has_wifi: vehicle.has_wifi  ? "Yes" : "No", // Convert boolean to "Yes"/"No"
  });
};
const handleRegularEdit = (vehicle) => {
  setSelectedVehicleId(vehicle.id);
  setFormRegularData({
    type: "PREMIUM",
    name: vehicle.name,
    model: vehicle.model,
    color: vehicle.color,
    year: vehicle.year.toString(), // Convert to string for input fields
    registrationNumber: vehicle.registration_number.toString(),
    seatingCapacity: vehicle.seating_capacity.toString(),
    has_wifi: vehicle.has_wifi  ? "Yes" : "No", // Convert boolean to "Yes"/"No"
  });
};
 // Handle Regular Data Input Changes
 const handleRegularInputChange = (e) => {
  const { name, value } = e.target;
  setFormRegularData({ ...formRegularData, [name]: value });
};

  // Handle PremiumDatainput changes
  const handlePremiumInputChange = (e) => {
    const { name, value } = e.target;
    setFormPremiumData({ ...formPremiumData, [name]: value });
  };
   // Handle VIP Data Input Changes
   const handleVIPInputChange = (e) => {
    const { name, value } = e.target;
    setFormVIPData({ ...formVIPData, [name]: value });
  };

  // Handle VIP Radio Button Changes
  const handleVIPRadioChange = (e) => {
    const { name, value } = e.target;
    setFormVIPData({ ...formVIPData, [name]: value === "Yes" ? true : false });
  };
  const handlePremiumRadioChange = (e) => {
    const { name, value } = e.target;
    setFormPremiumData({ ...formPremiumData, [name]: value === "Yes" ? true : false });
  };

  const handlePremiumSubmit = async (e) => {
    e.preventDefault();
  
    // Validate input fields
    if (
      !formPremiumData.name ||
      !formPremiumData.model ||
      !formPremiumData.color ||
      !formPremiumData.year ||
      !formPremiumData.registrationNumber ||
      !formPremiumData.seatingCapacity
    ) {
      alert("Please fill in all required fields.");
      return;
    }
  
    try {
      // Parse numeric fields safely
      const year = parseInt(formPremiumData.year, 10);
      const registrationNumber = parseInt(formPremiumData.registrationNumber, 10);
      const seatingCapacity = parseInt(formPremiumData.seatingCapacity, 10);
  
      // Validate numeric fields
      if (isNaN(year) || isNaN(registrationNumber) || isNaN(seatingCapacity)) {
        alert("Please enter valid numeric values for Year, Registration Number, and Seating Capacity.");
        return;
      }
  
      // Construct payload
      const payload = {
        type: formPremiumData.type,
        name: formPremiumData.name,
        model: formPremiumData.model,
        color: formPremiumData.color,
        year: year,
        registration_number: registrationNumber,
        seating_capacity: seatingCapacity,
        hasWiFi: formPremiumData.hasWiFi === "Yes", // Convert to boolean
      };
  
      console.log("Sending payload:", payload); // Debugging: Log payload
  
      // Send data to the backend API
      const response = await fetch(
        "http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/vehicle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          credentials: "include",
        }
      );
  
      const responseData = await response.json(); // Parse response JSON
      console.log("Backend response:", responseData); // Debugging: Log backend response
  
      if (response.ok) {
        alert("Vehicle registered successfully!");
        // Reset form after successful submission
        setFormPremiumData({
          type: "PREMIUM",
          name: "",
          model: "",
          color: "",
          year: "",
          registrationNumber: "",
          seatingCapacity: "",
          hasWiFi: "No",
        });
      } else {
        alert(`Failed to register vehicle. Error: ${responseData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while registering the vehicle.");
    }
  };
  // Function to handle deletion of a vehicle
const handleDelete = async (vehicleId) => {
  try {
    // Confirm deletion with the user
    const confirmDelete = window.confirm("Are you sure you want to delete this vehicle?");
    if (!confirmDelete) return;

    // Send DELETE request to the backend API
    const response = await fetch(
      `http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/vehicle?id=${vehicleId}`,
      {
        method: "DELETE",
        credentials: "include", // Include cookies if necessary
      }
    );

    const responseData = await response.json(); // Parse response JSON

    if (response.ok) {
      alert("Vehicle deleted successfully!");
      // Refetch vehicles to reflect the updated data
      if (currentstep === "V1") {
        fetchVIPVehicles();
      } else if (currentstep === "P1") { 
        fetchPremiumVehicles();
      } else if (currentstep === "R1") {
        fetchRegularVehicle();
      }
    } else {
      alert(`Failed to delete vehicle. Error: ${responseData.message || "Unknown error"}`);
    }
  } catch (error) {
    console.error("Error deleting vehicle:", error);
    alert("An error occurred while deleting the vehicle.");
  }
};


  const handleRegularSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (
      !formRegularData.name ||
      !formRegularData.model ||
      !formRegularData.color ||
      !formRegularData.year ||
      !formRegularData.registrationNumber ||
      !formRegularData.seatingCapacity
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      // Parse numeric fields safely
      const year = parseInt(formRegularData.year, 10);
      const registrationNumber = parseInt(formRegularData.registrationNumber, 10);
      const seatingCapacity = parseInt(formRegularData.seatingCapacity, 10);

      // Validate numeric fields
      if (isNaN(year) || isNaN(registrationNumber) || isNaN(seatingCapacity)) {
        alert("Please enter valid numeric values for Year, Registration Number, and Seating Capacity.");
        return;
      }

      // Construct payload
      const payload = {
        type: formRegularData.type,
        name: formRegularData.name,
        model: formRegularData.model,
        color: formRegularData.color,
        year: year,
        registration_number: registrationNumber,
        seating_capacity: seatingCapacity,
      };

      console.log("Sending payload:", payload); // Debugging: Log payload

      // Send data to the backend API
      const response = await fetch(
        "http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/vehicle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          credentials: "include",
        }
      );

      const responseData = await response.json(); // Parse response JSON
      console.log("Backend response:", responseData); // Debugging: Log backend response

      if (response.ok) {
        alert("Vehicle registered successfully!");
        // Reset form after successful submission
        setFormRegularData({
          type: "REGULAR",
          name: "",
          model: "",
          color: "",
          year: "",
          registrationNumber: "",
          seatingCapacity: "",
        });
      } else {
        alert(`Failed to register vehicle. Error: ${responseData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while registering the vehicle.");
    }
  }

  const handleVIPSubmit = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (
      !formVIPData.name ||
      !formVIPData.model ||
      !formVIPData.color ||
      !formVIPData.year ||
      !formVIPData.registrationNumber ||
      !formVIPData.seatingCapacity
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      // Parse numeric fields safely
      const year = parseInt(formVIPData.year, 10);
      const registrationNumber = parseInt(formVIPData.registrationNumber, 10);
      const seatingCapacity = parseInt(formVIPData.seatingCapacity, 10);

      // Validate numeric fields
      if (isNaN(year) || isNaN(registrationNumber) || isNaN(seatingCapacity)) {
        alert("Please enter valid numeric values for Year, Registration Number, and Seating Capacity.");
        return;
      }

      // Construct payload
      const payload = {
        type: formVIPData.type,
        name: formVIPData.name,
        model: formVIPData.model,
        color: formVIPData.color,
        year: year,
        registration_number: registrationNumber,
        seating_capacity: seatingCapacity,
        hasChauffeurService: formVIPData.hasChauffeurService === "Yes", // Convert to boolean
      };

      console.log("Sending payload:", payload); // Debugging: Log payload

      // Send data to the backend API
      const response = await fetch(
        "http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/vehicle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
          credentials: "include",
        }
      );

      const responseData = await response.json(); // Parse response JSON
      console.log("Backend response:", responseData); // Debugging: Log backend response

      if (response.ok) {
        alert("Vehicle registered successfully!");
        // Reset form after successful submission
        setFormVIPData({
          type: "VIP",
          name: "",
          model: "",
          color: "",
          year: "",
          registrationNumber: "",
          seatingCapacity: "",
          hasChauffeurService: "No",
        });
      } else {
        alert(`Failed to register vehicle. Error: ${responseData.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while registering the vehicle.");
    }
  };

const step={
  PremiumVehicle:["P1","P2","P3"],
  RegularVehicle:["R1","R2","R3"],
  VIPVehicle:["V1","V2","V3"]
 };

    useEffect(()=>{
      if(chooseType==="PremiumVehicle"){
        setCurrentStep(step.PremiumVehicle[0]);
      }
      else if(chooseType==="RegularVehicle"){
        setCurrentStep(step.RegularVehicle[0]);
      }
      else if(chooseType === "VIPVehicle"){
        setCurrentStep(step.VIPVehicle[0])
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

    

     
      
      
  return (
    <div className='flex flex-col gap-y-4'>
       <h1 className='title'>Register Vehicle</h1>
       {chooseType ==="type" && (
       <div className=' grid sm:grid-cols-1 gap-x-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4  grid-flow-row rounded-lg border border-slate-300 bg-white p-1 transition-colors  dark:border-slate-700 dark:bg-slate-900 '>
           <div className='grid col-span-4 sm:col-span-4 p-2   '>
                             <div className="flex items-center gap-2 ">
                                    <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                        <Car size={15} />
                                    </div>
                                        <p className="card- title">Choose Type Of Vehicle You Going To Register </p>
                                    </div>        
                            </div>
           <div className='grid md:grid-cols-3 grid-cols-1  grid-flow-row col-span-4 pt-7 pb-7 gap-2'>
                       <div className='flex justify-center'>
                                <button className="max-h-44 max-w-40 w-full h-full rounded-lg dark:bg-slate-950 transition-colors flex justify-center align-middle dark:hover:bg-blue-600  hover:bg-blue-500"  onClick={() => setChooseType("PremiumVehicle")}>
                                <div className="flex flex-col items-center justify-center gap-2 p-2">
                                <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors hover:bg-blue-500 hover:text-white dark:bg-slate-950 dark:text-blue-600  ">
                                <img src={car} alt="manu"  className="w-36 h-16"/></div>
                                <p className="card-title">Premium Vehicle</p></div> 
                                </button>
                      </div>
                      <div className='flex justify-center'>
                                <button className="max-h-44 max-w-40 w-full h-full rounded-lg dark:bg-slate-950 transition-colors flex justify-center align-middle dark:hover:bg-blue-600  hover:bg-blue-500"  onClick={() => setChooseType("RegularVehicle")}>
                                <div className="flex flex-col items-center justify-center gap-2 p-2">
                                <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors hover:bg-blue-500 hover:text-white dark:bg-slate-950 dark:text-blue-600  ">
                                <img src={car} alt="manu"  className="w-36 h-16"/></div>
                                <p className="card-title">Regular Vehicle</p>
                                </div> 
                                </button>
                      </div>
                       <div className='flex justify-center'>
                                <button className="max-h-44 max-w-40 w-full h-full rounded-lg dark:bg-slate-950 transition-colors flex justify-center align-middle dark:hover:bg-blue-600  hover:bg-blue-500"  onClick={() => setChooseType("VIPVehicle")}>
                                <div className="flex flex-col items-center justify-center gap-2 p-2">
                                <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors hover:bg-blue-500 hover:text-white dark:bg-slate-950 dark:text-blue-600  ">
                                <img src={car} alt="manu"  className="w-36 h-16"/></div>
                                <p className="card-title">VIP Vehicle</p>
                                </div> 
                                </button>
                      </div>
           </div>
        </div>
        )}
        {currentstep === "P1" && (
          <div className='flex flex-col gap-y-4 gap-8'>
  <div className='grid sm:grid-cols-1 gap-x-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 grid-flow-row rounded-lg border border-slate-300 bg-white p-1 transition-colors dark:border-slate-700 dark:bg-slate-900'>
    <div className='grid col-span-4 sm:col-span-4 p-2'>
      <div className="flex items-center gap-2">
        <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
          <Car size={15} />
        </div>
        <p className="card-title">Premium Vehicle Details</p>
      </div>
    </div>

    {/* Name */}
    <div className='xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2'>
      <p className="bookinputlable">Name</p>
      <div className="bookinputfield">
        <input
          type="text"
          name="name"
          value={formPremiumData.name}
          onChange={handlePremiumInputChange}
          placeholder="Enter Vehicle Name"
          className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
        />
      </div>
    </div>

    {/* Model */}
    <div className='xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2'>
      <p className="bookinputlable">Model</p>
      <div className="bookinputfield">
        <input
          type="text"
          name="model"
          value={formPremiumData.model}
          onChange={handlePremiumInputChange}
          placeholder="Enter Vehicle Model"
          className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
        />
      </div>
    </div>

    {/* Color */}
    <div className='xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2'>
      <p className="bookinputlable">Color</p>
      <div className="bookinputfield">
        <input
          type="text"
          name="color"
          value={formPremiumData.color}
          onChange={handlePremiumInputChange}
          placeholder="Enter Vehicle Color"
          className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
        />
      </div>
    </div>

    {/* Year */}
    <div className='xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2'>
      <p className="bookinputlable">Year</p>
      <div className="bookinputfield">
        <input
          type="text"
          name="year"
          value={formPremiumData.year}
          onChange={handlePremiumInputChange}
          placeholder="Enter vehicle Year"
          className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
        />
      </div>
    </div>

    {/* Registration Number */}
    <div className='xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2'>
      <p className="bookinputlable">Registration Number</p>
      <div className="bookinputfield">
        <input
          type="text"
          name="registrationNumber"
          value={formPremiumData.registrationNumber}
          onChange={handlePremiumInputChange}
          placeholder="Enter Vehicle registration Number"
          className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
        />
      </div>
    </div>

    {/* Seating Capacity */}
    <div className='xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2'>
      <p className="bookinputlable">Seating Capacity</p>
      <div className="bookinputfield">
        <input
          type="text"
          name="seatingCapacity"
          value={formPremiumData.seatingCapacity}
          onChange={handlePremiumInputChange}
          placeholder="Enter Vehicle seating Capacity"
          className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
        />
      </div>
    </div>

    {/* Has WiFi */}
    <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
      <p className="bookinputlable">Has WiFi</p>
      <div className="bookinputfield flex gap-x-4 flex-row">
        {/* Radio Button for "Yes" */}
        <label className="flex items-center gap-x-2">
          <input
            type="radio"
            name="hasWiFi"
            value="Yes"
            checked={formPremiumData.hasWiFi === "Yes"}
            onChange={(e) =>
              setFormPremiumData({ ...formPremiumData, hasWiFi: e.target.value })
            }
            className="w-4 h-4 accent-slate-900 dark:accent-slate-50"
          />
          <span className="text-slate-900 dark:text-slate-50">Yes</span>
        </label>

        {/* Radio Button for "No" */}
        <label className="flex items-center gap-x-2">
          <input
            type="radio"
            name="hasWiFi"
            value="No"
            checked={formPremiumData.hasWiFi === "No"}
            onChange={(e) =>
              setFormPremiumData({ ...formPremiumData, hasWiFi: e.target.value })
            }
            className="w-4 h-4 accent-slate-900 dark:accent-slate-50"
          />
          <span className="text-slate-900 dark:text-slate-50">No</span>
        </label>
      </div>
    </div>

    {/* Submit Button */}
    <div className='xl:col-span-2 col-span-4 flex xl:flex-row md:flex-row gap-y-1 p-2 justify-evenly items-center w-full'>
      <button
        type="submit"
        onClick={handlePremiumSubmit}
        className={`btn-ghost flex h-10 xl:w-40 items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600`}
      >
        <CheckCircle size={20} /> {/* Icon */}
        <span>Register</span> {/* Button Text */}
      </button>
      <button
        type="submit"
        onClick={(e) => handleUpdateSubmit(e, selectedVehicleId)}
        className={`btn-ghost flex h-10 xl:w-40 items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600`}
      >
        <CheckCircle size={20} /> {/* Icon */}
        <span>Update</span> {/* Button Text */}
      </button>
    </div>
  </div>
  <div className="card">
    <div className="card-header">
        <p className="card-title">Premium   Vehicles</p>
    </div>
    <div className="card-body p-0">
        <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
            <table className="table">
                <thead className="table-header">
                    <tr className="table-row">
                        <th className="table-head">#</th>
                        <th className="table-head">Name</th>
                        <th className="table-head">Model</th>
                        <th className="table-head">Color</th>
                        <th className="table-head">Year</th>
                        <th className="table-head">Registration Number</th>
                        <th className="table-head">Seating Capacity</th>
                        <th className="table-head">Has WiFi</th>
                        <th className="table-head">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                {PremiumVehicles.map((vehicle, index) => (
                      <tr key={index} className="table-row">
                        <td className="table-cell">{vehicle.id}</td>
                        <td className="table-cell">{vehicle.name}</td>
                        <td className="table-cell">{vehicle.model}</td>
                        <td className="table-cell">{vehicle.color}</td>
                        <td className="table-cell">{vehicle.year}</td>
                        <td className="table-cell">{vehicle.registration_number}</td>
                        <td className="table-cell">{vehicle.seating_capacity}</td>
                        <td className="table-cell">{vehicle.has_wifi ? "Yes" : "No"}</td>

                            <td className="table-cell">
                                <div className="flex items-center gap-x-3">
                                    <button className="text-blue-500 dark:text-blue-600"
                                     onClick={() => handlePremiumEdit(vehicle)}>
                                        <PencilLine size={20} />
                                        
                                    </button>
                                    <button
                                      className="text-red-500"
                                      onClick={() => handleDelete(vehicle.id)} // Call handleDelete with the vehicle ID
                                    >
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
)}
           {currentstep === "R1" && (
            <div className='flex flex-col gap-y-4 gap-8'>
        <div className='grid sm:grid-cols-1 gap-x-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 grid-flow-row rounded-lg border border-slate-300 bg-white p-1 transition-colors dark:border-slate-700 dark:bg-slate-900'>
          <div className='grid col-span-4 sm:col-span-4 p-2'>
            <div className="flex items-center gap-2">
              <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                <Car size={15} />
              </div>
              <p className="card-title">Regular Vehicle Details</p>
            </div>
          </div>

          {/* Name */}
          <div className='xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2'>
            <p className="bookinputlable">Name</p>
            <div className="bookinputfield">
              <input
                type="text"
                name="name"
                value={formRegularData.name}
                onChange={handleRegularInputChange}
                placeholder="Enter Vehicle Name"
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
              />
            </div>
          </div>

          {/* Model */}
          <div className='xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2'>
            <p className="bookinputlable">Model</p>
            <div className="bookinputfield">
              <input
                type="text"
                name="model"
                value={formRegularData.model}
                onChange={handleRegularInputChange}
                placeholder="Enter Vehicle Model"
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
              />
            </div>
          </div>

          {/* Color */}
          <div className='xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2'>
            <p className="bookinputlable">Color</p>
            <div className="bookinputfield">
              <input
                type="text"
                name="color"
                value={formRegularData.color}
                onChange={handleRegularInputChange}
                placeholder="Enter Vehicle Color"
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
              />
            </div>
          </div>

          {/* Year */}
          <div className='xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2'>
            <p className="bookinputlable">Year</p>
            <div className="bookinputfield">
              <input
                type="text"
                name="year"
                value={formRegularData.year}
                onChange={handleRegularInputChange}
                placeholder="Enter vehicle Year"
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
              />
            </div>
          </div>

          {/* Registration Number */}
          <div className='xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2'>
            <p className="bookinputlable">Registration Number</p>
            <div className="bookinputfield">
              <input
                type="text"
                name="registrationNumber"
                value={formRegularData.registrationNumber}
                onChange={handleRegularInputChange}
                placeholder="Enter Vehicle registration Number"
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
              />
            </div>
          </div>

          {/* Seating Capacity */}
          <div className='xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2'>
            <p className="bookinputlable">Seating Capacity</p>
            <div className="bookinputfield">
              <input
                type="text"
                name="seatingCapacity"
                value={formRegularData.seatingCapacity}
                onChange={handleRegularInputChange}
                placeholder="Enter Vehicle seating Capacity"
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className='xl:col-span-2 col-span-4 flex xl:flex-row md:flex-row gap-y-1 p-2 justify-evenly items-center w-full'>
            <button
              type="submit"
              onClick={handleRegularSubmit}
              className={`btn-ghost flex h-10 xl:w-40 items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600`}
            >
              <CheckCircle size={20} /> {/* Icon */}
              <span>Register</span> {/* Button Text */}
            </button>
            <button
                                    type="submit"
                                   onClick={(e) => handleRegularUpdateSubmit(e, selectedVehicleId)}
                                   className={`btn-ghost flex h-10 xl:w-40 items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600`}
                                   >
                                       <CheckCircle size={20} /> {/* Icon */}
                                   <span>Update</span> {/* Button Text */}
                                     </button>
                                     
          </div>
        </div>
        <div className="card">
    <div className="card-header">
        <p className="card-title">Regular Vehicles</p>
    </div>
    <div className="card-body p-0">
        <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
            <table className="table">
                <thead className="table-header">
                    <tr className="table-row">
                        <th className="table-head">#</th>
                        <th className="table-head">Name</th>
                        <th className="table-head">Model</th>
                        <th className="table-head">Color</th>
                        <th className="table-head">Year</th>
                        <th className="table-head">Registration Number</th>
                        <th className="table-head">Seating Capacity</th>
                       
                        <th className="table-head">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                {RegularVehicles.map((vehicle, index) => (
                      <tr key={index} className="table-row">
                        <td className="table-cell">{vehicle.id}</td>
                        <td className="table-cell">{vehicle.name}</td>
                        <td className="table-cell">{vehicle.model}</td>
                        <td className="table-cell">{vehicle.color}</td>
                        <td className="table-cell">{vehicle.year}</td>
                        <td className="table-cell">{vehicle.registration_number}</td>
                        <td className="table-cell">{vehicle.seating_capacity}</td>
                      
                            <td className="table-cell">
                                <div className="flex items-center gap-x-3">
                                    <button className="text-blue-500 dark:text-blue-600"
                                     onClick={() => handleRegularEdit(vehicle)}>
                                        <PencilLine size={20} />
                                        
                                    </button>
                                    <button
                                      className="text-red-500"
                                      onClick={() => handleDelete(vehicle.id)} // Call handleDelete with the vehicle ID
                                    >
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
      )}
          {currentstep === "V1" && (<div className='flex flex-col gap-y-4 gap-8'>
           <div className=' grid sm:grid-cols-1 gap-x-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4  grid-flow-row rounded-lg border border-slate-300 bg-white p-1 transition-colors  dark:border-slate-700 dark:bg-slate-900 '>
           <div className='grid col-span-4 sm:col-span-4 p-2  '>
                             <div className="flex items-center gap-2 ">
                                    <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                        <Car size={15} />
                                    </div>
                                        <p className="card-title">VIP Vehicle Detailes  </p>
                                    </div>        
                            </div>
          
                            <div className=' xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2 '>
                    <p className="bookinputlable">Name</p>
                    <div className="bookinputfield">
                      <input
                        type="text"
                        name="name"
                        value={formVIPData.name}
                onChange={handleVIPInputChange}
                     
                        placeholder="Enter Vehicle Name"
                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                      />
                    </div>
            </div>
            <div className=' xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2 '>
                    <p className="bookinputlable">Model</p>
                    <div className="bookinputfield">
                      <input
                        type="text"
                        name="model"
                        value={formVIPData.model}
                        onChange={handleVIPInputChange}
                     
                        placeholder="Enter Vehicle Model"
                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                      />
                    </div>
            </div>
            <div className=' xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2 '>
                    <p className="bookinputlable">Color</p>
                    <div className="bookinputfield">
                      <input
                        type="text"
                        name="color"
                        value={formVIPData.color}
                        onChange={handleVIPInputChange}
                     
                        placeholder="Enter Vehicle Color"
                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                      />
                    </div>
            </div>
            <div className=' xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2 '>
                    <p className="bookinputlable">Year</p>
                    <div className="bookinputfield">
                      <input
                        type="text"
                        name="year"
                        value={formVIPData.year}
                        onChange={handleVIPInputChange}
      
                        placeholder="Enter vehicle Year"
                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                      />
                    </div>
            </div>
            <div className=' xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2 '>
                    <p className="bookinputlable">Registration Number</p>
                    <div className="bookinputfield">
                      <input
                        type="text"
                        name="registrationNumber"
                        value={formVIPData.registrationNumber}
                        onChange={handleVIPInputChange}
                     
                        placeholder="Enter Vehicle registration Number"
                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                      />
                    </div>
            </div>
            <div className=' xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2 '>
                    <p className="bookinputlable">Seating Capacity</p>
                    <div className="bookinputfield">
                      <input
                        type="text"
                        name="seatingCapacity"
                        value={formVIPData.seatingCapacity}
                        onChange={handleVIPInputChange}
                     
                        placeholder="Enter Vehicle seating Capacity"
                        className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                      />
                    </div>
            </div>
            <div className=' xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2 '>
                    <p className="bookinputlable">Has Chauffeur Service</p>
                    
                    <div className="bookinputfield flex gap-x-4 flex-row">
                    <label className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="hasChauffeurService"
                  value="Yes"
                  checked={formVIPData.hasChauffeurService === "Yes"}
                  onChange={(e) =>
                    setFormVIPData({ ...formVIPData, hasChauffeurService: e.target.value })
                  }
                  className="w-4 h-4 accent-slate-900 dark:accent-slate-50"
                />
                <span className="text-slate-900 dark:text-slate-50">Yes</span>
              </label>
              <label className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="hasChauffeurService"
                  value="No"
                  checked={formVIPData.hasChauffeurService === "No"}
                  onChange={(e) =>
                    setFormVIPData({ ...formVIPData, hasChauffeurService: e.target.value })
                  }
                  className="w-4 h-4 accent-slate-900 dark:accent-slate-50"
                />
                <span className="text-slate-900 dark:text-slate-50">No</span>
              </label>
                      </div>
            </div>
             <div className=' xl:col-span-2 col-span-4 flex xl:flex-row md:flex-row gap-y-1 p-2 justify-evenly items-center w-full '>
                            
                                  <button
                                  
                                    type="submit"
                                    onClick={handleVIPSubmit}
                                    className={`btn-ghost flex h-10 xl:w-40  items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors 
                                      bg-blue-500 text-white hover:bg-blue-600 
                                      dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600 
                                     `}
                                  >
                                    <CheckCircle size={20} /> {/* Icon */}
                                    <span>Register</span> {/* Button Text */}
                                  </button>

                                    <button
                                    type="submit"
                                   onClick={(e) => handleVIPUpdateSubmit(e, selectedVehicleId)}
                                   className={`btn-ghost flex h-10 xl:w-40 items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600`}
                                   >
                                       <CheckCircle size={20} /> {/* Icon */}
                                   <span>Update</span> {/* Button Text */}
                                     </button>
                                         
                              </div>

                              


          </div>

          <div className="card">
    <div className="card-header">
        <p className="card-title">VIP Vehicles</p>
    </div>
    <div className="card-body p-0">
        <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
            <table className="table">
                <thead className="table-header">
                    <tr className="table-row">
                        <th className="table-head">#</th>
                        <th className="table-head">Name</th>
                        <th className="table-head">Model</th>
                        <th className="table-head">Color</th>
                        <th className="table-head">Year</th>
                        <th className="table-head">Registration Number</th>
                        <th className="table-head">Seating Capacity</th>
                        <th className="table-head">Has Chauffeur Service</th>
                        <th className="table-head">Actions</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                {vipVehicles.map((vehicle, index) => (
                      <tr key={index} className="table-row">
                        <td className="table-cell">{vehicle.id}</td>
                        <td className="table-cell">{vehicle.name}</td>
                        <td className="table-cell">{vehicle.model}</td>
                        <td className="table-cell">{vehicle.color}</td>
                        <td className="table-cell">{vehicle.year}</td>
                        <td className="table-cell">{vehicle.registration_number}</td>
                        <td className="table-cell">{vehicle.seating_capacity}</td>
                        <td className="table-cell">
                          {vehicle.has_chauffeur_service ? "Yes" : "No"}
                        </td>

                            <td className="table-cell">
                                <div className="flex items-center gap-x-3">
                                    <button className="text-blue-500 dark:text-blue-600"
                                     onClick={() => handleEdit(vehicle)}>
                                        <PencilLine size={20} />
                                        
                                    </button>
                                    <button
                                        className="text-red-500"
                                        onClick={() => handleDelete(vehicle.id)} // Call handleDelete with the vehicle ID
                                      >
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
        )}

          {currentstep === "P2" && (
            <div flex  flex-col gap-y-4>
                      <div className=' card grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 grid-flow-row rounded-lg boarder  border-slate-300  bg-white p-1   transition-colors dark:border-slate-700 dark:bg-slate-900  gap-8 '>
                                  <div className='grid col-span-5 sm:col-span-5 p-2 gap-4  '>
                                                  <div className="flex items-center gap-2">
                                                      <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                                          <Car size={15} />
                                                      </div>
                                                          <p className="card-title">Message Status</p>
                                              </div>     
                                              <div className="card-noboarder flex justify-center items-center bg-slate-100 transition-colors dark:bg-slate-950 mx-auto max-w-6xl  w-full ">
                                            
                                              <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                              <CarTaxiFront size={30} />
                                          </div>
                                          <p className="card-title text-center xl:text-xl lg:text-lg ">Premium vehicle registered successfully.</p>
                                          
                                          
                                      
                  
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
          
          {currentstep === "R2" && (
            <div flex  flex-col gap-y-4>
                      <div className=' card grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 grid-flow-row rounded-lg boarder  border-slate-300  bg-white p-1   transition-colors dark:border-slate-700 dark:bg-slate-900  gap-8 '>
                                  <div className='grid col-span-5 sm:col-span-5 p-2 gap-4  '>
                                                  <div className="flex items-center gap-2">
                                                      <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                                          <Car size={15} />
                                                      </div>
                                                          <p className="card-title">Message Status</p>
                                              </div>     
                                              <div className="card-noboarder flex justify-center items-center bg-slate-100 transition-colors dark:bg-slate-950 mx-auto max-w-6xl  w-full ">
                                            
                                              <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                              <CarTaxiFront size={30} />
                                          </div>
                                          <p className="card-title text-center xl:text-xl lg:text-lg ">Regular vehicle registered successfully.</p>
                                          
                                          
                                      
                  
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
          {currentstep === "V2" && (
            <div flex  flex-col gap-y-4>
                      <div className=' card grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 grid-flow-row rounded-lg boarder  border-slate-300  bg-white p-1   transition-colors dark:border-slate-700 dark:bg-slate-900  gap-8 '>
                                  <div className='grid col-span-5 sm:col-span-5 p-2 gap-4  '>
                                                  <div className="flex items-center gap-2">
                                                      <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                                          <Car size={15} />
                                                      </div>
                                                          <p className="card-title">Message Status</p>
                                              </div>     
                                              <div className="card-noboarder flex justify-center items-center bg-slate-100 transition-colors dark:bg-slate-950 mx-auto max-w-6xl  w-full ">
                                            
                                              <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                                              <CarTaxiFront size={30} />
                                          </div>
                                          <p className="card-title text-center xl:text-xl lg:text-lg ">VIP vehicle registered successfully.</p>
                                          
                                          
                                      
                  
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
  );
  }
 export default vehical;
