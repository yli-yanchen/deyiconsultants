import React from "react";
import homeImage from "../../docs/assets/images/homepagePicNoText.png";
import "../../client/index.css";

const About = () => {
  return (
    <div
      className="homeContainer h-screen w-50 justify-center items-center"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="abouth1flex flex flex-center items-center text-priblue text-30">
        Welcome to DEYI Consultant!
      </h1>
      <p className="aboutp">
        Welcome to DEYI, where structural engineering meets elegance.
        Established in 2023, we take pride in offering top-notch structural
        engineering design services that seamlessly blend functionality with
        aesthetic appeal. Our team of experienced professionals is dedicated to
        crafting innovative and elegant solutions for a wide range of projects.
        Specializing in Title 24 compliance and Accessory Dwelling Unit (ADU)
        architectural design, we bring a unique blend of technical expertise and
        artistic vision to every endeavor. At DEYI, we believe in shaping the
        future of construction through precision, creativity, and a commitment
        to excellence. Let us be your partner in bringing your architectural
        dreams to life.
      </p>
    </div>
  );
};

export default About;
