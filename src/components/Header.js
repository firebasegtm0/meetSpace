// Header.js
import React from "react";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import logo from "../assets/Image/MeetSpaces.png"; 
import "../App.css";

const Header = ({ onGetInTouchClick }) => (
  <header className="main-header">
    <div className="header-content">
      
      <nav className="main-nav">
        {/* <a href="#locations">Nagpur</a> */}

        {/* <a href="#solutions">Solutions</a> */}
        {/* <a href="#referral">Member Referral</a> */}
        {/* <a href="#blogs">Blogs</a> */}

        <span className="phone">
          <PiWhatsappLogoDuotone className="phone-icon" />
          +91-86006 89189
        </span>

      </nav>
      <div className="logo-container">
        <img src={logo} alt="MeetSpace Logo" className="logo-image" />
        {/* <span className="logo-text">MeetSpace</span> */}
      </div>
      <button className="get-in-touch" onClick={onGetInTouchClick}>
        Get In Touch
      </button>
    </div>
  </header>
);

export default Header;
