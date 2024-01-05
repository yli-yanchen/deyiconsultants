import React from "react";
import Navigation from "./Navigation";
import HomepagePic from "./homepage";

const MainContainer = () => {
    return (
      <div className="MainContainer">
        <Navigation />
        <HomepagePic />
      </div>
    );
}

export default MainContainer;