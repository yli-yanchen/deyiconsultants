import React, {useState} from "react";
import { Link } from "react-router-dom";
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

        if (!firstName) {
            setFirstNameError("required");
            return 
        }
        if (!lastName) {
            setLastNameError("required");
            return 
        }
        if ("" == email) {
            setEmailError("Please Enter Your Email");
            return
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please Enter a Valid Email Address");
            return
        }
        if ("" == password) {
            setPasswordError("Please Enter a Password");
            return
        }
        if (password.length < 7) {
            setPasswordError("Please Enter a Password with Length Larger Than 7")
            return
        }

        const user = {
            lastName,
            firstName,
            email,
            password
        };

        console.log(user);
        fetch("/login/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((resp) => {
            console.log("resp: ", resp);
            return resp.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) =>
            console.log("CreateUser Fetch /signup: Error: ", error)
          );
    }


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
              <br />
              <input
                value={lastName}
                placeholder="Last Name"
                onChange={(ev) => setLastName(ev.target.value)}
                className={"inputBox"}
              />
              <br />
            </div>
          )}
        </div>

        <div className="signupInput">
          <input
            value={email}
            placeholder="Email"
            onChange={(ev) => setEmail(ev.target.value)}
            className={"inputBox"}
          />
          <lable className="errorLabel">{emailError}</lable>
          <br />
          <div className="signupInput"></div>
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
          <Link to={"/login/register"}>
            <button
              type="button"
              className={action === "log in" ? "submit gray" : "submit"}
              onClick={(e) => {
                  creatUserClick(e);
                  setAction("sign up");            
              }}
            >
              Sign up
            </button>
          </Link>

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
      </div>
    );
    };

    export default Login;
