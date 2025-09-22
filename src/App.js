import React, { useRef } from 'react';
import './App.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Facilities from './components/Facilities';
import Services from './components/Services';
import Gallery from './components/Gallery';
// import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ServiceIcons from './components/ServiceIcons';
import MissionVision from './components/MissionVision';

const App = () => {
  const contactFormRef = useRef(null);

  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="meet-space-container">
      <Header onGetInTouchClick={scrollToContactForm} />
      <section id="home-section"><HeroSection onBookNowClick={scrollToContactForm} /></section>
      <section id="about-section"><AboutUs /></section>

      <section id="mission-section"><MissionVision /></section>

      <section id="facilities-section"><Facilities /></section>
      <section id="services-section"><Services /></section>
      <section id="gallery-section"><Gallery /></section>
      <section id="testimonials-section"><Testimonials /></section>
      {/* <section id="pricing-section"><Pricing /></section> */}
      <ServiceIcons />
      
      {/* ContactUs receives ref to enable scrolling */}
      <section id="contact-section" ref={contactFormRef}>
        <ContactUs />
      </section>

      
      
      
      <Footer />
    </div>
  );
};

export default App;

