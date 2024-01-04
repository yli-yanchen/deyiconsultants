import React from "react";
import logo from "../../docs/assets/images/logo.png"; 
import { LiaSearchSolid } from "react-icons/lia";

const Navigation = () => {
    return (
      <div className="navContainer">
        <a href="/">
          <img className="logo" src={logo} alt="DEYI Logo" />
        </a>

        <ul className="navbar">
          <li className="navitem">
            <a href="/about">ABOUT</a>
          </li>
          <li className="navitem">
            <a href="/expertice">EXPERTICE</a>
          </li>
          <li className="navitem">
            <a href="/project">PROJECT</a>
          </li>
          <li className="navitem">
            <a href="/contact">CONTACT</a>
          </li>
          <li className="navitem">
            <a href="/signup">SIGN IN</a>
          </li>
        </ul>

        <div className="searchIconContainer">
          <LiaSearchSolid className="searchIcon" />
        </div>
      </div>
    );
};

export default Navigation;
