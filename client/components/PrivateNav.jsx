import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiPictureInPictureExitLine } from "react-icons/ri";
import { HiOutlineMenu } from "react-icons/hi";

import { useGetToken } from "../hook/useCookies";
import logo from "../../docs/assets/images/logo.png";
import axios from "../hook/axios";

const PrivateNav = (props) => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("");
  const { deleteToken } = useGetToken();
  const [activeSideBar, setActiveSideBar] = useState(false);

  // const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      setMenu("Logout");
      const setLogout = await axios.post("/api/login/logout");
      if (setLogout) {
        deleteToken();
        console.log(">>> remove userinformation from cookie, and updated db successfully");
        navigate("/login");
      } else {
        console.log(">>> error in handleLogout");
      }
      window.localStorage.removeItem("userid");
      window.localStorage.removeItem("accessToken");
    } catch (error) {
      console.log(">>> Logout Client Side Error: ", error)
    }
  };

  return (
    <main className="justify-center items-center relative bg-priwhite">
      <div className="w-full h-14 flex flex-row items-center pt-10 pb-10 left-6 border-b border-thdwhite">
        <HiOutlineMenu
          className="w-6 ml-6 mr-6 font-bold size-14"
          onClick={() => setActiveSideBar(!activeSideBar)}
        />
        <img className="h-14 w-auto" src={logo} alt="DEYI Logo" />
        {/* search function here */}
        <span className="ml-auto mr-12 text-priblue">
          Hi, {props.user.firstName}
        </span>
      </div>

      <div>
        {activeSideBar ? (
          <>
            <div className="h-screen w-72 bg-priblue text-priwhite fixed flex-col top-0 left-0 m-0 flex shadow-lg">
              <RiPictureInPictureExitLine
                className="size-6 mt-4 ml-60 text-thdwhite"
                onClick={() => setActiveSideBar(false)}
              />
              <div className="flex flex-col justify-between items-center mt-40">
                <Link to="/profile" className="items-center">
                  <span
                    className={`flex items-center justify-center top-4 font-bold rounded-full h-16 w-16 bg-thdwhite text-priblue ${
                      props.user.firstName.length <= 6
                        ? "text-xl"
                        : "h-16 w-16 text-sm"
                    }`}
                  >
                    {props.user.firstName}
                  </span>
                </Link>
              </div>

              <div>
                <ul>
                  <li
                    className="flex flex-col mt-20 ml-20"
                    onClick={() => setMenu("Profile")}
                  >
                    <Link style={{ textDecoration: "none" }} to={"/profile"}>
                      Profile
                      {menu === "Profile" ? <hr className="w-12" /> : <></>}
                    </Link>
                  </li>
                  <li
                    className="flex flex-col mt-10 ml-20"
                    onClick={() => setMenu("Project")}
                  >
                    <Link
                      style={{ textDecoration: "none" }}
                      to={"/profile/projectlist"}
                    >
                      Project
                      {menu === "Project" ? <hr className="w-14" /> : <></>}
                    </Link>
                  </li>
                  <li
                    className="flex flex-col mt-10 ml-20"
                    onClick={() => setMenu("Payment")}
                  >
                    <Link style={{ textDecoration: "none" }} to={"/profile"}>
                      Payment
                      {menu === "Payment" ? <hr className="w-16" /> : <></>}
                    </Link>
                  </li>
                  <li
                    className="flex flex-col mt-10 ml-20"
                    onClick={() => setMenu("Message")}
                  >
                    <Link style={{ textDecoration: "none" }} to={"/profile"}>
                      Message
                      {menu === "Message" ? <hr className="w-16" /> : <></>}
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <Link
                  to="/profile"
                  onClick={handleLogout}
                  className="items-center"
                >
                  <span className="flex flex-col mt-10 ml-20">
                    Logout{menu === "Logout" ? <hr className="w-12" /> : <></>}
                  </span>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </main>
  );
};

export default PrivateNav;
