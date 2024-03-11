import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import homeImage from "../../docs/assets/images/homepagePicNoText.png";
import axios from "../hook/axios";

const Profile = () => {
  const navigate = useNavigate();
  const [currUser, setCurrUser] = useState(null);

  useEffect(() => {
    const userid = localStorage.getItem("userid");
    const fetchUserData = async () => {
      try {
        const getuserdata = await axios.get("/api/profile/getuser", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userid}`,
          },
        });
        console.log(">>> getuserdata: ", getuserdata.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [navigate]);

  return (
    <div
      className="h-screen flex flex-row justify-center items-center"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
    >
      <Sidebar />
      <h1 className="flex items-center"> {currUser} </h1>
    </div>
  );
};

export default Profile;
