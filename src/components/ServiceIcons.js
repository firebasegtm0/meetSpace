// ServiceIcons.js
import React from "react";
import {
  MdPower,
  MdPrint,
  MdAccessTime,
  MdCleaningServices,
  MdTune,
  MdSportsEsports,
  MdSettingsInputComponent,
  MdWifi,
  MdMeetingRoom,
  MdNoAccounts,
  MdPayment,
} from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";
import "../App.css";

const services = [
  { icon: <MdPower />, label: "Power backup" },
  { icon: <MdPrint />, label: "Printer & Scanner" },
  { icon: <MdAccessTime />, label: "Work 24x7" },
  { icon: <MdCleaningServices />, label: "Daily Cleaning & Sanitisation" },
  { icon: <MdTune />, label: "Easy customisation" },
  { icon: <MdSportsEsports />, label: "Game Zones" },
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
        {/* Repeat the icons twice for seamless scrolling */}
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
