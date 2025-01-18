import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/contact">contact</NavLink></li>
            <li><NavLink to="/about">about</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar