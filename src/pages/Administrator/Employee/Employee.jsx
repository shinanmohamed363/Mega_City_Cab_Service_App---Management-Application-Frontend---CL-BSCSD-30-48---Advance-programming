import React, { useState, useEffect } from "react";
import axios from "axios";
import { CheckCircle, PencilLine, Trash, Bell } from "lucide-react";

const Employee = () => {
  // State for employees
  const [employees, setEmployees] = useState([]);

  // State for form input
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    username: "",
    password: "",
    salary: 0,
    experience: 0,
  });

  // State for notification messages
  const [notification, setNotification] = useState("");

  // Fetch employees on component mount
  useEffect(() => {
    fetchEmployees();
  }, []);

  // Function to fetch employees from the API
  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/person?type=EMPLOYEE"
      );
      setEmployees(response.data); // Update state with fetched data
    } catch (error) {
      console.error("Error fetching employees:", error);
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

  // Handle form submission to register a new employee
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      type: "employee",
      name: formData.name.trim(),
      address: formData.address.trim(),
      mobile: formData.mobile.trim(),
      username: formData.username.trim(),
      password: formData.password.trim(),
      salary: parseFloat(formData.salary),
      experience: parseInt(formData.experience),
    };

    console.log("Payload:", payload); // Debugging log

    if (
      !payload.name ||
      !payload.address ||
      !payload.mobile ||
      !payload.username ||
      !payload.password ||
      isNaN(payload.salary) ||
      isNaN(payload.experience)
    ) {
      setNotification("All fields are required and must be valid.");
      setTimeout(() => setNotification(""), 3000);
      return;
    }

    try {
      await axios.post(
        "http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/person",
        payload
      );

      setFormData({
        name: "",
        address: "",
        mobile: "",
        username: "",
        password: "",
        salary: 0,
        experience: 0,
      });

      setNotification("Employee registered successfully!");
      setTimeout(() => {
        setNotification("");
      }, 3000);

      fetchEmployees();
    } catch (error) {
      console.error("API Error:", error.response?.data || error.message);
      setNotification("Failed to register employee. Please try again.");
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

      <h1 className="title">Employee Management</h1>
      <div className="flex flex-col gap-y-4 gap-8">
        <div className="grid sm:grid-cols-1 gap-x-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 grid-flow-row rounded-lg border border-slate-300 bg-white p-1 transition-colors dark:border-slate-700 dark:bg-slate-900">
          <div className="grid col-span-4 sm:col-span-4 p-2">
            <div className="flex items-center gap-2">
              <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
                <Bell size={15} />
              </div>
              <p className="card-title">Manage Employee Details</p>
            </div>
          </div>

          {/* Name Input */}
          <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
            <p className="bookinputlable">Name</p>
            <div className="bookinputfield">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter Name"
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
              />
            </div>
          </div>

          {/* Address Input */}
          <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
            <p className="bookinputlable">Address</p>
            <div className="bookinputfield">
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter Address"
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
              />
            </div>
          </div>

          {/* Mobile Input */}
          <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
            <p className="bookinputlable">Mobile</p>
            <div className="bookinputfield">
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Enter Mobile Number"
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
              />
            </div>
          </div>

          {/* Username Input */}
          <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
            <p className="bookinputlable">Username</p>
            <div className="bookinputfield">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter Username"
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
            <p className="bookinputlable">Password</p>
            <div className="bookinputfield">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter Password"
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
              />
            </div>
          </div>

          {/* Salary Input */}
          <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
            <p className="bookinputlable">Salary</p>
            <div className="bookinputfield">
              <input
                type="number"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                placeholder="Enter Salary"
                className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
              />
            </div>
          </div>

          {/* Experience Input */}
          <div className="xl:col-span-2 col-span-4 flex flex-col gap-y-1 p-2">
            <p className="bookinputlable">Experience</p>
            <div className="bookinputfield">
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                placeholder="Enter Experience (in years)"
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
            <p className="card-title">Employee Details</p>
          </div>
          <div className="card-body p-0">
            <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
              <table className="table">
                <thead className="table-header">
                  <tr className="table-row">
                    <th className="table-head">#</th>
                    <th className="table-head">Name</th>
                    <th className="table-head">Address</th>
                    <th className="table-head">Mobile</th>
                    <th className="table-head">Salary</th>
                    <th className="table-head">Experience</th>
                    <th className="table-head">Action</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  {employees.map((employee, index) => (
                    <tr key={employee.id} className="table-row">
                      <td className="table-cell">{employee.id}</td>
                      <td className="table-cell">{employee.name}</td>
                      <td className="table-cell">{employee.address}</td>
                      <td className="table-cell">{employee.mobile}</td>
                      <td className="table-cell">{employee.salary}</td>
                      <td className="table-cell">{employee.experience}</td>
                      <td className="table-cell">
                        <div className="flex items-center gap-x-3">
                          <button className="text-blue-500 dark:text-blue-600">
                            <PencilLine size={20} />
                          </button>
                          <button className="text-red-500">
                            <Trash size={20} />
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

export default Employee;