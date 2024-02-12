import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hook/useAuth";

const RequiredAuth = ({ allowedRole }) => {
  const { auth } = useAuth();
  const location = useLocation();

  console.log(">>> current Auth: ", auth);
//   return auth?.role && auth.role.find((role) => allowedRole?.includes(role)) ? (
//     <Outlet /> // Render child components if the user has required role
//   ) : auth?.email ? (
//     <Navigate to="/unauthorized" state={{ from: location }} replace /> // change to unauthorized page
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   );
// };

  if (!auth || !auth.role) {
    // Handle case where auth or auth.role is undefined
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return allowedRole?.includes(auth.role) ? (
    <Outlet /> // Render child components if the user has required role
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace /> // change to unauthorized page
  );
}

export default RequiredAuth;
