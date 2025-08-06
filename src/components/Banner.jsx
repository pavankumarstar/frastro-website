import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };
  
  const handleBookClick = (e) => {
    e.stopPropagation();
    navigate('/contact');
  };

  return (
    <motion.div
      className="banner-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="banner-container">
        {/* LEFT SECTION */}
        <div className="banner-box clickable" onClick={handleHomeClick}>
          <p className="banner-subtitle">ALL RELIGIONS ARE WELCOME</p>
          <h2 className="banner-title">GUARANTEED</h2>
          <p className="banner-desc">RESULT CUSTOMER SATISFACTION</p>
        </div>

        {/* MIDDLE SECTION */}
        {/* <div className="banner-box middle-box">
          <p className="no-label">No</p>
          <h2 className="number">1</h2>
          <div>
            <h3 className="middle-title">ASTROLOGER IN  canada</h3>
            <p className="middle-desc"><em>BEST RESULTS</em></p>
          </div>
        </div> */}

        {/* RIGHT SECTION */}
        <a href="tel:647-471-3459" className="banner-box right-box phone-link">
          <div className="phone-icon">
            <FaPhoneAlt />
          </div>
          <div>
            <h3 className="right-title">GET CONSULTATION</h3>
            <p className="phone-number">1-6474-713-459</p>
          </div>
        </a>
        <button className="book-button" onClick={handleBookClick}>
            BOOK APPOINTMENT
          </button>
      </div>
    </motion.div>
  );
};

export default Banner;
