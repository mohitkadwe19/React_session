import React, { useState } from "react";
import "./App.css";
import { useContext } from "react";
import { MyContext } from "./App";
import { useNavigate } from "react-router";
import axios from "axios";

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

 async function handleLogin() {
  try{
    const data = {
      email: username,
      password: password,
    }
    const response = await axios.post("http://localhost:3000/login", data);
  
    // save the token in local storage
    localStorage.setItem("token", response.data.token);

    if(response.status === 200){
      navigate("/");
    }
  }
  catch (error) {
    console.log(error);
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
