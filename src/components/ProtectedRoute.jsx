import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const role = sessionStorage.getItem("role");

    if (!role) {
        // Redirect to login if no role is found
        return <Navigate to="/Login" replace />;
    }

    return children;
};

export default ProtectedRoute;