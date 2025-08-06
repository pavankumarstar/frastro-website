import React, { useState } from 'react';
import './SectionService.css';
import { useNavigate } from 'react-router-dom';

const SectionService = ({ buttonLabels, contentData }) => {
  const [activeIndex, setActiveIndex] = useState(0);
   const navigate = useNavigate();
  const { paragraph1,header, imageSrc, paragraph2, paragraph3 } = contentData[activeIndex];

  const handleAppointmentClick = () => {
    navigate('/contact');
  };

  return (
    <div className="section-service">
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

      <div className="section-content">
        <h2>{header}</h2>
        <p>{paragraph1}</p>
        <div className="section-row">
          <div className="section-image">
            <img src={imageSrc} alt="Palm Reading Visual" />
          </div>
          <div className="section-text">
            <p>{paragraph2}</p>
            <p>{paragraph3}</p>
          </div>
        </div>

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