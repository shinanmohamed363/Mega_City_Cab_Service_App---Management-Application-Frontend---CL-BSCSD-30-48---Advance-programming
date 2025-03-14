  import React, { useEffect, useState} from "react";
  import { useNavigate } from "react-router-dom";

  import { useMediaQuery } from "@uidotdev/usehooks";
  import { CheckCircle, Facebook, Globe, Instagram, LogIn } from "lucide-react";
  import axios from "axios";

  const Login = () => {
    const isDesktopDevice = useMediaQuery("(min-width:768px)");
  const [collapsed, setCollapsed] = useState(!isDesktopDevice);
  const navigate = useNavigate();
  const [username, setUsername] = useState(""); // State for username input
  const [password, setPassword] = useState(""); // State for password input
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages


    useEffect(()=>{
      setCollapsed(!isDesktopDevice);
    },[isDesktopDevice]);

    const handleLogin = async () => {
      try {
          console.log("Sending credentials:", { username, password });
  
          const response = await axios.post(
              "http://localhost:8081/Mega_City_Cab_Service_App_war_exploded/LoginSystem",
              {
                  username: username,
                  password: password,
              },
              {
                  headers: { "Content-Type": "application/json" },
                  withCredentials: true,
              }
          );
  
          const { message, session } = response.data;
  
          if (message === "Login successful") {
              // Normalize the role name to uppercase
              const normalizedRole = session.role.toUpperCase();
  
              // Store session details in sessionStorage
              sessionStorage.setItem("role", normalizedRole);
              sessionStorage.setItem("username", session.username);
              sessionStorage.setItem("name", session.name);
              sessionStorage.setItem("mobile", session.mobile);
  
              // Redirect based on the user role
              if (normalizedRole === "ADMIN") {
                  navigate("/", { replace: true }); // Redirect to admin dashboard
              } else {
                  navigate("/Dashboard", { replace: true }); // Redirect to other roles' dashboard
              }
          } else {
              setErrorMessage("Invalid username or password. Please try again.");
          }
      } catch (error) {
          console.error("Login failed:", error.response?.data || error.message);
          setErrorMessage("Invalid username or password. Please try again.");
      }
  };

    return (
      
      <div className="min-h-screen w-full dark:bg-slate-950 bg-white dark:bg-grid-slate-700 bg-grid-black/[0.2] flex flex-col relative">
  {/* Radial gradient for the container */}
  <div className="absolute pointer-events-none inset-0 dark:bg-slate-950 bg-white [mask-image:radial-gradient(ellipse_at_bottom,transparent_-10%,black)] z-0"></div>

  {/* Main Content */}
 
  <div className="grid grid-cols-1 min-h-screen justify-items-center items-center z-10 relative">
    <div className="card lg:max-w-96 md:w-2/4 w-11/12">
      <div className="flex items-center justify-center gap-2">
        <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
          <LogIn size={20} />
        </div>
        <p className="card-title">Login</p>
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1">
          <p className="bookinputlable">user name</p>
          <div className="bookinputfield">
            <input
              type="text"
              placeholder="Enter Your user name"
              className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
              value={username}
              onChange={(e) => setUsername(e.target.value)} // Update email state
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-1 ">
          <p className="bookinputlable">Password</p>
          <div className="bookinputfield">
            <input
              type="text"
              placeholder="Enter Your Password"
              className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:placeholder:text-slate-300/65 dark:text-slate-50"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-1 ">
        <button
                
  type="submit"
  onClick={handleLogin} // Call handleLogin on button click
  className={`btn-ghost flex h-10 items-center justify-center gap-x-2 rounded-lg p-4 mt-2 transition-colors 
    bg-blue-500 text-white hover:bg-blue-600 
    dark:bg-blue-700 dark:text-slate-50 dark:hover:bg-blue-600 
   `}
>
  <CheckCircle size={20} /> {/* Icon */}
  <span>Login</span> {/* Button Text */}
</button>
        </div>
        {errorMessage && (
              <p className="text-red-500 text-sm">{errorMessage}</p>
            )}
        <div className="flex item-center gap-2 justify-between">
          <div><p className="card-title text-xs underline dark:text-blue-600">Forget Password</p></div>
          <div><p className="card-title text-xs underline dark:text-blue-600">Sign In</p></div>
        </div>
        <div className="">
  <div className="h-[1px] bg-slate-300 dark:bg-slate-700 w-full"></div>
</div>

<div className=" flex items-center justify-evenly gap-2">
<div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
          <Globe size={20} />
        </div>
        <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
          <Facebook size={20} />
        </div>
        <div className="w-fit rounded-lg bg-blue-500/20 p-2 text-blue-500 transition-colors dark:bg-blue-600/20 dark:text-blue-600">
          <Instagram size={20} />
        </div>
</div>


      </div>
    </div>
  </div>
</div>


      

      
    
    );
  };

  export default Login;
