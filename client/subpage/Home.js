import React from "react";
import MovingComponent from "react-moving-text";
import homeImage from "../../docs/assets/images/homepagePicNoText.png"
import "../../client/index.css";

const Home = () => {

  return (
    <div
      className="h-screen w-50 flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <MovingComponent
        type="unfold"
        duration="4000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
        className="flex items-center pr-5 pb-10 font-extrabold text-4xl mb-2.5 text-priblue"
        // style={{
        //   top: "50%",
        //   left: "50%",
        //   transform: "translate(-50%, -50%)",
        // }}
      >
        BUILD WITH CONFIDENCE
      </MovingComponent>

      <div className="flex justify-center w-72 h-2 text-5xl mb-2.5 mt-2.5 rounded-lg bg-priwhite"></div>

      <MovingComponent
        type="unfold"
        duration="5000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
        className="flex items-center text-1xl mt-2.5 text-priblue"
      >
        Ensure Your Project Stand Strong And Secure
      </MovingComponent>
    </div>
  );
};

export default Home;
