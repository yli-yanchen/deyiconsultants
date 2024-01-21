import React, {useState} from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import "../stylesheets/loginstyles.css";


const Login = () => {
    const navigate = useNavigate();
    const [action, setAction] = useState("sign up");

    const [userData, setUserData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    })

    const [userError, setUserError] = useState({
      firstNameError: '',
      lastNameError: '',
      emailError: '',
      passwordError: '',
    })

    const handleUserDataChange = (e) => {
      e.preventDefault();
      setUserData({
        ...userData,
        [e.target.name]: e.target.value
      })
    }

    const logincontinue = (e) => {
      e.preventDefault();
    }


    const signupcontinue = (e) => {
      e.preventDefault();
    };



    // const creatUserClick = (e) => {
    //   e.preventDefault();
    //   if (userData.firstName.trim() === "") {
    //     setUserError.firstNameError("Required");
    //   }
    //   if (userData.lastName.trim() === "") {
    //     setLastNameError("Required");
    //   }
    //   if (userData.email.trim() === "") {
    //     setEmailError("Please Enter Your Email");
    //   }
    //   if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userData.email)) {
    //     setUserError.emailError("Please Enter a Valid Email Address");
    //   }
    //   if (userData.password.trim() === "") {
    //     setUserError.passwordError("Please Enter a Password");
    //   }
    //   if (userData.password.length < 7) {
    //     setPasswordError("Please Enter a Password with Length Larger Than 7");
    //   }
    // }

    return (
      <form className="SignupContainer">
        <div className="SignupTitle">
          {" "}
          {action === "log in" ? "Welcome Back!" : "Welcome to DEYI!"}
        </div>
        <div className="underline"></div>
        <br />
        <div className="signupInput">
          {action === "log in" ? (
            <div>
              {" "}
              <input
                name="firstName"
                value={userData.firstName}
                placeholder="First Name"
                onChange={handleUserDataChange}
                className={"inputBox"}
              />
              <lable className="errorLabel">{userError.firstNameError}</lable>
              <br />
              <input
                name="lastName"
                value={userData.lastName}
                placeholder="Last Name"
                onChange={handleUserDataChange}
                className={"inputBox"}
              />
              <lable className="errorLabel">{userError.lastNameError}</lable>
              <br />
            </div>
          ) : (
            <div>
              {" "}
              <input
                name="firstName"
                value={userData.firstName}
                placeholder="First Name"
                onChange={handleUserDataChange}
                className={"inputBox"}
              />
              <lable className="errorLabel">{userError.firstNameError}</lable>
              <br />
              <input
                name="lastName"
                value={userData.lastName}
                placeholder="Last Name"
                onChange={handleUserDataChange}
                className={"inputBox"}
              />
              <lable className="errorLabel">{userError.lastNameError}</lable>
              <br />
              <input
                name="email"
                value={userData.email}
                placeholder="email"
                onChange={handleUserDataChange}
                className={"inputBox"}
              />
              <lable className="errorLabel">{userError.emailError}</lable>
              <br />
              <input
                name="password"
                type="password"
                value={userData.password}
                placeholder="Password"
                onChange={handleUserDataChange}
                className={"inputBox"}
              />
              <lable className="errorLabel">{userError.passwordError}</lable>
            </div>
          )}
        </div>

        {action === "sign up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Forgot Password? <span>Click Here!</span>
          </div>
        )}

        <div className="signup-submit-container">
          <button
            type="button"
            className={action === "log in" ? "submit gray" : "submit"}
            onClick={(e) => {
              setAction("sign up");
            }}
          >
            Sign up
          </button>

          <button
            type="button"
            className={action === "sign up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("log in");
            }}
          >
            Log In
          </button>
        </div>

        {action === "sign up" ? (
          <button
            type="button"
            className="continuebtn"
            handleSubmit={(e) => {
              signupcontinue(e);
            }}
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            className="continuebtn"
            handleSubmit={(e) => {
              logincontinue(e);
            }}
          >
            Continue
          </button>
        )}
      </form>
    );
    };

    export default Login;
