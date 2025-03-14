import React, { useState, useEffect } from "react";
import axios from "axios";
import { CheckCircle, PencilLine, Trash, Bell, Car } from "lucide-react";

const Plan = () => {
  // State for vehicle plans
  const [plans, setPlans] = useState([]);

  // State for form input
  const [formData, setFormData] = useState({
    planName: "",
  });

  // State for notification messages
  const [notification, setNotification] = useState("");

  // Fetch vehicle plans on component mount
  useEffect(() => {
    fetchPlans();
  }, []);

  // Function to fetch vehicle plans from the API
  const fetchPlans = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/vehicle-plan"
      );
      setPlans(response.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching vehicle plans:", error);
    }
  };

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("Input Changed:", name, value); // Debugging log
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission to register a new plan
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      planName: formData.planName.trim(), // Trim whitespace
    };

    console.log("Payload:", payload); // Debugging log

    if (!payload.planName) {
      setNotification("Plan name cannot be empty.");
      setTimeout(() => setNotification(""), 3000);
      return;
    }

    try {
      await axios.post(
        "http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/vehicle-plan",
        payload
      );

      setFormData({
        planName: "",
      });

      setNotification("Plan registered successfully!");
      setTimeout(() => {
        setNotification("");
      }, 3000);

      fetchPlans();
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      setNotification("Failed to register plan. Please try again.");
      setTimeout(() => {
        setNotification("");
      }, 3000);
    }
  };

  return (
    <div className="flex flex-col gap-y-4">
      {/* Notification */}
      {notification && (
        <div
          className={`fixed top-4 left-1/2 z-50 p-4 rounded-md shadow-lg transform -translate-x-1/2 ${
            notification.includes("successfully")
              ? "bg-blue-500/20 text-blue-500" // Success styling
              : "bg-red-500/20 text-red-800" // Error styling
          }`}
          style={{
            transition: "opacity 0.5s ease-in-out",
            opacity: notification ? 1 : 0, // Fade out when notification is cleared
          }}
        >
          {notification}
        </div>
      )}

      <h1 className="title">Plan</h1>
      <div className="flex flex-col gap-y-4 gap-8">
        <div className="grid sm:grid-cols-1 gap-x-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 grid-flow-row rounded-lg border border-slate-300 bg-white p-1 transition-colors dark:border-slate-700 dark:bg-slate-900">
          <div className="grid col-span-4 sm:col-span-4 p-2">
            <div className="flex items-center gap-2">
              <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                <Car size={15} />
              </div>
              <p className="card-title">Manage Plan Details</p>
            </div>
          </div>

          {/* Plan Name Input */}
          <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
            <p className="bookinputlable">Plan</p>
            <div className="bookinputfield">
              <input
                type="text"
                name="planName" // Corrected to match the state key
                value={formData.planName}
                onChange={handleInputChange}
                placeholder="Enter Plan Name"
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="xl:col-span-2 col-span-4 flex xl:flex-row md:flex-row gap-y-1 p-2 justify-evenly items-center w-full">
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn-ghost flex h-10 xl:w-40 items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600"
            >
              <CheckCircle size={20} />
              <span>Register</span>
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="card">
          <div className="card-header">
            <p className="card-title">Plan Details</p>
          </div>
          <div className="card-body p-0">
            <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
              <table className="table">
                <thead className="table-header">
                  <tr className="table-row">
                    <th className="table-head">#</th>
                   
                    <th className="table-head">Plan</th>
                    <th className="table-head">Action</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {plans.map((plan, index) => (
                    <tr key={plan.id} className="table-row">
                  
                      <td className="table-cell">{plan.id}</td>
                      <td className="table-cell">{plan.planName}</td>
                      <td className="table-cell">
                        <div className="flex items-center gap-x-3">
                          <button className="text-blue-500 dark:text-blue-600">
                            <PencilLine size={20} />
                          </button>
                          <button className="text-red-500">
                            <Trash size={20} />
                          </button>
                          <button className="grid-cols-1 flex text-yellow-500">
                            <div className="items-center">
                              <Bell size={20} />
                            </div>
                            <div className="grid justify-end text-xs">21</div>
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
    </div>
  );
};

export default Plan;