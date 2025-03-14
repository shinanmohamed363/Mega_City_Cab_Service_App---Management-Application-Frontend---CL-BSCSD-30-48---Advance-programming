import React, { useState, useEffect } from "react";
import axios from "axios";
import { CheckCircle, PencilLine, Trash, Bell, Car } from "lucide-react";

const PlanPrice = () => {
  // State for plan prices
  const [planPrices, setPlanPrices] = useState([]);

  // State for form input
  const [formData, setFormData] = useState({
    distanceRangeId: 0,
    price: 0,
    extraKmPrice: 0,
    discount: 0,
    vehiclePlanId: 0,
  });

  // State for notification messages
  const [notification, setNotification] = useState("");

  // Fetch plan prices on component mount
  useEffect(() => {
    fetchPlanPrices();
  }, []);

  // Function to fetch plan prices from the API
  const fetchPlanPrices = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/plan-price"
      );
      setPlanPrices(response.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching plan prices:", error);
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

  // Handle form submission to register a new plan price
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      distanceRangeId: parseInt(formData.distanceRangeId), // Ensure it's an integer
      price: parseFloat(formData.price), // Ensure it's a float
      extraKmPrice: parseFloat(formData.extraKmPrice), // Ensure it's a float
      discount: parseFloat(formData.discount), // Ensure it's a float
      vehiclePlanId: parseInt(formData.vehiclePlanId), // Ensure it's an integer
    };

    console.log("Payload:", payload); // Debugging log

    if (
      !payload.distanceRangeId ||
      !payload.price ||
      !payload.extraKmPrice ||
      !payload.discount ||
      !payload.vehiclePlanId
    ) {
      setNotification("All fields are required.");
      setTimeout(() => setNotification(""), 3000);
      return;
    }

    try {
      await axios.post(
        "http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/plan-price",
        payload
      );

      setFormData({
        distanceRangeId: 0,
        price: 0,
        extraKmPrice: 0,
        discount: 0,
        vehiclePlanId: 0,
      });

      setNotification("Plan price registered successfully!");
      setTimeout(() => {
        setNotification("");
      }, 3000);

      fetchPlanPrices();
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      setNotification("Failed to register plan price. Please try again.");
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

      <h1 className="title">Plan Price</h1>
      <div className="flex flex-col gap-y-4 gap-8">
        <div className="grid sm:grid-cols-1 gap-x-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 grid-flow-row rounded-lg border border-slate-300 bg-white p-1 transition-colors dark:border-slate-700 dark:bg-slate-900">
          <div className="grid col-span-4 sm:col-span-4 p-2">
            <div className="flex items-center gap-2">
              <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                <Car size={15} />
              </div>
              <p className="card-title">Manage Plan Price Details</p>
            </div>
          </div>

          {/* Distance Range ID Input */}
          <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
            <p className="bookinputlable">Distance Range ID</p>
            <div className="bookinputfield">
              <input
                type="number"
                name="distanceRangeId"
                value={formData.distanceRangeId}
                onChange={handleInputChange}
                placeholder="Enter Distance Range ID"
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                required
              />
            </div>
          </div>

          {/* Price Input */}
          <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
            <p className="bookinputlable">Price</p>
            <div className="bookinputfield">
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Enter Price"
                step="0.01"
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                required
              />
            </div>
          </div>

          {/* Extra KM Price Input */}
          <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
            <p className="bookinputlable">Extra KM Price</p>
            <div className="bookinputfield">
              <input
                type="number"
                name="extraKmPrice"
                value={formData.extraKmPrice}
                onChange={handleInputChange}
                placeholder="Enter Extra KM Price"
                step="0.01"
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                required
              />
            </div>
          </div>

          {/* Discount Input */}
          <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
            <p className="bookinputlable">Discount</p>
            <div className="bookinputfield">
              <input
                type="number"
                name="discount"
                value={formData.discount}
                onChange={handleInputChange}
                placeholder="Enter Discount"
                step="0.01"
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                required
              />
            </div>
          </div>

          {/* Vehicle Plan ID Input */}
          <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
            <p className="bookinputlable">Vehicle Plan ID</p>
            <div className="bookinputfield">
              <input
                type="number"
                name="vehiclePlanId"
                value={formData.vehiclePlanId}
                onChange={handleInputChange}
                placeholder="Enter Vehicle Plan ID"
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                required
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
            <p className="card-title">Plan Price Details</p>
          </div>
          <div className="card-body p-0">
            <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
              <table className="table">
                <thead className="table-header">
                  <tr className="table-row">
                   
                    <th className="table-head">ID</th>
                    <th className="table-head">Distance Range ID</th>
                    <th className="table-head">Price</th>
                    <th className="table-head">Extra KM Price</th>
                    <th className="table-head">Discount</th>
                    <th className="table-head">Vehicle Plan ID</th>
                    <th className="table-head">Action</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {planPrices.map((plan, index) => (
                    <tr key={plan.id} className="table-row">
                     
                      <td className="table-cell">{plan.id}</td>
                      <td className="table-cell">{plan.distanceRangeId}</td>
                      <td className="table-cell">{plan.price}</td>
                      <td className="table-cell">{plan.extraKmPrice}</td>
                      <td className="table-cell">{plan.discount}</td>
                      <td className="table-cell">{plan.vehiclePlanId}</td>
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

export default PlanPrice;