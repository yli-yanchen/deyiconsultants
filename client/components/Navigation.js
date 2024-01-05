import React from "react";
import logo from "../../docs/assets/images/logo.png"; 
import { LiaSearchSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
      <div className="navContainer">
        <a href="/">
          <img className="logo" src={logo} alt="DEYI Logo" />
        </a>

        <ul className="navbar">
          <li className="navitem">
            <Link to={"/about"}>ABOUT</Link>
          </li>
          <li className="navitem">
            <Link to={"/expertice"}>EXPERTICE</Link>
          </li>
          <li className="navitem">
            <Link to={"/project"}>PROJECT</Link>
          </li>
          <li className="navitem">
            <Link to={"/contact"}>CONTACT</Link>
          </li>
          <li className="navitem">
            <Link to={"/signup"}>SIGN IN</Link>
          </li>
        </ul>

        <div className="searchIconContainer">
          <LiaSearchSolid className="searchIcon" />
        </div>
      </div>
    );
};

export default Navigation;
