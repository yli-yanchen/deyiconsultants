import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { Container, Box } from "@mui/material";

import logo from "../../docs/assets/images/logo.png";
import Sidebar from "../components/Sidebar";
import axios from "../hook/axios";

const Profile = () => {
  const navigate = useNavigate();
  const [currUser, setCurrUser] = useState("");
  const [activeSideBar, setActiveSideBar] = useState(false);

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
    <main className="h-screen justify-center items-center relative bg-priwhite">
      <div className="w-full h-14 flex flex-row items-center pt-10 pb-10 left-6 border-b border-thdwhite">
        <HiOutlineMenu
          className="w-6 ml-6 mr-6 font-bold size-14"
          onClick={() => setActiveSideBar(!activeSideBar)}
        />
        <img className="h-14 w-auto" src={logo} alt="DEYI Logo" />
        {/* search function here */}
        <span className="ml-auto mr-12 text-priblue">
          Hi, {currUser.firstName}
        </span>
      </div>
      <div>
        {activeSideBar ? (
          <div className="w-72 fixed bg-priwhite">
            <Sidebar user={currUser} />
          </div>
        ) : (
          <div className="w-0"></div>
        )}
      </div>
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
    </main>
  );
};

export default Profile;
