import { NavLink } from "react-router";
import { useContext } from "react";
import { MyContext } from "../main";

const Navbar = () => {

  // let's get username from mycontext

  const {username, email} = useContext(MyContext);


  return (
    <nav className="navbar">
        <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            <li>username : {username}</li>
            <li>email : {email}</li>
        </ul>
    </nav>
  )
}

export default Navbar