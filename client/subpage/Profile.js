import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import homeImage from "../../docs/assets/images/homepagePicNoText.png";
import { HiOutlineMenu } from "react-icons/hi";
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
    <main
      className="h-screen justify-center items-center relative"
      // style={{
      //   backgroundImage: `url(${homeImage})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundColor: "rgba(255, 255, 255, 0.05)",
      // }}
    >
      <div className="fixed w-full h-14 bg-priwhite ">
        <div className="fixed flex-row top-4 left-4 h-1.5 w-2 items-center">
          <HiOutlineMenu
            className="fixed flex-row font-bold size-6"
            onClick={() => setActiveSideBar(!activeSideBar)}
          />
          <span className="fixed left-16 flex-row text-priblue">
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
      </div>
    </main>
  );
};

export default Profile;
