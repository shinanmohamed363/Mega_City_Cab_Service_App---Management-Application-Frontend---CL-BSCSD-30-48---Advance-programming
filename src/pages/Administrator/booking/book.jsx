import React, { useState, useEffect } from "react";
import axios from "axios";
import { CheckCircle, PencilLine, Trash, Bell, Car } from "lucide-react";
import { useNavigate } from "react-router-dom"; 
const RentBooking = () => {
  // State for bookings
  const [bookings, setBookings] = useState([]);

  // State for form input
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    customer_id: 0,
    pickup_location: "",
    drop_location: "",
    booking_type: "with_driver", // Default value
    vehicle_id: 0,
    driver_id: 0,
    initial_km: 0,
    final_km: 0,
    pickup_time: "",
    return_time: "",
    days_needed: 1,
    tax_id: 0,
    employee_id: 0,
    package_id: 0,
  });
  const handleEditClick = (orderNo) => {
    navigate(`/make-payment?order_no=${orderNo}`); // Redirect to MakePaymentPage with order_no
  };
  // State for notification messages
  const [notification, setNotification] = useState("");

  // Fetch bookings on component mount
  useEffect(() => {
    fetchBookings();
  }, []);

  // Function to fetch bookings from the API
  const fetchBookings = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/booking"
      );
      setBookings(response.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  // Handle input changes in the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Convert numeric fields to integers
    if (
      [
        "customer_id",
        "vehicle_id",
        "driver_id",
        "initial_km",
        "final_km",
        "days_needed",
        "tax_id",
        "employee_id",
        "package_id",
      ].includes(name)
    ) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: parseInt(value, 10) || 0, // Ensure it's an integer or defaults to 0
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }

    console.log("Input Changed:", name, value); // Debugging log
  };

  // Handle form submission to register a new booking
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all required fields
    const isFormValid =
      formData.customer_id > 0 &&
      formData.pickup_location.trim() !== "" &&
      formData.drop_location.trim() !== "" &&
      formData.booking_type.trim() !== "" &&
      formData.vehicle_id > 0 &&
      formData.driver_id > 0 &&
      formData.initial_km >= 0 &&
      formData.final_km >= 0 &&
      formData.pickup_time.trim() !== "" &&
      formData.return_time.trim() !== "" &&
      formData.days_needed > 0 &&
      formData.tax_id > 0 &&
      formData.employee_id > 0 &&
      formData.package_id > 0;

    if (!isFormValid) {
      setNotification("All fields are required.");
      setTimeout(() => setNotification(""), 3000);
      return;
    }

    try {
      const payload = {
        customer_id: formData.customer_id,
        pickup_location: formData.pickup_location,
        drop_location: formData.drop_location,
        booking_type: formData.booking_type,
        vehicle_id: formData.vehicle_id,
        driver_id: formData.driver_id,
        initial_km: formData.initial_km,
        final_km: formData.final_km,
        pickup_time: formData.pickup_time,
        return_time: formData.return_time,
        days_needed: formData.days_needed,
        tax_id: formData.tax_id,
        employee_id: formData.employee_id,
        package_id: formData.package_id,
      };

      console.log("Payload:", payload); // Debugging log

      await axios.post(
        "http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/booking",
        payload
      );

      setFormData({
        customer_id: 0,
        pickup_location: "",
        drop_location: "",
        booking_type: "with_driver",
        vehicle_id: 0,
        driver_id: 0,
        initial_km: 0,
        final_km: 0,
        pickup_time: "",
        return_time: "",
        days_needed: 1,
        tax_id: 0,
        employee_id: 0,
        package_id: 0,
      });

      setNotification("Booking registered successfully!");
      setTimeout(() => {
        setNotification("");
      }, 3000);

      fetchBookings();
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      setNotification("Failed to register booking. Please try again.");
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

      <h1 className="title">Booking</h1>
      <div className="flex flex-col gap-y-4 gap-8">
        <div className="grid sm:grid-cols-1 gap-x-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 grid-flow-row rounded-lg border border-slate-300 bg-white p-1 transition-colors dark:border-slate-700 dark:bg-slate-900">
          <div className="grid col-span-4 sm:col-span-4 p-2">
            <div className="flex items-center gap-2">
              <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                <Car size={15} />
              </div>
              <p className="card-title">Manage Booking Details</p>
            </div>
          </div>

          {/* Form Fields */}
          {Object.keys(formData).map((key) => {
            if (key === "booking_type") {
              return (
                <div key={key} className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
                  <p className="bookinputlable">{key.replace(/_/g, " ").toUpperCase()}</p>
                  <div className="bookinputfield">
                    <select
                      name={key}
                      value={formData[key]}
                      onChange={handleInputChange}
                      className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                      required
                    >
                      <option value="with_driver">With Driver</option>
                      <option value="without_driver">Without Driver</option>
                    </select>
                  </div>
                </div>
              );
            }

            if (["pickup_time", "return_time"].includes(key)) {
              return (
                <div key={key} className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
                  <p className="bookinputlable">{key.replace(/_/g, " ").toUpperCase()}</p>
                  <div className="bookinputfield">
                    <input
                      type="datetime-local"
                      name={key}
                      value={formData[key]}
                      onChange={handleInputChange}
                      className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                      required
                    />
                  </div>
                </div>
              );
            }

            return (
              <div key={key} className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
                <p className="bookinputlable">{key.replace(/_/g, " ").toUpperCase()}</p>
                <div className="bookinputfield">
                  <input
                    type={typeof formData[key] === "number" ? "number" : "text"}
                    name={key}
                    value={formData[key]}
                    onChange={handleInputChange}
                    placeholder={`Enter ${key.replace(/_/g, " ")}`}
                    className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
                    required
                  />
                </div>
              </div>
            );
          })}

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
            <p className="card-title">Booking Details</p>
          </div>
          <div className="card-body p-0">
            <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
              <table className="table">
                <thead className="table-header">
                  <tr className="table-row">
                    <th className="table-head">#</th>
                    <th className="table-head">Order No</th>
                    <th className="table-head">Customer ID</th>
                    <th className="table-head">Pickup Location</th>
                    <th className="table-head">Drop Location</th>
                    <th className="table-head">Booking Type</th>
                    <th className="table-head">Vehicle ID</th>
                    <th className="table-head">Driver ID</th>
                    <th className="table-head">Initial KM</th>
                    <th className="table-head">Final KM</th>
                    <th className="table-head">Pickup Time</th>
                    <th className="table-head">Return Time</th>
                    <th className="table-head">Days Needed</th>
                    <th className="table-head">Tax ID</th>
                    <th className="table-head">Employee ID</th>
                    <th className="table-head">Package ID</th>
                    <th className="table-head">Action</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {bookings.map((booking, index) => (
                    <tr key={booking.order_no} className="table-row">
                      <td className="table-cell">{index + 1}</td>
                      <td className="table-cell">{booking.order_no}</td>
                      <td className="table-cell">{booking.customer_id}</td>
                      <td className="table-cell">{booking.pickup_location}</td>
                      <td className="table-cell">{booking.drop_location}</td>
                      <td className="table-cell">{booking.booking_type}</td>
                      <td className="table-cell">{booking.vehicle_id}</td>
                      <td className="table-cell">{booking.driver_id}</td>
                      <td className="table-cell">{booking.initial_km}</td>
                      <td className="table-cell">{booking.final_km}</td>
                      <td className="table-cell">{booking.pickup_time}</td>
                      <td className="table-cell">{booking.return_time}</td>
                      <td className="table-cell">{booking.days_needed}</td>
                      <td className="table-cell">{booking.tax_id}</td>
                      <td className="table-cell">{booking.employee_id}</td>
                      <td className="table-cell">{booking.package_id}</td>
                      <td className="table-cell">
                        <div className="flex items-center gap-x-3">
                          <button className="text-blue-500 dark:text-blue-600"
                           onClick={() => handleEditClick(booking.order_no)}>
                            
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

export default RentBooking;