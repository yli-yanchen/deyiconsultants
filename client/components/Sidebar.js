import React, { useState, useEffect } from "react";
import { Link, link, navLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { SiShopware } from "react-icons/si";

const Sidebar = (props) => {
  const [menu, setMenu] = useState("");

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200";

  const navigate = useNavigate();

  return (
    <div className="h-screen w-72 bg-priwhite text-priblue fixed flex-col top-0 left-0 m-0 flex shadow-lg">
      <div className="flex flex-col justify-between items-center mt-40">
        <Link to="/profile" onClick={() => {}} className="items-center">
          <span className="flex top-4 left-2">{props.user.firstName}</span>
        </Link>
      </div>
      <div>
        <ul>
          <li className="flex flex-col mt-20 ml-20" onClick={() => setMenu("Profile")}>
            <Link style={{ textDecoration: "none" }} to={"/profile"}>
              Profile{menu === "Profile" ? <hr /> : <></>}
            </Link>
          </li>
          <li className="flex flex-col mt-10 ml-20" onClick={() => setMenu("Project")}>
            <Link style={{ textDecoration: "none" }} to={"/profile"}>
              Project{menu === "Project" ? <hr /> : <></>}
            </Link>
          </li>
          <li className="flex flex-col mt-10 ml-20" onClick={() => setMenu("Payment")}> 
            <Link style={{ textDecoration: "none" }} to={"/profile"}>
              Payment{menu === "Payment" ? <hr className="text-bold" /> : <></>}
            </Link>
          </li>
          <li className="flex flex-col mt-10 ml-20" onClick={() => setMenu("Message")}> 
            <Link style={{ textDecoration: "none" }} to={"/profile"}>
              Message{menu === "Message" ? <hr/> : <></>}
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Link to="/profile" onClick={() => {}} className="items-center">
          <span className="flex flex-col mt-10 ml-20">
            Logout{menu === "Logout" ? <hr /> : <></>}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
