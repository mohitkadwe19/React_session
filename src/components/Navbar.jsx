import { NavLink, useNavigate } from "react-router";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../App";
import axios from "axios";

const Navbar = () => {
  // let's get username from mycontext

  const { myData, setData, user, setUser } = useContext(MyContext);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const navigate = useNavigate();

  function handleEmailChange(e) {
    const email = e.target.value;
    console.log(email);
    setData({
      ...myData,
      email: email,
    });
  }

  const token = localStorage.getItem("token");

  async function getUser() {
    try{
      const res = await axios.get("http://localhost:3000/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("res.data.user", res.data.user);

      setUser({
        ...user,
        username: res.data.user.name,
        email: res.data.user.email,
      });
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // get token from local storage
    console.log('token', token);
    if (token) {
      getUser();
      setUserLoggedIn(true);
    }
  }, [token]);

  function handleLogout() {
    // remove token from local storage
    localStorage.removeItem("token");
    navigate("/login");
    setUserLoggedIn(false);
  }
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contact">contact</NavLink>
        </li>
        <li>
          <NavLink to="/about">about</NavLink>
        </li>
        {!userLoggedIn ? (
          <>
            <li>
              <NavLink to="/login">login</NavLink>
            </li>
            <li>
              <NavLink to="/register">register</NavLink>
            </li>
          </>
        ) : (

          <li>
            <NavLink to="#" onClick={handleLogout}>logout</NavLink>
          </li>
        )
      }
        <li>
          <NavLink to="/tictactoe">TicTacToe</NavLink>
        </li>
        <li>username : {user.username}</li>
        <li>
          <input
            name="email"
            type="email"
            placeholder="email"
            onChange={handleEmailChange}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
