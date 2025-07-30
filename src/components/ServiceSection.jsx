import React from 'react';
import './ServiceSection.css';
import { FaHeart, FaComments, FaHandsHelping } from 'react-icons/fa';


const ServiceSection = ({
  title,
  description,
  imageSrc,
  highlights = [],
  solutions = [],
  buttonText,
  buttonLink
}) => {
  return (
    <section className="service-section">
      <div className="service-header">
        <h2>{title}</h2>
        <div className="underline"></div>
      </div>

      <div className="service-content">
        <div className="service-text">
           <div className="service-description">
            {Array.isArray(description) ? (
              description.map((para, idx) => (
                <p key={idx} className="service-paragraph">{para}</p>
              ))
            ) : (
              <p className="service-paragraph">{description}</p>
            )}
            
          </div>
        </div>

        <div className="service-media">
          <img src={imageSrc} alt={title} loading="lazy" />
          <div className="highlight-icons">
            {highlights.map((item, idx) => (
              <div className="icon-box" key={idx}>
                {item.icon}
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="solution-box">
            <h4><FaHandsHelping /> Conflict Solutions</h4>
            <ul>
              {solutions.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
      </div>
          <a href={buttonLink} className="service-button">
            {buttonText}
          </a>
    </section>
  );
};

export default ServiceSection;
