import { useState, useReducer } from "react";
import "./SignUp.css";

export function SignUp() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    pwd: "",
    repwd: "",
  });

  const handleInput = (event) => {
    //   console.log([event.name]:event.target.value);
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

  const registerUser = () => {
    //localstorage save
    console.log("userDetails:", userDetails);
    localStorage.setItem("userInfo", JSON.stringify(userDetails));
    setUserDetails({
      username: "",
      email: "",
      pwd: "",
      repwd: "",
    });
  };

  return (
    <>
      <div className="container">
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr></hr>

        <label for="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          autoComplete="off"
          value={userDetails?.username}
          onChange={handleInput}
          required
        ></input>

        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={userDetails?.email}
          onChange={handleInput}
          required
        ></input>

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="pwd"
          value={userDetails?.pwd}
          onChange={handleInput}
          required
        ></input>

        <label for="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="repwd"
          value={userDetails?.repwd}
          required
          onChange={handleInput}
        ></input>
        <hr />
        <p>
          By creating an account you agree to our{" "}
          <a href="#">Terms & Privacy</a>.
        </p>

        <button onClick={registerUser} className="registerbtn">
          Register
        </button>
      </div>

      <div className="container signin">
        <p>
          Already have an account? <a href="#">Sign in</a>.
        </p>
      </div>
    </>
  );
}

export default SignUp;
