import footerLogo from "../assets/footer-logo.png";
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
            <Link to="/menu">Menu</Link>
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
              href="https://www.facebook.com/thelittlelemonshop/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/littlelemonmoon/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/watch?v=3Li-FfypZYE"
              target="_blank"
              rel="noreferrer"
            >
              Join us!
            </a>
          </ul>
        </li>{" "}
      </menu>
    </footer>
  );
};

export default Footer;
