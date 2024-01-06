import React, {useState} from "react";
import { Link, redirect } from "react-router-dom";
import "../stylesheets/loginstyles.css";


const Login = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [firstNameError, setFirstNameError] = useState(null);
    const [lastNameError, setLastNameError] = useState(null);
    const [action, setAction] = useState("sign up");
    

    const logInClick = () => {

    };

    const creatUserClick = (e) => {
        e.preventDefault();
        if ("" === firstName) {
            setFirstNameError("Required");
        }
        if (!lastName) {
            setLastNameError("Required");
        }
        if ("" == email) {
            setEmailError("Please Enter Your Email");
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please Enter a Valid Email Address");
        }
        if ("" == password) {
            setPasswordError("Please Enter a Password");
        }
        if (password.length < 7) {
            setPasswordError("Please Enter a Password with Length Larger Than 7")
        }

        const user = {
            firstName,
            lastName,
            email,
            password,
        };

        if (firstName && lastName && email && password) fetchregister(user);

        async function fetchregister(data) {
            try {
                const resp = await fetch("/login/register", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                });

                const result = await resp.json();
                console.log("Success: ", result);
            }
            catch(error) {
                console.log("fetchregister Error: ", error);
            }
        }
    }

    const signupcontinue = (action, e) => {
        if (action === "sign up") creatUserClick(e);
        else logInClick(e);
    };

    return (
      <div className="SignupContainer">
        <div className="SignupTitle">
          {" "}
          {action === "log in" ? "Welcome Back!" : "Welcome to DEYI!"}
        </div>
        <div className="underline"></div>
        <br />
        <div className="signupInput">
          {action === "log in" ? (
            <div />
          ) : (
            <div>
              {" "}
              <input
                value={firstName}
                placeholder="First Name"
                onChange={(ev) => setFirstName(ev.target.value)}
                className={"inputBox"}
              />
              <lable className="errorLabel">{firstNameError}</lable>
              <br />
              <input
                value={lastName}
                placeholder="Last Name"
                onChange={(ev) => setLastName(ev.target.value)}
                className={"inputBox"}
              />
              <lable className="errorLabel">{lastNameError}</lable>
              <br />
            </div>
          )}
        </div>

        <div>
          <input
            value={email}
            placeholder="Email"
            onChange={(ev) => setEmail(ev.target.value)}
            className={"inputBox"}
          />
          <lable className="errorLabel">{emailError}</lable>
          <br />
          <div></div>
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(ev) => setPassword(ev.target.value)}
            className={"inputBox"}
          />
          <lable className="errorLabel">{passwordError}</lable>
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

        <button
          type="button"
          className="continuebtn"
          onClick={(e) => {
            signupcontinue(action, e);
          }}
        >
          Continue
        </button>
      </div>
    );
    };

    export default Login;
