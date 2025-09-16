import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import officeImage from '../assets/Image/Image2.jpg';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    hall: '',
    message: '',
    numberOfPeople: '',
    mealPreference: '',
    meetingStyle: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'enquiries'), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      alert('Your enquiry has been submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        hall: '',
        message: '',
        numberOfPeople: '',
        mealPreference: '',
        meetingStyle: '',
      });
    } catch (e) {
      console.error('Error adding document: ', e);
      alert('Error submitting your enquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="contact-form-container">
      <div className="form-image">
        <img src={officeImage} alt="Office Space" />
      </div>
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

        {/* New Dropdowns */}

        <select
          name="numberOfPeople"
          value={formData.numberOfPeople}
          onChange={handleChange}
          required
        >
          <option value="">Number of People / Attendees</option>
          {[...Array(55)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <select
          name="mealPreference"
          value={formData.mealPreference}
          onChange={handleChange}
          required
        >
          <option value="">Meal Preference</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="hi-tea">Hi Tea</option>
          <option value="dinner">Dinner</option>
        </select>

        <select
          name="meetingStyle"
          value={formData.meetingStyle}
          onChange={handleChange}
          required
        >
          <option value="">Meeting Style</option>
          <option value="round-table">Round Table</option>
          <option value="theater-style">Theater Style</option>
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
    </div>
  );
};

export default ContactForm;
