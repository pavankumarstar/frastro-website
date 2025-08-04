import React from 'react';
import { motion } from 'framer-motion';
import './ServiceSection.css';
import { FaHeart, FaComments, FaHandsHelping } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

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
    <motion.section
      className="service-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
    >
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

        <motion.div className="service-media" variants={fadeInUp}>
          <img src={imageSrc} alt={title} loading="lazy" />
          <div className="highlight-icons">
            {highlights.map((item, idx) => (
              <motion.div
                className="icon-box"
                key={idx}
                whileHover={{ scale: 1.1 }}
                variants={fadeInUp}
              >
                {item.icon}
                <p>{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div className="solution-box" variants={fadeInUp}>
        <h4><FaHandsHelping /> Conflict Solutions</h4>
        <ul>
          {solutions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>

      <motion.a
        href={buttonLink}
        className="service-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.a>
    </motion.section>
  );
};

export default ServiceSection;
