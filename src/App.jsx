import React from 'react'; 
import { createBrowserRouter, RouterProvider } from "react-router-dom";  // New router API
import Login from './pages/Login and Register/Login';
import Register from './pages/Login and Register/register';
import { ThemeProvider } from "@/contexts/theme-context";
import './index.css'; 
import axios from "axios";

// Configure axios to include credentials (cookies)
axios.defaults.withCredentials = true;

import Layout from './pages/courierPage/layout';
//courier side
import DashboardPage from './pages/courierPage/dashboard/page';
import Appoinment from './pages/courierPage/book/appoinment';
import Profile from './pages/courierPage/Profile/profile';

//manufecture side
import ManufectureDashboardPage from './pages/manufecturePage/dashboard/dashboard'
import Book from './pages/manufecturePage/Schedule Delivery/book'
import Notification from './pages/manufecturePage/Notification/notification';
import VehicalBook from './pages/Administrator/booking/book';
import CustomerBook from './pages/Administrator/customerbook/customer';
import Vehical from './pages/Administrator/vehical/vehical';
import ProtectedRoute from './components/ProtectedRoute';
import Tax from './pages/Administrator/Tax/tax';
import Plan from './pages/Administrator/plan/plan';
import DistanceRange from './pages/Administrator/DistanceRange/DistanceRange';
import PlanPrice from './pages/Administrator/PlanPrice/PlanPrice';
import RentBooking from './pages/Administrator/booking/book';
import MakePaymentPage from './pages/Administrator/Makepayment/MakePaymentPage';
import Customer from './pages/Administrator/Customer/Customer';
import Employee from './pages/Administrator/Employee/Employee';
import Driver from './pages/Administrator/Driver/Driver';
function App() {
  const router = createBrowserRouter([
    {
      path: '/Login',
      element: < Login />,
    },
    {
      path: '/Register',
      element: <Register />,
    },  
    { 
      path: "/",
            element: (
          <ProtectedRoute>
                <Layout />
         </ProtectedRoute>
            ),
            children: [
              {
                  index: true,
                  element: <DashboardPage />,
              },
              {
                  path: "Dashboard",
                  element:<ManufectureDashboardPage/>,
              },
              {
                path :"CustomerBook",
                element:<CustomerBook />,
              },
              {
                  path: "VehicalBook",
                  element: <VehicalBook />,
              },
              {
                  path:"DistanceRange",
                  element:<DistanceRange/>
              },
              {
                path: "Plan",
                element: <Plan />
              },
              {
                  path: "Driver",
                  element: <Driver />
              },
              {
                path:"Employee",
                element:<Employee />
              },
              {
                path: "make-payment", // Corrected path name
                element: <MakePaymentPage />, // Corrected component name
              },
              {
                path:"PlanPrice",
                element:<PlanPrice/>
              },
              {
                 path:"vehical",
                 element:<Vehical />
              },
              {
                path:"Customer",
                element:<Customer/>
              },
              { path : "tax",
                element:<Tax />
              },
             
              { path: "payment",
                element: <Login />,
              },
              {
path:"RentBooking",
element:<RentBooking />
              },
              {
                  path: "products",
                  element: <h1 className="title">Products</h1>,
              },
              {
                  path: "new-product",
                  element: <h1 className="title">New Product</h1>,
              },
              {
                  path: "inventory",
                  element: <h1 className="title">Inventory</h1>,
              },
              {
                  path: "settings",
                  element: <Profile />,
              },
              {
                path:"Notification",
                element:< Notification />,
              },
          ],
    }
  ]);

  return (
    <ThemeProvider storageKey="theme">
        <RouterProvider router={router} />
    </ThemeProvider>
);
}

export default App;
