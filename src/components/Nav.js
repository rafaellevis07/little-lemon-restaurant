import logo from "../assets/nav-logo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Nav Logo" />
      </Link>
      <ul className="nav-bar">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <a
          href={require("../assets/menu.webp")}
          target="_blank"
          rel="noreferrer"
        >
          MENU
        </a>
        <Link to="/reservations">RESERVATIONS</Link>
        <Link to="/orders">ORDER ONLINE</Link>
        <Link to="/login">LOGIN</Link>
      </ul>
    </nav>
  );
};

export default Nav;
