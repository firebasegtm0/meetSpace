import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "testimonials"));
        const testimonialsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTestimonials(testimonialsData);
      } catch (error) {
        console.error("Error fetching testimonials: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) return <div>Loading testimonials...</div>;

  return (
    <section className="section testimonials">
      <h2>Testimonials</h2>
      {testimonials.map(testimonial => (
        <div className="testimonial" key={testimonial.id}>
          <p>"{testimonial.text}" – {testimonial.clientName}</p>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;