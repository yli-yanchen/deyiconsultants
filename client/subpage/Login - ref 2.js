import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../stylesheets/loginstyles.css";

const Login = () => {
    const [correctCredential, setCorrectCredential] = useState(true);
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = () => {

    }

    return (
      <div className="SignupContainer">
        <h3 className="SignupTitle">Welcome Back!</h3>
        <form onSubmit={handleSubmit}>
          <div >
            Email
            <input
              name="Email"
              type="text"
              value={emailRef.current}
              className="inputBox"
            />
          </div>
          <div>
            Password
            <input
              name="Password"
              type="password"
              value={passwordRef.current}
              className="inputBox"
            />
          </div>
        </form>
      </div>
    );
}

export default Login;