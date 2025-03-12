import React from 'react';
import './App.css'; // Create a MeetSpace.css file for styling

const MeetSpace = () => {
  return (
    <div className="meet-space-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>The Perfect Venue for Your Meetings and Events</h1>
          <p>
            Welcome to Meet-Space, your premium destination for professional gatherings in the heart of Nagpur. Whether you’re hosting a corporate conference, virtual meeting, or training session, our state-of-the-art halls are designed to meet all your requirements.
          </p>
          <div className="hero-buttons">
            <button className="cta-button">Explore Our Spaces</button>
            <button className="cta-button primary">Book Now</button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section about-us">
        <h2>About Us</h2>
        <p>
          At Meet-Space, we understand the importance of a professional environment for successful meetings and events. Our two versatile halls are designed to cater to your unique needs:
        </p>
        <div className="hall-details">
          <div className="hall">
            <h3>The Boardroom</h3>
            <p>Accommodates up to 8 people, perfect for virtual meetings, executive discussions, and small group trainings.</p>
          </div>
          <div className="hall">
            <h3>The Conference Hall</h3>
            <p>Seats up to 40 people, ideal for larger gatherings, corporate conferences, or training programs.</p>
          </div>
        </div>
        <p>We are dedicated to providing a seamless experience with modern amenities and a prime location in Nagpur.</p>
      </section>

      {/* Our Facilities Section */}
      <section className="section facilities">
        <h2>Our Facilities</h2>
        <ul>
          <li>Fully Air-Conditioned Halls</li>
          <li>High-Speed Wi-Fi & Audio-Visual Equipment</li>
          <li>Professional Seating Arrangements</li>
          <li>Dedicated Support Staff</li>
          <li>Ample Parking Space</li>
          <li>Tea, Coffee, and Catering Options</li>
          <li>Convenient Central Location</li>
        </ul>
      </section>

      {/* Our Services Section */}
      <section className="section services">
        <h2>Our Services</h2>
        <ul>
          <li>Corporate Conferences</li>
          <li>Virtual Meetings (VC)</li>
          <li>Professional Training Programs</li>
          <li>Workshops and Seminars</li>
          <li>Client Presentations</li>
          <li>Team-Building Sessions</li>
        </ul>
      </section>

      {/* Gallery Section */}
      <section className="section gallery">
        <h2>Gallery</h2>
        <div className="gallery-images">
          <div className="gallery-item">
            <img src="conference-hall.jpg" alt="Spacious Conference Hall" />
            <p>Spacious Conference Hall - Perfect for Team Meetings</p>
          </div>
          <div className="gallery-item">
            <img src="boardroom.jpg" alt="The Boardroom" />
            <p>The Boardroom - Designed for Productive Discussions</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section pricing">
        <h2>Pricing</h2>
        <p>Transparent pricing for all your needs:</p>
        <div className="pricing-details">
          <p>Conference Hall (40 pax): ₹[Price]</p>
          <p>Boardroom (8 pax): ₹[Price]</p>
          <p>Hourly rates are also available on request.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <p>
            "Meet-Space is the perfect venue for our corporate training sessions. The facilities and support were exceptional!" – [Client Name]
          </p>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="section contact-us">
        <h2>Contact Us</h2>
        <p>Have a question or want to book your space? Reach out to us!</p>
        <p>Phone: +91 [Phone Number]</p>
        <p>Email: info@meet-space.in</p>
        <p>Address: RL Corporate Space, Block No १०१, Rpts Road, Nagpur</p>

        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone Number" />
          <input type="date" placeholder="Date of Event" />
          <select>
            <option value="">Hall Preference</option>
            <option value="conference">Conference Hall</option>
            <option value="boardroom">Boardroom</option>
          </select>
          <textarea placeholder="Message"></textarea>
          <button type="submit" className="cta-button primary">Submit</button>
        </form>
      </section>

      {/* Footer Section */}
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
        <p>Copyright © 2024 Meet-Space</p>
      </footer>
    </div>
  );
};

export default MeetSpace;