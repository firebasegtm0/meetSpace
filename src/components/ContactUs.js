import React from 'react';
import ContactForm from './ContactForm';
import '../App.css'; // Importing the CSS file for styling

const ContactUs = () => {
  return (
    <section className="section contact-us">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">Have a question or want to book your space? Reach out to us!</p>
      <p className="contact-info">Phone: <span className="contact-detail">+91 9876543210</span></p>
      <p className="contact-info">Email: <span className="contact-detail">info@meet-space.in</span></p>
      <p className="contact-info">Address: <span className="contact-detail">RL Corporate Space, Block No १०१, Rpts Road, Nagpur</span></p>
      <ContactForm />
    </section>
  );
};

export default ContactUs;
