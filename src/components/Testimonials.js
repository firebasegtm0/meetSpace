import React, { useState, useEffect } from 'react';
import '../App.css'; // Import the CSS file for styling

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const staticTestimonials = [
      {
        id: '1',
        text: 'Awesome meeting place. Well maintained and budget friendly. Food options are great and no compulsion. Audio visual arrangement is excellent.',
        clientName: 'Dr Atul Shringarpure',
        rating: '★★★★★',
        date: 'A month ago'
      },
      {
        id: '2',
        text: 'Recently used this fully furnished hall for a meeting and had a great experience! The place is very well maintained, clean, and spacious. It offers all essential facilities like comfortable seating, good lighting, audio-visual setup, and ample parking. The environment is professional yet welcoming, making it perfect for business meetings, training sessions, or small events. Highly recommend this place for anyone looking for a hassle-free and well-equipped meeting space.',
        clientName: 'Dhiraj Agashe',
        rating: '★★★★★',
        date: 'A week ago'
      },
      {
        id: '3',
        text: 'An exceptional venue that exceeded all expectations. MeetSpace offers an elegantly designed and impeccably maintained meeting hall, perfectly suited for professional gatherings up to 50. The ambiance strikes an ideal balance between modern sophistication and welcoming warmth. The state-of-the-art audiovisual facilities greatly enhanced the quality of our event, while the attentive and courteous staff ensured everything proceeded seamlessly. Conveniently located with ample parking, MeetSpace stands out as a premier choice for hosting meetings and corporate events. I wholeheartedly recommend it to anyone seeking a refined and stress-free venue experience. Thanks!',
        clientName: 'Rahul Bind',
        rating: '★★★★★',
        date: 'Edited a month ago'
      },
      {
        id: '4',
        text: 'Excellent Meeting Space – Highly Recommended! We recently used this conference room for our business meeting, and it exceeded all expectations. The room was clean, well-organized, and equipped with all necessary amenities including a projector, high-speed Wi-Fi, whiteboard, and comfortable seating. The ambiance was professional and quiet, ideal for focused discussions. The staff was courteous and very supportive throughout. Would definitely book again for future meetings. Highly recommended!',
        clientName: 'Devashish Wane',
        rating: '★★★★★',
        date: 'A month ago'
      }
    ];

    setTestimonials(staticTestimonials);
    setLoading(false);
  }, []);

  if (loading) return <div>Loading testimonials...</div>;

  return (
    <section className="section testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-row">
        {testimonials.map(testimonial => (
          <div className="testimonial" key={testimonial.id}>
            <p className="rating">{testimonial.rating}</p>
            <p className="date">{testimonial.date}</p>
            <p>"{testimonial.text}" – <span className="client-name">{testimonial.clientName}</span></p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;