import React, { useState, useRef } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import "../stylesheets/loginstyles.css";

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
    <form className="SignupContainer">
      <div>
        <h3 className="SignupTitle"> Welcome to DEYI! </h3>
        <div className="underline"></div>
        <br />
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

      <div className="forgot-password">
        Already Have Account? <span onClick={clicktoLogin}>Click Here!</span>
      </div>

      <div className="signup-submit-container">
        <button type="button" className={"submit"} onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default Signup;
