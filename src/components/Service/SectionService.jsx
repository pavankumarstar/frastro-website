import React, { useState } from 'react';
import './SectionService.css';
import { useNavigate } from 'react-router-dom';

const SectionService = ({ buttonLabels, contentData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const { paragraph1, header, imageSrc, paragraph2, paragraph3 } = contentData[activeIndex];

  // ✅ highlight keywords directly here
  const highlightText = (text) => {
    if (!text) return "";
    const keywords = [
      "Master Raj",
      "Ex love back solution astrologer",
      "Love marriage astrology specialist",
      "Love marriage specialist",
      "Love marriage problem solution",
      "Palm Specialist",
      "Black Magic Specialist",
      "Black Magic Removal",
      "Business astrology solutions",
      "Love Problem Specialist",
      "Get Ex Love Specialist",
      "Astrology Remedies",
      "Best astrologer for evil eye problems",
      "Evil Eye Specialist",
      "Voodoo Specialist",
      "Evil eye removal astrology",
      "Best astrologer for family problems",
    ];
    let highlighted = text;
    keywords.forEach((word) => {
      const regex = new RegExp(`(${word})`, "gi");
      highlighted = highlighted.replace(regex, "<b>$1</b>");
    });
    return highlighted;
  };

  const handleAppointmentClick = () => {
    navigate('/contact');
  };

  return (
    <div className="section-service">
      {/* Tabs */}
      <div className="tab-buttons">
        {buttonLabels.map((label, index) => (
          <button
            key={index}
            className={activeIndex === index ? 'active' : ''}
            onClick={() => setActiveIndex(index)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="section-content">
        <h2 dangerouslySetInnerHTML={{ __html: highlightText(header) }}></h2>
        <p dangerouslySetInnerHTML={{ __html: highlightText(paragraph1) }}></p>
        <div className="section-row">
          <div className="section-image">
            <img src={imageSrc} alt="Service Visual" />
          </div>
          <div className="section-text">
            <p dangerouslySetInnerHTML={{ __html: highlightText(paragraph2) }}></p>
            <p dangerouslySetInnerHTML={{ __html: highlightText(paragraph3) }}></p>
          </div>
        </div>

        {/* Appointment Button */}
        <div className="appointment-button-container">
          <button className="appointment-button" onClick={handleAppointmentClick}>
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionService;
