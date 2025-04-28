// HeroSection.js
import React from 'react';

const HeroSection = ({ onBookNowClick }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>The Perfect Venue for Your Meetings and Events</h1>
        <p>
          Welcome to Meet-Space, your premium destination for professional gatherings in the heart of Nagpur. 
          Whether you're hosting a corporate conference, virtual meeting, or training session, 
          our state-of-the-art halls are designed to meet all your requirements.
        </p>
        <div className="hero-buttons">
          <button className="cta-button" onClick={() => alert('Coming Soon')}>
            Explore Our Spaces
          </button>
          <button className="cta-button primary" onClick={onBookNowClick}>
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
