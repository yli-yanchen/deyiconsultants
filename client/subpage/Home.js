import React from "react";
import MovingComponent from "react-moving-text";

import "../../build/output.css";

const Home = () => {
  return (
    <div className="MainContainer overflow-hidden flex flex-col items-center justify-center h-50vw bg-cover bg-center bg-no-repeat" 
         style={{backgroundImage: "url('../../docs/assets/images/homepagePicNoText.png')"}}>
      <MovingComponent
        type="unfold"
        duration="4000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
        className="homeh1"
      >
        BUILD WITH CONFIDENCE
      </MovingComponent>
      <div className="underline"></div>
      <br />
      <MovingComponent
        type="unfold"
        duration="5000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
        className="homeh3"
      >
        Ensure Your Project Stand Strong And Secure
      </MovingComponent>
    </div>
  );
};

export default Home;
