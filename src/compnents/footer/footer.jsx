import "./footer.css";
import footerlogo from "../../assets/footer_logo.png";
import applelogo from "../../assets/applestore.png";
import playstorelogo from "../../assets/playstore.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons";


function Footer() {
    return (
        <>
        <div className="section">
            <div className="sec-1">
                <img src={footerlogo} alt="" />
                <ul>
                    <li>
                        <img src={applelogo} alt="" />
                    </li>
                    <li>
                        <img src={playstorelogo} alt="" />
                    </li>
                </ul>
                <p>Company #490039-45, Registered with <br />House of compaines.</p>
            </div>
            <div className="sec-2">
                <div className="subscribe-box">
                    <h3>Get Exclusive Deals in your Inbox</h3>
                    <form>
                        <div className="input-group">
                            <input type="email" placeholder="youremail@gmail.com" required />
                            <button type="submit">Subscribe</button>
                        </div>
                    </form>
                </div>
                <p >we want spam, read our emailpolicy</p>
                <ul className="social-icons">
                    <li><FontAwesomeIcon icon={faFacebook} /></li>
                    <li><FontAwesomeIcon icon={faSquareInstagram} /></li>
                    <li><FontAwesomeIcon icon={faTiktok} /></li>
                    <li><FontAwesomeIcon icon={faSnapchat} /></li>
                </ul>
            </div>
            <div className="sec-3">
                <ul>
                    <h4>Legal Pages </h4>
                    <li>Terms and Condition <hr width="120px" color="black" /></li>
                    <li>Privacy <hr width="40px" color="black" /></li>
                    <li>Cookies <hr width="50px" color="black" /></li>
                    <li>Modern Slavery Statement <hr width="150px" color="black" /></li>
                </ul>
                <ol>
                    <h4>Important Links </h4>
                    <li>Get help <hr width="50px" color="black" /></li>
                    <li>Add your restaurant <hr width="110px" color="black" /></li>
                    <li>Sign up to deliver <hr width="100px" color="black" /></li>
                    <li>Create a business account <hr width="150px" color="black" /></li>
                </ol>
            </div>
        </div>    
            <footer>
                <label htmlFor="footer">Order.uk Copyright 2024, All Rights Reserved</label>
                <ul>
                    <li>Privacy Policy</li>
                    <li>Terms</li>
                    <li>Pricing</li>
                    <li>Do not sell my personal information</li>
                </ul>
            </footer>
        </>
    );
}

{/* <p>© 2023 Delivery Website</p> */}
export default Footer;