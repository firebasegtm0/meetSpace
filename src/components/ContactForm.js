import React, { useState } from 'react';
import { db, storage } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    hall: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Add a timestamp to your document
      await addDoc(collection(db, "enquiries"), {
        ...formData,
        createdAt: serverTimestamp()
      });
      
      alert('Your enquiry has been submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        hall: '',
        message: ''
      });
    } catch (e) {
      console.error("Error adding document: ", e);
      alert('Error submitting your enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Name" 
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input 
        type="email" 
        placeholder="Email" 
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input 
        type="tel" 
        placeholder="Phone Number" 
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <input 
        type="date" 
        placeholder="Date of Event" 
        name="date"
        value={formData.date}
        onChange={handleChange}
      />
      <select 
        name="hall"
        value={formData.hall}
        onChange={handleChange}
        required
      >
        <option value="">Hall Preference</option>
        <option value="conference">Conference Hall</option>
        <option value="boardroom">Boardroom</option>
      </select>
      <textarea 
        placeholder="Message" 
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button 
        type="submit" 
        className="cta-button primary"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default ContactForm;