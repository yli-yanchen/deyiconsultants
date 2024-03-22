import React from "react";
import homeImage from "../../docs/assets/images/homepagePicNoText.png";

const Contact = () => {
  return (
    <div
      className="h-screen flex flex-row justify-center items-center overflow-hidden"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
    >
      <h1 className=""> Contact Page </h1>
    </div>
  );
};

export default Contact;
