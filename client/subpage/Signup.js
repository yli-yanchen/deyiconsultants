import React, {useState} from "react";
import { Link } from "react-router-dom";


const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [firstNameError, setFirstNameError] = useState(null);
    const [lastNameError, setLastNameError] = useState(null);
  
    const logInClick = () => {

    };

    const creatUserClick = () => {
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

        fetch("/signup/newUser", {
          method: "POST",
          headers: {
            "Content-Type": "Application/JSON",
          },
          body: JSON.stringify(user),
        })
          .then((resp) => resp.json())
          .then((data) => {
            console.log(data);
          })
          .catch((error) =>
            console.log("CreateUser Fetch /signup: Error: ", error)
          );
    }


    return (
      <div className="SignupContainer">
        <div className="SignupTitle"> Welcome Back! </div>
        <br />
        <div className="SignupInput">
          <input
            value={firstName}
            placeholder="First Name"
            onChange={(ev) => setFirstName(ev.target.value)}
            className={"inputBox"}
          />
          <br />
          <div className="SignupInput"></div>
          <input
            value={lastName}
            placeholder="Last Name"
            onChange={(ev) => setLastName(ev.target.value)}
            className={"inputBox"}
          />
        </div>
        <div className="SignupInput">
          <input
            value={email}
            placeholder="Email"
            onChange={(ev) => setEmail(ev.target.value)}
            className={"inputBox"}
          />
          <lable className="errorLabel">{emailError}</lable>
          <br />
          <div className="SignupInput"></div>
          <input
            value={password}
            placeholder="Password"
            onChange={(ev) => setPassword(ev.target.value)}
            className={"inputBox"}
          />
          <lable className="errorLabel">{passwordError}</lable>
        </div>
        <br />

        <button
          type="button"
          className="SignupInputButton"
          onClick={creatUserClick}
        >
          Sign Up
        </button>

        <button
          type="button"
          className="SignupInputButton"
          onClick={logInClick}
        >
          Log In
        </button>

        {/* <div className="SignupInput">
            <input
            className={"SignupInputButton"}
            type="button"
            onClick={creatUserClick}
            value={"Sign Up"}
            />
        </div>
        <br />
        <div className="SignupInput">
            <input
            className={"SignupInputButton"}
            type="button"
            onClick={onButtonClick}
            value={"Log In"}
            />
        </div> */}
      </div>
    );
    };

    export default Signup;
