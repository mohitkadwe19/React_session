import React, { useState } from "react";
import "./App.css";
import { useContext } from "react";
import { MyContext } from "./App";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const { user } = useContext(MyContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleLogin() {
    if (username == user.username && password == user.password) {
      alert("Login Successful");
      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  }

  return (
    <div>
      <h3>Login</h3>
      <form className="register">
        <label>Username</label> <br />
        <input type="text" name="username" onChange={handleUsernameChange} />
        <br />
        <label>Password</label> <br />
        <input
          type="password"
          name="password"
          onChange={handlePasswordChange}
        />
        <br />
        <button type="button" onClick={handleLogin}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
