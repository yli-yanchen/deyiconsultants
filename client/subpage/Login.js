import React, { useState, useRef } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import "../stylesheets/loginstyles.css";

const Login = () => {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const [res, setRes] = useState(null);
  const [err, setErr] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("log in clicked!");
  };

  const clicktoSignup = (e) => {
    e.preventDefault();
    // console.log("click me to sign up!");
    navigate("/signup");
  }


  return (
    <form className="SignupContainer">
      <div>
        <h3 className="SignupTitle"> Welcome Back! </h3>
        <div className="underline"></div>
        <br />
      </div>

      <input
        type="email"
        placeholder="email"
        ref={emailRef}
        className={"inputBox"}
      />
      {/* <label className="errorLabel">{userError.emailError}</label> */}
      <br />
      <input
        type="password"
        placeholder="password"
        ref={passwordRef}
        className={"inputBox"}
      />
      {/* <label className="errorLabel">{userError.passwordError}</label> */}

      <div className="forgot-password">
        No Account? <span onClick={clicktoSignup}>Click Here!</span>
      </div>

      <div className="signup-submit-container">
        <button
          type="button"
          className={"submit"}
          onClick={handleSubmit}
        >
          Log In
        </button>
      </div>
    </form>
  );
};

export default Login;
