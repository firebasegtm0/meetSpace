import React from 'react';
import ContactForm from './ContactForm';
import '../App.css';

const ContactUs = ({ contactFormRef }) => {
  return (
    <section className="section contact-us" ref={contactFormRef}>
      <ContactForm />
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">Have a question or want to book your space? Reach out to us!</p>
      <p className="contact-info">Phone: <span className="contact-detail">+91 9876543210</span></p>
      <p className="contact-info">Email: <span className="contact-detail">info@meet-space.in</span></p>
      <p className="contact-info">Address: <span className="contact-detail">RL Corporate Space, Block No १०१, Rpts Road, Nagpur</span></p>
      
    </section>
  );
};

export default ContactUs;
