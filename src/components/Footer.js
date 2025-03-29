import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/services">Services</a>
        <a href="/gallery">Gallery</a>
        <a href="/pricing">Pricing</a>
        <a href="/contact">Contact Us</a>
      </div>
      <div className="social-icons">
        {/* Add social media icons here */}
      </div>
      <p>Copyright © {new Date().getFullYear()} Meet-Space</p>
    </footer>
  );
};

export default Footer;