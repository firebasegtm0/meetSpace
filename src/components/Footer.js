import React from 'react';

const Footer = () => {
  
  const handleScroll = (sectionId) => (e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className="footer-links">
        <a href="#home" onClick={handleScroll('home-section')}>Home</a>
        <a href="#about" onClick={handleScroll('about-section')}>About Us</a>
        <a href="#services" onClick={handleScroll('services-section')}>Services</a>
        <a href="#gallery" onClick={handleScroll('gallery-section')}>Gallery</a>
        {/* <a href="#pricing" onClick={handleScroll('pricing-section')}>Pricing</a> */}
        <a href="#contact" onClick={handleScroll('contact-section')}>Contact Us</a>
        <a href="#contact" onClick={handleScroll('contact-section')}>Blogs</a>
      </div>
      <div className="social-icons">
        {/* Add social media icons here */}
      </div>
      <p>Copyright © {new Date().getFullYear()} Meet-Space</p>
    </footer>
  );
};

export default Footer;
