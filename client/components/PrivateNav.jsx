import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";

import Sidebar from "../components/Sidebar";
import logo from "../../docs/assets/images/logo.png";

const PrivateNav = (props) => {
  const [activeSideBar, setActiveSideBar] = useState(false);
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
          Hi, {props.user.firstName}
        </span>
      </div>
      <div>
        {activeSideBar ? (
          <div className="w-72 fixed bg-priwhite">
            <Sidebar user={props.user} />
          </div>
        ) : (
          <div className="w-0"></div>
        )}
      </div>
    </main>
  );
};

export default PrivateNav;
