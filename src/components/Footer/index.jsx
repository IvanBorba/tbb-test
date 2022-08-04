import uLabsLogo from "../../assets/images/logo-u-labs.png";
import { InstagramIcon } from "../../assets/icons";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <nav className="footer-navigation-container">
        <button className="footer-navigation-button">contact us</button>
        <hr className="button-division-line" />
        <button className="footer-navigation-button">faq</button>
        <hr className="button-division-line" />
        <button className="footer-navigation-button">site map</button>
        <hr className="button-division-line" />
        <button className="footer-navigation-button">privacy policy</button>
        <hr className="button-division-line" />
        <button className="footer-navigation-button">cookies policy</button>
        <hr className="button-division-line" />
        <button className="footer-navigation-button">legal notice</button>
      </nav>
      <div className="footer-icons-container">
        <img className="u-labs-logo" alt="U-labs logo" src={uLabsLogo} />
        <InstagramIcon />
      </div>
    </footer>
  );
};

export default Footer;
