import React from 'react';

const AboutUs = () => {
  return (
    <section className="section about-us">
      <h2>About Us</h2>
      <p>
        At Meet-Space, we understand the importance of a professional environment 
        for successful meetings and events. Our two versatile halls are designed 
        to cater to your unique needs:
      </p>
      <div className="hall-details">
        <div className="hall">
          <h3>The Boardroom</h3>
          <p>Accommodates up to 8 people, perfect for Board meetings, virtual meetings, executive discussions, and small group trainings.</p>
        </div>
        <div className="hall">
          <h3>The Conference Hall</h3>
          <p>Ideal for larger gatherings, meetings, corporate conferences, or training programs.</p>
        </div>
      </div>
      <p>We are dedicated to providing a seamless experience with modern amenities and a prime location in Nagpur.</p>
    </section>
  );
};

export default AboutUs;
