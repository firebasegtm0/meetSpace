// import React from 'react';

// const Services = () => {
//   return (
//     <section className="section services">
//       <h2>Our Services</h2>
//       <ul>
//         <li>Corporate Conferences</li>
//         <li>Virtual Meetings (VC)</li>
//         <li>Professional Training Programs</li>
//         <li>Workshops and Seminars</li>
//         <li>Client Presentations</li>
//         <li>Team-Building Sessions</li>
//       </ul>
//     </section>
//   );
// };

// export default Services;

import React from 'react';
import { FaHandshake, FaVideo, FaChalkboardTeacher, FaUsers, FaBullhorn, FaPuzzlePiece } from 'react-icons/fa';

const services = [
  { icon: <FaHandshake />, title: "Corporate Conferences" },
  { icon: <FaVideo />, title: "Virtual Meetings (VC)" },
  { icon: <FaChalkboardTeacher />, title: "Professional Training Programs" },
  { icon: <FaUsers />, title: "Workshops and Seminars" },
  { icon: <FaBullhorn />, title: "Client Presentations" },
  { icon: <FaPuzzlePiece />, title: "Team-Building Sessions" },
];

const Services = () => (
  <section className="section services-section">
    {/* <h2>Our Services</h2> */}
    <div className="services-grid">
      {services.map(({ icon, title }, idx) => (
        <div className="service-card" key={idx}>
          <div className="service-icon">{icon}</div>
          <h3>{title}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default Services;