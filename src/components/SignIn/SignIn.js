import { useState, useContext } from "react";
import "./SignIn.css";
import { Context as AuthContext } from "../../context/authContext";
import { useHistory } from "react-router-dom";

export function SignIn() {
  const [userDetails, setUserDetails] = useState({
    username: "",
    pwd: "",
  });

  const { updateUserName, updateLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  const handleInput = (event) => {
    //   console.log([event.name]:event.target.value);
    setUserDetails({
      ...userDetails,
      [event.target.name]: event.target.value,
    });
  };

  const loginUser = () => {
    var user = JSON.parse(localStorage.getItem("userInfo"));
    if (
      user.username === userDetails.username &&
      user.pwd === userDetails.pwd
    ) {
      updateUserName(user.username);
      updateLoggedIn(true);
      history.push("/dashboard");
    } else {
      alert("user login failed");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Login</h1>
        <hr></hr>

        <label for="username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          id="username"
          autoComplete="off"
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
          id="psw"
          onChange={handleInput}
          required
        ></input>

        <hr />

        <button onClick={loginUser} className="registerbtn">
          Login
        </button>
      </div>
    </>
  );
}

export default SignIn;
