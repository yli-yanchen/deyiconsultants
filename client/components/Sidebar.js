import React from "react";
import { Link, link, navLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const Sidebar = () => {
  const activeMenu = true;

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {" "}
      {activeMenu && (
        <div className="flex justify-between items-center">
          {" "}
          <Link to="/" onClick={() => {}} className="items-center">
            <SiShopware /> <span>Profile</span>
          </Link>
        </div>
      )}{" "}
    </div>
  );
};

export default Sidebar;
