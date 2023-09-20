import logo from "../assets/nav-logo.svg";
import { Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <menu className={`navbar-menu ${props.device}`}>
      {props.device === "mobile" ? (
        ""
      ) : (
        <Link to="/">
          <img src={logo} alt="Little Lemon Logo" className="nav-image" />
        </Link>
      )}
      <Link className="hover-effect" to="/">
        <h1>HOME</h1>
      </Link>
      <Link className="hover-effect" to="/about">
        <h1>ABOUT</h1>
      </Link>
      <Link className="hover-effect" to="/reservations">
        <h1>RESERVATIONS</h1>
      </Link>
      <a
        className="hover-effect"
        href={require("../assets/menu.webp")}
        target="_blank"
        rel="noreferrer"
      >
        <h1>MENU</h1>
      </a>
      <Link className="hover-effect" to="/order">
        <h1>ORDER</h1>
      </Link>
      <a
        className="hover-effect"
        href="https://github.com/rafaellevis07/little-lemon-restaurant"
        target="_blank"
        rel="noreferrer"
      >
        <h1>CODE</h1>
      </a>
    </menu>
  );
};

export default Navigation;
