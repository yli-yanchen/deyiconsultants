import React from "react";
import aboutimg from "../../docs/assets/images/about1.jpg";

import "../../build/output.css"

const About = () => {
  return (
    <div className="AboutContainer">
      {/* <img className="aboutimg" src={aboutimg} alt="About Image"></img> */}
      <div className="abouttext">
        <h1 className="abouth1 bg-priblue"> Welcome to DEYI Consultant!</h1>
        <p className="aboutp">
          Welcome to DEYI, where structural engineering meets elegance.
          Established in 2023, we take pride in offering top-notch structural
          engineering design services that seamlessly blend functionality with
          aesthetic appeal. Our team of experienced professionals is dedicated
          to crafting innovative and elegant solutions for a wide range of
          projects. Specializing in Title 24 compliance and Accessory Dwelling
          Unit (ADU) architectural design, we bring a unique blend of technical
          expertise and artistic vision to every endeavor. At DEYI, we believe
          in shaping the future of construction through precision, creativity,
          and a commitment to excellence. Let us be your partner in bringing
          your architectural dreams to life.
        </p>
      </div>
    </div>
  );
};

export default About;
