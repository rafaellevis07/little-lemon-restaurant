import footerLogo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer>
      <li>
        <img src={footerLogo} alt="Little Lemon Footer Logo" />
      </li>
      <h1>Navigation</h1>
      <ul>
        {" "}
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/about">ABOUT</a>
        </li>
        <li>
          <a href="/menu">MENU</a>
        </li>
        <li>
          <a href="/reservations">RESERVATIONS</a>
        </li>
        <li>
          <a href="/order">ORDER ONLINE</a>
        </li>
        <li>
          <a href="/login">LOGIN</a>
        </li>
      </ul>
      <h1>Contact</h1>
      <h2>2395 Maldova Way, Chicago IL</h2>
      <h2>(629)243-6827</h2>
      <h2>info@littlelemon.com</h2>
      <h1>Connect</h1>
      <ul>
        <li>
          <a href="facebook.com">Facebook</a>
        </li>
        <li>
          <a href="instagram.com">Instagram</a>
        </li>
        <li>
          <h2>Join us</h2>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
