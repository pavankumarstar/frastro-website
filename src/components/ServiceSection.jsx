import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ServiceSection.css';
import { FaHandsHelping } from 'react-icons/fa';
import Faq from './Faq';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const slideFromLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } }
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            {Array.isArray(description)
              ? description.map((para, idx) => (
                  <p key={idx} className="service-paragraph">{para}</p>
                ))
              : <p className="service-paragraph">{description}</p>}
          </div>
        </div>

        <motion.div className="service-media" variants={fadeInUp}>
          <img src={imageSrc} alt={title} loading="lazy" />

          <div className="highlight-icons">
            {highlights.map((item, idx) => (
              <AnimatePresence key={idx}>
                <motion.div
                  className="icon-box"
                  variants={isMobile ? slideFromLeft : fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={!isMobile ? { scale: 1.1 } : {}}
                >
                  {item.icon}
                  <p>{item.label}</p>
                </motion.div>
              </AnimatePresence>
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
