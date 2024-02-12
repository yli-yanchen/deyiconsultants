import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import axios from "../hook/axios";
import useAuth from "../hook/useAuth";
import homeImage from "../../docs/assets/images/homepagePicNoText.png";

const Login = () => {
  const navigate = useNavigate();
  const clientID = process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID;

  const { setAuth } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErr("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();  // prevent reload the page
    console.log(">>> current email from user input: ", emailRef.current.value);

    try {
      const loginres = await axios.post("/login", {
        email: email,
        password: password,
      });
      console.log(">>> this is from loginres: ", loginres?.data);
      
      if (loginres) {
        const accessToken = loginres?.data?.accessTokens;
        const role = loginres?.data?.role;
        const userid = loginres?.data?._id.toString();

        console.log(">>> current accessToken: ", accessToken);
        console.log(">>> current role: ", role);
        console.log(">>> current userid: ", userid);

        setAuth({ email, password, role, accessToken });
        // setUser("");
        // setPassword("");
        console.log(">>> ready to navigate toe profile page")
        navigate(`/basic/${userid}`);
        // navigate(from, { replace: true }); // go back from where you come.
      }
    } catch (err) {
      console.log("error in login hundblesubmit() components");
      /* 
      if (!err.response) {
        setErrorMessage("No Server Response");
      } else if (err.response?.status === 400) {
        setErrorMessage("Missing Email or Password");
      } else if (err.response?.status === 401) {
        setErrorMessage("Unauthorized");
      } else {
        setErrorMessage("Login Failed");
      }
      */
    }
  };

  const clicktoSignup = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  const forgotPassword = (e) => {
    e.preventDefault();
    console.log("I forgot the password");
  };

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
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col items-center justify-center">
        <h3 className="-mt-20 mb-2.5 gap-2 text-priblue font-extrabold text-5xl">
          Welcome Back!
        </h3>
        <div className="w-72 h-2 text-5xl mb-3 mt-3 rounded-lg bg-priwhite"></div>
      </div>

      <input
        type="email"
        id="email"
        placeholder="Email"
        ref={emailRef}
        onChange={(e) => setEmail(e.target.value)}
        className={"inputBox"}
        value={email}
        autoComplete="off"
        required
      />
      {/* <label className="errorLabel">{userError.emailError}</label> */}
      <input
        type="password"
        id="password"
        placeholder="Password"
        className={"inputBox"}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        required
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
          <a href="/about">Click Here!</a>
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
