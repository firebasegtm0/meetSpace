import React from 'react';
import {
  FaBullseye,
  FaEye,
  FaLaptop,
  FaUtensils,
  FaUsers,
  FaAccessibleIcon,
  FaLightbulb,
  FaUsersCog,
  FaStar,
} from 'react-icons/fa';
import '../App.css';

const MissionVision = () => {
  const coreValues = [
    {
      icon: <FaAccessibleIcon />,
      title: 'Accessibility',
      description: 'Quality spaces for every team, every budget.',
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Upgrading continuously to meet modern business needs.',
    },
    {
      icon: <FaUsersCog />,
      title: 'Customer Focus',
      description: 'Delivering smooth, successful experiences every time.',
    },
    {
      icon: <FaStar />,
      title: 'Quality',
      description: 'Exceptional and curated services all in one place.',
    },
  ];

  const services = [
    {
      icon: <FaLaptop />,
      title: 'Technological Support',
      description:
        'All our halls are equipped with state-of-the-art AV technology, interactive displays, and high-speed WiFi. Our on-site tech team ensures your sessions run smoothly—be it presentations, webinars, or video conferences.',
    },
    {
      icon: <FaUtensils />,
      title: 'Catering Options',
      description:
        'Elevate your meetings with curated food services in collaboration with top restaurants:',
      features: [
        'Breakfast: Local & continental options',
        'Lunch: Light meals or full-course menus',
        'Hi-Tea: Refreshing teas, coffees & snacks',
        'Dinner: Customizable menus for all preferences',
      ],
    },
    {
      icon: <FaUsers />,
      title: 'Custom Layouts',
      description: 'Choose a setup that suits your event style:',
      features: [
        'Theater Style – For larger presentations',
        'Round Table – For discussions & workshops',
        "Need something unique? We'll tailor it for you.",
      ],
    },
  ];

  return (
    <section className="mission-vision-section">
      {/* Mission & Vision */}
      <div className="mission-vision-container">
        <div className="mission-vision-grid">
          <div className="mission-card">
            <div className="card-icon">
              <FaBullseye />
            </div>
            <h3>Our Mission</h3>
            <p>
              To simplify and elevate the meeting experience by offering premium,
              all-inclusive facilities at affordable rates—making corporate events
              hassle-free.
            </p>
          </div>
          <div className="vision-card">
            <div className="card-icon">
              <FaEye />
            </div>
            <h3>Our Vision</h3>
            <p>
              To be Nagpur's go-to destination for corporate meetings, training, conference events, known for
              innovation, service excellence, and seamless execution.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="core-values-section">
        <h2>Core Values</h2>
        <div className="values-grid">
          {coreValues.map((value, idx) => (
            <div className="value-card" key={idx}>
              <div className="value-icon">{value.icon}</div>
              <h4>{value.title}</h4>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Services */}
      <div className="services-detailed-section">
        <h2>Our Services</h2>
        <p className="services-intro">
          At MeetSpace, we offer more than just a venue—we provide a complete
          experience tailored to your meeting and event needs.
        </p>
        <div className="services-detailed-grid">
          {services.map((service, idx) => (
            <div className="service-detailed-card" key={idx}>
              <div className="service-detailed-header">
                <div className="service-detailed-icon">{service.icon}</div>
                <h3>{service.title}</h3>
              </div>
              <p className="service-description">{service.description}</p>
              {service.features && (
                <ul className="service-features">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx}>{feature}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="services-conclusion">
          <p>
            At MeetSpace, we ensure every detail—from setup to service—is handled
            with care. <strong>Let us turn your meetings into memorable experiences.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
