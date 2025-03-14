import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const MakePaymentPage = () => {
  const location = useLocation(); // Get the current location
  const queryParams = new URLSearchParams(location.search); // Parse query parameters
  const order_no = queryParams.get("order_no"); // Extract the order_no from query string

  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    actual_km_used: "",
    return_date: "",
    driverFee: "",
  });
  const [calculationResult, setCalculationResult] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isBreakdownModalOpen, setIsBreakdownModalOpen] = useState(false); // New state for breakdown modal
  const navigate = useNavigate();

  useEffect(() => {
    if (!order_no) {
      setError("Invalid order number.");
      setLoading(false);
      return;
    }
    fetchOrderDetails();
  }, [order_no]);

  const fetchOrderDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/booking?order_no=${order_no}`
      );
      setOrderData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching order details:", error);
      setError("Failed to fetch order details. Please try again.");
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (
      !formData.actual_km_used ||
      !formData.return_date ||
      !formData.driverFee
    ) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      const payload = {
        order_id: parseInt(order_no, 10), // Convert order_no to integer
        actual_km_used: parseFloat(formData.actual_km_used),
        return_date: formData.return_date,
        driverFee: parseFloat(formData.driverFee),
      };

      const response = await axios.post(
        "http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/booking/calculate",
        payload
      );

      // Set the calculation result and open the dialog
      setCalculationResult(response.data);
      setIsDialogOpen(true);
    } catch (error) {
      console.error("Error calculating cost:", error);
      alert("Failed to calculate cost. Please try again.");
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        {error}
      </div>
    );
  }

  const {
    customer,
    vehicle,
    driver,
    tax,
    employee,
    vehicle_plan,
    distance_range,
    plan_price,
    initial_km,
    final_km,
    pickup_time,
    return_time,
    days_needed,
  } = orderData;

  return (
    <div className="flex flex-col gap-y-4 p-4">
      <h1 className="text-2xl font-bold text-blue-500 dark:text-blue-600">
        Make Payment for Order #{order_no}
      </h1>

      {/* Form for Calculation */}
      <div className="card bg-white dark:bg-slate-800 rounded-lg shadow-md p-4">
        <h1 className="title">Calculate Cost</h1>

        {/* Actual KM Used Input */}
        <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
          <p className="bookinputlable">Actual KM Used</p>
          <div className="bookinputfield">
            <input
              type="number"
              name="actual_km_used"
              value={formData.actual_km_used}
              onChange={handleInputChange}
              placeholder="Enter actual KM used"
              className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
              required
            />
          </div>
        </div>

        {/* Return Date Input */}
        <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
          <p className="bookinputlable">Return Date</p>
          <div className="bookinputfield">
            <input
              type="datetime-local"
              name="return_date"
              value={formData.return_date}
              onChange={handleInputChange}
              className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
              required
            />
          </div>
        </div>

        {/* Driver Fee Input */}
        <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
          <p className="bookinputlable">Driver Fee</p>
          <div className="bookinputfield">
            <input
              type="number"
              name="driverFee"
              value={formData.driverFee}
              onChange={handleInputChange}
              placeholder="Enter driver fee"
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
            Calculate
          </button>
        </div>
      </div>

      {/* Dialog Box for Calculation Result */}
      {isDialogOpen && calculationResult && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Calculation Result</h2>
            <p className="whitespace-pre-wrap text-sm">{`Final Amount: ${calculationResult.finalAmount}`}</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setIsDialogOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Close
              </button>
              <button
                onClick={() => setIsBreakdownModalOpen(true)} // Open breakdown modal
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                View Calculation Breakdown
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Calculation Breakdown */}
      {isBreakdownModalOpen && calculationResult && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Calculation Breakdown</h2>
            <pre className="whitespace-pre-wrap text-sm">{calculationResult.calculationBreakdown}</pre>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setIsBreakdownModalOpen(false)}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Customer Table */}
      <div className="card bg-white dark:bg-slate-800 rounded-lg shadow-md p-4">
        <div className="card-header">
          <p className="card-title text-lg font-semibold">Customer Details</p>
        </div>
        <div className="card-body">
          <table className="table w-full">
            <tbody>
              <tr>
                <td className="font-medium">Name</td>
                <td>{customer?.name || "N/A"}</td>
              </tr>
              <tr>
                <td className="font-medium">Address</td>
                <td>{customer?.address || "N/A"}</td>
              </tr>
              <tr>
                <td className="font-medium">Mobile</td>
                <td>{customer?.mobile || "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Vehicle Table */}
      <div className="card bg-white dark:bg-slate-800 rounded-lg shadow-md p-4">
        <div className="card-header">
          <p className="card-title text-lg font-semibold">Vehicle Details</p>
        </div>
        <div className="card-body">
          <table className="table w-full">
            <tbody>
              <tr>
                <td className="font-medium">Name</td>
                <td>{vehicle?.name || "N/A"}</td>
              </tr>
              <tr>
                <td className="font-medium">Model</td>
                <td>{vehicle?.model || "N/A"}</td>
              </tr>
              <tr>
                <td className="font-medium">Color</td>
                <td>{vehicle?.color || "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Driver Table (Conditional Rendering) */}
      {driver && (
        <div className="card bg-white dark:bg-slate-800 rounded-lg shadow-md p-4">
          <div className="card-header">
            <p className="card-title text-lg font-semibold">Driver Details</p>
          </div>
          <div className="card-body">
            <table className="table w-full">
              <tbody>
                <tr>
                  <td className="font-medium">Name</td>
                  <td>{driver?.name || "N/A"}</td>
                </tr>
                <tr>
                  <td className="font-medium">License Number</td>
                  <td>{driver?.license_number || "N/A"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tax Table */}
      <div className="card bg-white dark:bg-slate-800 rounded-lg shadow-md p-4">
        <div className="card-header">
          <p className="card-title text-lg font-semibold">Tax Details</p>
        </div>
        <div className="card-body">
          <table className="table w-full">
            <tbody>
              <tr>
                <td className="font-medium">Description</td>
                <td>{tax?.description || "N/A"}</td>
              </tr>
              <tr>
                <td className="font-medium">Tax Rate</td>
                <td>{tax?.taxRate ? `${tax.taxRate}%` : "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Booking Details */}
      <div className="card bg-white dark:bg-slate-800 rounded-lg shadow-md p-4">
        <div className="card-header">
          <p className="card-title text-lg font-semibold">Booking Details</p>
        </div>
        <div className="card-body">
          <table className="table w-full">
            <tbody>
              <tr>
                <td className="font-medium">Initial KM</td>
                <td>{initial_km || "N/A"}</td>
              </tr>
              <tr>
                <td className="font-medium">Final KM</td>
                <td>{final_km || "N/A"}</td>
              </tr>
              <tr>
                <td className="font-medium">Pickup Time</td>
                <td>{pickup_time || "N/A"}</td>
              </tr>
              <tr>
                <td className="font-medium">Return Time</td>
                <td>{return_time || "N/A"}</td>
              </tr>
              <tr>
                <td className="font-medium">Days Needed</td>
                <td>{days_needed || "N/A"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MakePaymentPage;