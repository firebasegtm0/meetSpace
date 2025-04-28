import React, { useRef } from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Facilities from './components/Facilities';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ServiceIcons from './components/ServiceIcons';


import {getDatabase, ref, set } from 'firebase/database'
import {app} from './firebase'

const db = getDatabase(app);


const App = () => {

  const contactFormRef = useRef(null);

  const scrollToContactForm = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="meet-space-container">
       <HeroSection onBookNowClick={scrollToContactForm} />
      
      <AboutUs />
      <Facilities />
      <Gallery />
      <Pricing />
      <Services />
      <ServiceIcons />
      <ContactUs contactFormRef={contactFormRef} />
      {/* <Testimonials /> */}
      <Footer />

     
    </div>
  );
};

export default App;



