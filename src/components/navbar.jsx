import { useState } from "react";  
import "./navbar/navbar.css";
import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="navbar">

                <img src={logo} alt="logo" />

                {/* Hamburger Icon for Mobile */}
                <div className="menu-icon" onClick={() => setMenuOpen(true)}>
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <ul className="menu-desktop">
                    <NavLink to="/" className="navlink"><li>Home</li></NavLink>
                    <NavLink to="/Browse_Menu" className="navlink"><li>Browse Menu</li></NavLink>
                    <NavLink to="/Special_Offer" className="navlink"><li>Special Offer</li></NavLink>
                    <NavLink to="/Restaurant" className="navlink"><li>Restaurant</li></NavLink>
                    <NavLink to="/Track_Order" className="navlink"><li>Track Order</li></NavLink>
                </ul>

                <button>
                    <FontAwesomeIcon className="user-icon" icon={faCircleUser} />Login/Signup
                </button>
            </div>

            {/* ✅ Full Screen Mobile Drawer */}
            <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>

                <div className="drawer-header">
                    <img src={logo} alt="logo" />
                    <FontAwesomeIcon 
                        icon={faTimes} 
                        className="close-icon" 
                        onClick={() => setMenuOpen(false)} 
                    />
                </div>

                <ul className="drawer-menu">
                    <NavLink to="/" className="navlink" onClick={() => setMenuOpen(false)}><li>Home</li></NavLink>
                    <NavLink to="/Browse_Menu" className="navlink" onClick={() => setMenuOpen(false)}><li>Browse Menu</li></NavLink>
                    <NavLink to="/Special_Offer" className="navlink" onClick={() => setMenuOpen(false)}><li>Special Offer</li></NavLink>
                    <NavLink to="/Restaurant" className="navlink" onClick={() => setMenuOpen(false)}><li>Restaurant</li></NavLink>
                    <NavLink to="/Track_Order" className="navlink" onClick={() => setMenuOpen(false)}><li>Track Order</li></NavLink>
                </ul>

                <button className="drawer-login">
                    <FontAwesomeIcon className="user-icon" icon={faCircleUser} />Login/Signup
                </button>
            </div>
        </>
    );
}

export default Navbar;
