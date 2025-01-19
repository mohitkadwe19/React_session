import React from "react";
import "./App.css";    
import { useContext } from "react";
import { MyContext } from "./App";
import { useNavigate } from "react-router";

const Register = () => {

    const navigate = useNavigate();
    const { user, setUser } = useContext(MyContext);

    function handleUsernameChange(e) {
        const username = e.target.value;
        setUser({
            ...user,
            username: username,
        });
    }


    function handlePasswordChange(e) {
        const password = e.target.value;
        setUser({
            ...user,
            password: password,
        });
    }

    function handleRegister() {
        if(user.username && user.password) {
            console.log(user);
            navigate('/login');
        }
    }


  return (
    <div>
        <h3>Register</h3>
      <form className="register">
        <label>Username</label> <br />
        <input type="text" name="username" onChange={handleUsernameChange} />
        <br />
        <label>Password</label> <br />
        <input type="password" name="password" onChange={handlePasswordChange} />
        <br />
        <button type="button" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
};

export default Register;
