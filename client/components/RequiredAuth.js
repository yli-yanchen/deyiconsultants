import React, { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hook/useAuth";
import axios from "../hook/axios";

const RequiredAuth = ({ allowedRole }) => {
  const { auth } = useAuth();
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(">>> current Auth: ", auth);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const authorizedUser = await axios.get("/auth", {
          withCredentials: true,
        }, (req, res) => {
           res.set("Access-Control-Allow-Origin", "http://localhost:8080");
        });
        if (authorizedUser) setLoggedIn(true);
      } catch (error) {
        setLoggedIn(false);
        console.log("Error authorizing user: ", error);
      }
    };
    verifyToken();
  }, []);

  if (!auth || !loggedIn || !auth.role) {
    // Handle case where auth or auth.role is undefined
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return allowedRole?.includes(auth.role) ? (
    <Outlet /> // Render child components if the user has required role
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace /> // change to unauthorized page
  );
};

export default RequiredAuth;
