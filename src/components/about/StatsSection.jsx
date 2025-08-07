import React from "react";
import "./StatsSection.css";
import { FaBuilding, FaUserTie, FaGlobe, FaBullseye } from "react-icons/fa";

const stats = [
  {
    icon: <FaBuilding />,
    number: "200",
    label: "Offices Worldwide",
  },
  {
    icon: <FaUserTie />,
    number: "800",
    label: "Skilled Astrologers",
  },
  {
    icon: <FaGlobe />,
    number: "60",
    label: "Countries Covered",
  },
  {
    icon: <FaBullseye />,
    number: "30",
    label: "Years Of Experiences",
  },
];

const StatsSection = () => {
  return (
    <div className="stats-section">
      <h2 className="stats-heading">
        Now <span>We Have</span>
      </h2>
      <p className="stats-subheading">
        Astrology is used for birth chart analysis, prediction, and gaining insights into personality, relationships, and life events. 
      </p>

      <div className="stats-scroll-wrapper">
        <div className="stats-container">
          {stats.map((item, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{item.icon}</div>
              <h3 className="stat-number">{item.number}</h3>
              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
