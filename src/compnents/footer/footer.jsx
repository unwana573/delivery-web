import "./footer.css";
import logo from "../../assets/logo.png";
import apple from "../../assets/applestore.png";
import google from "../../assets/playstore.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faSnapchat } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">

          {/* Left Section - Logo & Store Buttons */}
          <div className="footer-section">
            <img src={logo} alt="logo" className="footer-logo" />

            <div className="store-buttons">
              <img src={apple} alt="App Store" />
              <img src={google} alt="Play Store" />
            </div>

            <p className="company-text">
              Company # 490039-445, Registered with House of companies.
            </p>
          </div>

          {/* Middle Section - Subscribe Box */}
          <div className="footer-section subscribe-section">
            <h4>Get Exclusive Deals in your Inbox</h4>
            <div className="subscribe-box">
              <input type="email" placeholder="youremail@gmail.com" />
              <button>Subscribe</button>
            </div>
            <p className="email-policy">
              we wont spam, read our <a href="#">email policy</a>
            </p>

            <div className="social-icons">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faTiktok} />
              <FontAwesomeIcon icon={faSnapchat} />
            </div>
          </div>

          {/* Right Section - Links */}
          <div className="footer-section links-section">
            <div>
              <h4>Legal Pages</h4>
              <a href="#">Terms and conditions</a>
              <a href="#">Privacy</a>
              <a href="#">Cookies</a>
              <a href="#">Modern Slavery Statement</a>
            </div>

            <div>
              <h4>Important Links</h4>
              <a href="#">Get help</a>
              <a href="#">Add your restaurant</a>
              <a href="#">Sign up to deliver</a>
              <a href="#">Create a business account</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>Order.uk Copyright 2024, All Rights Reserved.</p>
        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Pricing</a>
          <a href="#">Do not sell or share my personal information</a>
        </div>
      </div>
    </>
  );
}

export default Footer;
