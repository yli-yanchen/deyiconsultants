import React, { useState, useRef } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

import homeImage from "../../docs/assets/images/homepagePicNoText.png";

const Login = () => {
  const navigate = useNavigate();
  const clientID = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;

  const emailRef = useRef();
  const passwordRef = useRef();

  const [res, setRes] = useState(null);
  const [err, setErr] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(">>> current email from user input: ", emailRef.current.value);
    const loginres = await axios.post("/login", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    if (loginres) {
      navigate("/about");
    } else {
      console.log("Incorrect email or password!");
    }
  };

  const clicktoSignup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const forgotPassword = (e) => {
    e.preventDefault();
    console.log("I forgot the password");
  }

  const onSuccess = async (res) => {
    console.log("Login Success! Response: ", res);
  };

  const onFailure = (res) => {
    console.log("Login Fails. res: ", res);
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
          Welcome Back!
        </h3>
        <div className="w-72 h-2 text-5xl mb-3 mt-3 rounded-lg bg-priwhite"></div>
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

      <div className="flex items-center m-2">
        <button
          type="button"
          className={"submitBtnBlue"}
          onClick={handleSubmit}
        >
          Log In
        </button>
      </div>

      <div className="mt-2 mb-4 text-priblue text-sm items-center">
        Forgot Password?
        <span
          className="text-priwhite cursor-pointer indent-2"
          onClick={forgotPassword}
        >
          Click Here!
        </span>
      </div>

      <div id="goolgeSignin">
        <GoogleLogin
          clientID={clientID}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          isSigned={true}
        />
      </div>

      <div className="w-72 h-0.5 text-5xl mb-2 mt-6 rounded-lg bg-priwhite"></div>
      <div className="flex items-center m-2">
        <button
          type="button"
          className={"submitBtnWhite"}
          onClick={clicktoSignup}
        >
          Create New Account
        </button>
      </div>
    </form>
  );
};

export default Login;
