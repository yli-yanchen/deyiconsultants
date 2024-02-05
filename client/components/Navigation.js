import React, { Component, useState, useEffect } from "react";
import logo from "../../docs/assets/images/logo.png";
import { LiaSearchSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className="container w-full relative flex flex-row justify-between items-center p-3">
      <a href="/">
        <img
          className="logo h-28 w-90 p-3"
          src={logo}
          alt="DEYI Logo"
        />
      </a>

      <ul className="navbar flex flex-row pl-80 pr-2 items-center text-center">
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
    </div>
  );
};

export default Navigation;
