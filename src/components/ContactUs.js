import React from 'react';
import ContactForm from './ContactForm';
import '../App.css';

const ContactUs = ({ contactFormRef }) => {
  return (
    <section className="section contact-us" ref={contactFormRef}>
      <ContactForm />
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">Have a question or want to book your space? Reach out to us!</p>
      <p className="contact-info">Phone: <span className="contact-detail">+91 86006-89189</span></p>
      <p className="contact-info">Email: <span className="contact-detail">themeetsspace@gmail.com</span></p>
      <p className="contact-info">Address: <span className="contact-detail">R.L. Corporate Space, Mate Square, Kotwal Nagar, Pratap Nagar, Nagpur, Maharashtra 440022</span></p>
      
    </section>
  );
};

export default ContactUs;
