import React from "react";
import "./App.css";    
import { useContext } from "react";
import { MyContext } from "./App";
import { useNavigate } from "react-router";
import axios from "axios";

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

   async function handleRegister() {
      try{
        const data = {
          name: user.username,
          email: user.email,
          password: user.password,
        }

        const response = await axios.post("http://localhost:3000/signup", data);

        if(response.status === 201){
          navigate("/login");
        }
      }
      catch (error) {
        console.log(error);
      }
    }


    function handleEmail(e) {
        const email = e.target.value;
        setUser({
            ...user,
            email: email,
        });
    }

  return (
    <div>
        <h3>Register</h3>
      <form className="register">
        <label>Username</label> <br />
        <input type="text" name="name" onChange={handleUsernameChange} />
        <br />
        <label>Email</label> 
        <input type="email" name="email" onChange={handleEmail} />
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
