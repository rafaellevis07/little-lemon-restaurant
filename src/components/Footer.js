import footerLogo from "../assets/footer-logo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <menu>
        <li className="img-footer">
          <img src={footerLogo} alt="Little Lemon Footer Logo" />
        </li>
        <li className="contact">
          <h1 className="footer-header">Navigation</h1>
          <ul className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <a
              href={require("../assets/menu.webp")}
              target="_blank"
              rel="noreferrer"
            >
              Menu
            </a>
            <Link to="/reservations">Reservation</Link>
            <Link to="/orders">Order Online</Link>
            <Link to="/login">Login</Link>
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Contact</h1>
          <ul className="footer-links">
            <li>2395 Maldove Way,</li>
            <li>Chicago, IL</li>
            <li>(629)-243-6827</li>
            <li>info@littlelemon.com</li>
          </ul>
        </li>
        <li>
          <h1 className="footer-header">Connect</h1>
          <ul className="footer-links">
            <a
              href="https://github.com/rafaellevis07/crypto-app"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="icon-footer" />
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/rafagarcia07/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="icon-footer" />
              LinkedIn
            </a>
          </ul>
        </li>{" "}
      </menu>
    </footer>
  );
};

export default Footer;
