import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PrivateNav from "../components/PrivateNav";
import axios from "../hook/axios";

const ProjectList = () => {
  const navigate = useNavigate();
  const [currUser, setCurrUser] = useState("");

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
        setCurrUser(getuserdata.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [navigate]);


  return (
    <div>
      <PrivateNav user={currUser} />
      <h1 className=""> Welcome to Project Dashboard! </h1>
    </div>
  );
};

export default ProjectList;
