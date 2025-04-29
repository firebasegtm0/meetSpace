import React from "react";
import { FaPhone } from "react-icons/fa";
import "../App.css";

const Header = ({ onGetInTouchClick }) => (
  <header className="main-header">
    <div className="header-content">
      <div className="logo">MeetSpace</div>
      <nav className="main-nav">
        <a href="#locations">Nagpur</a>
        {/* <a href="#solutions">Solutions</a>
        <a href="#referral">Member Referral</a>
        <a href="#blogs">Blogs</a> */}
        <span className="phone">
          <FaPhone style={{ marginRight: 6 }} />
          +91-987-654-3210
        </span>
      </nav>
      <button className="get-in-touch" onClick={onGetInTouchClick}>
        Get In Touch
      </button>
    </div>
  </header>
);

export default Header;
