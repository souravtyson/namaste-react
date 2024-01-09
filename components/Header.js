import { useState } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName, setBtnName] = useState("Login")

    const toggleButton = () => {
        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
    }

    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about"> About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <li>
                        <button className="login-button" onClick={toggleButton}>
                            {btnName}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header