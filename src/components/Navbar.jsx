import { NavLink } from "react-router";
import { useContext } from "react";
import { MyContext } from "../App";

const Navbar = () => {

  // let's get username from mycontext

  const {myData, setData, user} = useContext(MyContext);


  function handleEmailChange(e){
    const email = e.target.value;
    console.log(email);
    setData({
      ...myData,
      email:email
    })
  }
  return (
    <nav className="navbar">
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
            <li><NavLink to="/login">login</NavLink></li>
            <li><NavLink to="/register">register</NavLink></li>
            <li><NavLink to="/tictactoe">TicTacToe</NavLink></li>
            <li>username : {user.username}</li>
            <li>
              <input name='email' type="email" placeholder="email" onChange={handleEmailChange} />
            </li>
        </ul>
    </nav>
  )
}

export default Navbar