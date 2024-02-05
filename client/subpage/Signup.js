import React, { useState, useRef } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import homeImage from "../../docs/assets/images/homepagePicNoText.png";
// import "../stylesheets/loginstyles.css";

const Signup = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleUserDataChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const clicktoLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(">>> this is signup handleSubmit");
    console.log(">>> userdata that send to signup routes: ", userData);

    try {
        const signupres = await axios.post("/signup/newuser", userData);
        if (signupres) navigate("/about");
        console.log(">>> Response got from axios.post('signup/newuser')", JSON.stringify(signupres));
    } catch (err) {
        console.log(
          ">>> Error in axios.post(/signup/newuser): ",
          err.response?.data || err.message
        );
    }
  };

  return (
    <form
      className="h-screen w-50 flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(${homeImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col items-center justify-center">
        <h3 className="-mt-20 mb-2.5 gap-2 text-priblue font-extrabold text-5xl">
          Welcome to DEYI!
        </h3>
        <div className="w-72 h-2 text-5xl mb-2.5 mt-2.5 rounded-lg bg-priwhite"></div>
      </div>

      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        value={userData.firstName}
        onChange={handleUserDataChange}
        className={"inputBox"}
      />
      {/* <label className="errorLabel">{userError.emailError}</label> */}
      <br />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={userData.lastName}
        onChange={handleUserDataChange}
        className={"inputBox"}
      />
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={userData.email}
        onChange={handleUserDataChange}
        className={"inputBox"}
      />
      {/* <label className="errorLabel">{userError.emailError}</label> */}
      <br />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={userData.password}
        onChange={handleUserDataChange}
        className={"inputBox"}
      />
      {/* <label className="errorLabel">{userError.passwordError}</label> */}

      <div className="flex items-center m-2">
        <button
          type="button"
          className={"submitBtnBlue"}
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </div>

      <div className="mt-2 mb-4 text-priblue text-sm items-center">
        Already Have Account?
        <span className="text-priwhite cursor-pointer" onClick={clicktoLogin}>
          Click Here!
        </span>
      </div>
    </form>
  );
};

export default Signup;
