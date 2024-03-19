import React, { useState, useEffect } from "react";
import { Link, useNavigate, navLink } from "react-router-dom";
import { RiPictureInPictureExitLine } from "react-icons/ri";

const Sidebar = (props) => {
  const [menu, setMenu] = useState("");
  const [activeSideBar, setActiveSideBar] = useState(true);

  // const navigate = useNavigate();
  const handleLogout = () => {
    setMenu("Logout");
  }

  console.log("props.user.firstName Length: ", props.user.firstName.length);
  return (
    <div>
      {activeSideBar ? (
        <div>
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
                  <Link style={{ textDecoration: "none" }} to={"/profile/projectlist"}>
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
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Sidebar;
