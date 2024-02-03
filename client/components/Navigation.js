import React, { Component, useState, useEffect } from "react";
import logo from "../../docs/assets/images/logo.png";
import { LiaSearchSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className="navContainer flex flex-row space-between itmes-center h-16 px-10 pt-8 pb-8">
      <a href="/">
        <img className="logo flex w-auto h-16 object-contain" src={logo} alt="DEYI Logo" />
      </a>

      <ul className="navbar bg-priwhite flex items-center gap-12 h-16">
        <li class="navitem" onClick={() => setMenu("ABOUT")}>
          <Link style={{ textDecoration: "none" }} to={"/about"}>
            ABOUT{menu === "ABOUT" ? <hr /> : <></>}
          </Link>
        </li>
        <li className="navitem" onClick={() => setMenu("EXPERTICE")}>
          <Link style={{ textDecoration: "none" }} to={"/expertice"}>
            EXPERTICE{menu === "EXPERTICE" ? <hr /> : <></>}
          </Link>
        </li>
        <li className="navitem" onClick={() => setMenu("PROJECT")}>
          <Link style={{ textDecoration: "none" }} to={"/project"}>
            PROJECT{menu === "PROJECT" ? <hr /> : <></>}
          </Link>
        </li>
        <li className="navitem" onClick={() => setMenu("CONTACT")}>
          <Link style={{ textDecoration: "none" }} to={"/contact"}>
            CONTACT{menu === "CONTACT" ? <hr /> : <></>}
          </Link>
        </li>
        <li className="navitem" onClick={() => setMenu("LOG IN")}>
          <Link style={{ textDecoration: "none" }} to={"/login"}>
            LOG IN{menu === "LOG IN" ? <hr /> : <></>}
          </Link>
        </li>
      </ul>

      <div className="searchIconContainer">
        <LiaSearchSolid className="searchIcon" />
      </div>
    </div>
  );
};

export default Navigation;
