import React from 'react';
import img1 from '../assets/Image/Image4.jpg'; 
import img2 from '../assets/Image/Image6.jpg';
import img3 from '../assets/Image/Image7.jpg';
import img4 from '../assets/Image/Image8.jpg';

const features = [
  {
    image: img1,
    title: "Purpose-driven Workspaces",
    description:
      "Spaces shape your thoughts and creativity. That’s why, our office spaces are equipped with latest technology and productivity boosting ambiance, for your best performance, every day.",
  },
  {
    image: img2,
    title: "Professional Facility Management",
    description:
      "From routine administrative tasks to employee engagement activities, our team of experts is dedicated to providing a seamless facility management, so you focus only on your business.",
  },
  {
    image: img3,
    title: "Exclusive Community Perks",
    description:
      "As our member, enjoy access to multiple learning and networking opportunities. Get exclusive discounts on best services like Uber, Zostel, Lemon Tree and many more.",
  },
  {
    image: img4,
    title: "Impeccable Customer Experience",
    description:
      "Experience top-tier support with personalized service, ensuring your workspace needs are seamlessly met.",
  },
];

const Facilities = () => (
  <section className="section features-section">
    <div className="features-grid">
      {features.map((feature, idx) => (
        <div className="feature-card" key={idx}>
          <img src={feature.image} alt={feature.title} className="feature-card-img" />
          <div className="feature-card-content">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Facilities;
