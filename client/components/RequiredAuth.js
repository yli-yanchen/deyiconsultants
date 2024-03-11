import React, { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hook/useAuth";
import axios from "../hook/axios";
import Loading from "../subpage/Loading";

const RequiredAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  console.log(">>> current Auth: ", auth);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const userid = localStorage.getItem('userid');
        console.log(">>> accessToken in requiredAtuh: ", accessToken);
        const config = {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            userid: userid,
          },
          credentials: "include",
        };

        const authorizedUser = await axios.get(
          "http://localhost:3000/api/auth",
          config
        );
        console.log(">>> authorizedUser: ", authorizedUser);
        if (authorizedUser) setLoggedIn(true);
      } catch (error) {
        setLoggedIn(false);
        setLoading(false);
        console.log("Error authorizing user: ", error);
      } finally {
        setLoading(false);
      }
    };
    verifyToken();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return loggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  );
};

export default RequiredAuth;
