import React from 'react';

const HeroSection = ({ onBookNowClick }) => {
  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          min-height: 550px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
        }

        .hero-bg {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image:
            linear-gradient(135deg, rgba(49,47,129,0.56), rgba(56,189,248,0.18)),
            url('Logo.png');
          background-size: cover;
          background-position: center;
          filter: blur(7px) brightness(0.8);
          z-index: 0;
          transform: scale(1.04);
          transition: transform 0.6s ease;
        }

        /* Optional: comment out to disable background scale on hover */
        /* .hero-bg:hover {
          transform: scale(1.1);
        } */

        .hero-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(0, 0, 0, 0.25);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 700px;
          margin: 0 auto;
          text-align: center;

          background: rgba(49,47,129,0.14);
          border-radius: 18px;
          padding: 36px 24px;
          box-shadow: 0 8px 32px rgba(49,47,129,0.08);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }

        .hero-content h1 {
          font-size: 3em;
          font-weight: 800;
          margin-bottom: 24px;
          color: #fff;
          letter-spacing: 0.02em;
          text-shadow: 0 10px 40px rgba(49,47,129,0.19);
        }

        .hero-content p {
          font-size: 1.3em;
          margin-bottom: 44px;
          color: #f1f5f9;
          opacity: 0.97;
          letter-spacing: 0.01em;
          line-height: 1.6;
          text-shadow: 0 4px 24px rgba(49,47,129,0.11);
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button {
          background: linear-gradient(90deg, #6366f1 0%, #38bdf8 100%);
          box-shadow: 0 4px 24px rgba(56,189,248,0.2);
          color: #fff;
          border: none;
          border-radius: 5px;
          padding: 14px 32px;
          font-size: 1.1em;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s, box-shadow 0.3s;
          min-width: 140px;
        }

        .cta-button:hover,
        .cta-button:focus {
          background: linear-gradient(90deg, #4338ca 0%, #0ea5e9 100%);
          transform: scale(1.08);
          box-shadow: 0 8px 32px rgba(56,189,248,0.28);
          outline: none;
        }

        /* Responsive */
        @media (max-width: 600px) {
          .hero-content h1 {
            font-size: 2em;
          }
          .hero-content p {
            font-size: 1.1em;
          }
          .cta-button {
            width: 100%;
            min-width: unset;
          }
          .hero-buttons {
            flex-direction: column;
            gap: 12px; /* add vertical spacing */
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>The Perfect Venue for Your Meetings and Events</h1>
          <p>
            Welcome to Meet-Space, your premium destination for professional gatherings in the heart of Nagpur.
            Whether you're hosting a corporate conference, virtual meeting, or training session,
            our state-of-the-art halls are designed to meet all your requirements.
          </p>
          <div className="hero-buttons">
            {/* <button
              className="cta-button"
              onClick={() => alert('Coming Soon')}
              aria-label="Explore Our Spaces"
            >
              Explore Our Spaces
            </button> */}
            <button
              className="cta-button"
              onClick={onBookNowClick}
              aria-label="Book Now"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
