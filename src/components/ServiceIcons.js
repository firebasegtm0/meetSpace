// ServiceIcons.js
import React from "react";
import {
  MdPower,
  MdCleaningServices,
  MdTune,
  MdSettingsInputComponent,
  MdWifi,
  MdMeetingRoom,
  MdNoAccounts,
  
} from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";
import "../App.css";

const services = [
  { icon: <MdPower />, label: "Power backup" },
  { icon: <MdCleaningServices />, label: "Daily Cleaning & Sanitisation" },
  { icon: <MdTune />, label: "Easy customisation" },
  { icon: <MdSettingsInputComponent />, label: "Hassle Free Setup" },
  { icon: <MdWifi />, label: "High Speed Wi-Fi" },
  { icon: <MdMeetingRoom />, label: "Meeting room" },
  { icon: <MdNoAccounts />, label: "No Hidden Costs" },
  { icon: <FaHandHoldingUsd />, label: "Pay as you use" },
];

const ServiceIcons = () => (
  <section className="service-icons-section">
    <div className="service-icons-marquee">
      <div className="service-icons-track">
        
        {[...Array(2)].map((_, i) =>
          services.map((service, idx) => (
            <div className="service-icon-card" key={i + "-" + idx}>
              <span className="service-icon">{service.icon}</span>
              <span className="service-label">{service.label}</span>
            </div>
          ))
        )}
      </div>
    </div>
  </section>
);

export default ServiceIcons;
