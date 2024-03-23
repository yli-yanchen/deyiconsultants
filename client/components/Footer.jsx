import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [menu, setMenu] = useState("");

  return (
    <div className="w-full h-30 flex flex-col items-center justify-center bg-thdwhite bg-opacity-15">
      <div className="footerItem font-bold mt-6 mb-0">Quick Links</div>
      <div className="flex flex-row">
        <ul className="navbar flex flex-row items-center text-center">
          <li class="footerItem" onClick={() => setMenu("About")}>
            <Link style={{ textDecoration: "none" }} to={"/about"}>
              • About{menu === "About" ? <hr className="bg-secwhite" /> : <></>}
            </Link>
          </li>
          <li className="footerItem" onClick={() => setMenu("Expertice")}>
            <Link style={{ textDecoration: "none" }} to={"/expertice"}>
              • Expertice{menu === "Expertice" ? <hr /> : <></>}
            </Link>
          </li>
          <li className="footerItem" onClick={() => setMenu("Procedure")}>
            <Link style={{ textDecoration: "none" }} to={"/procedure"}>
              • Procedure{menu === "Procedure" ? <hr /> : <></>}
            </Link>
          </li>
          <li className="footerItem" onClick={() => setMenu("Contact")}>
            <Link style={{ textDecoration: "none" }} to={"/contact"}>
              • Contact{menu === "Contact" ? <hr /> : <></>}
            </Link>
          </li>
          <li className="footerItem" onClick={() => setMenu("Login")}>
            <Link style={{ textDecoration: "none" }} to={"/login"}>
              • Login{menu === "Login" ? <hr /> : <></>}
            </Link>
          </li>
        </ul>
      </div>
      <div className="footerItem font-sm mt-2 mb-10">
        ©2016 - 2024 DEYI Consultants. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
