import "./navbar.css";
import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom'  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";

function Navbar() {
    return (
        <>
        <div className="navbar">
            <img src={logo} alt="" />
            <ul>
                <NavLink to="/" className="navlink"><li>Home</li></NavLink>
                <NavLink to="/Browse_Menu" className="navlink"><li>Browse Menu</li></NavLink>
                <NavLink to="/Special_Offer" className="navlink"><li>Special Offer</li></NavLink>
                <NavLink to="/Restaurant" className="navlink"><li>Restaurant</li></NavLink>
                <NavLink to="/Track_Order" className="navlink"><li>Track Order</li></NavLink>
            </ul>
            <button><FontAwesomeIcon className="user-icon" icon={faCircleUser} />Login/Signup</button>
        </div>
        </>
    );
}

export default Navbar;  