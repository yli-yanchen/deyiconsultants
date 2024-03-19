import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box } from "@mui/material";

import PrivateNav from "../components/PrivateNav";
import axios from "../hook/axios";

const Profile = () => {
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
      <PrivateNav user={currUser}/>
      <Container
      // sx={{
      //   display: "flex",
      //   flexDirection: "row",
      //   justifyContent: "space-between",
      // }}
      >
        <Box
          height={100}
          width="100%"
          borderRadius={0.5}
          my={4}
          display={"flex"}
          alignItems="center"
          flexDirection={"row"}
          justifyContent={"center"}
          gap={4}
          p={2}
          sx={{ marginLeft: "48px" }}
          className="text-priblue "
        >
          <span className="text-xl"> Current Balance: </span>
          <span className="font-bold text-4xl">$3,000</span>
        </Box>

        <Box
          height={300}
          width={1200}
          my={4}
          alignItems="center"
          gap={4}
          p={2}
          sx={{ border: "2px solid grey", marginRight: "48px" }}
        >
          Project Overview
        </Box>
      </Container>
    </div>
  );
};

export default Profile;
