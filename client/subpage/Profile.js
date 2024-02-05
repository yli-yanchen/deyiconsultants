import React from "react";
import { useParams } from "react-router-dom";
import homeImage from "../../docs/assets/images/homepagePicNoText.png";

const Profile = () => {
  const { userid } = useParams();

  return (
    <div
      className="h-screen flex flex-row justify-center items-center"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
    >
      <h1 className="homeh1"> Profile {userid} Page </h1>
    </div>
  );
};

export default Profile;
