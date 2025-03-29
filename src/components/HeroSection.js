import React, { useState } from 'react';
import ContactForm from './ContactForm';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <button className="cta-button primary" onClick={() => setIsModalOpen(true)}>
            Book Now
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
          <ContactForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
