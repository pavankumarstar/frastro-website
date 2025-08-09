import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaWhatsapp
  
} from 'react-icons/fa';
import './FloatingButtons.css';
import { SlArrowUp } from "react-icons/sl";

const FloatingButtons = () => {
  const [showSocials, setShowSocials] = useState(false);
  const toggleSocials = () => setShowSocials(prev => !prev);
  const closeSocials = () => setShowSocials(false);

  // Scroll-to-top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-buttons">
      {/* Social Icons */}
      {showSocials && (
        <motion.div
          className="social-buttons"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <span
            className="icon close"
            title="Close"
            onClick={closeSocials}
          >
            ❌
          </span>
        </motion.div>
      )}

      {/* Scroll-to-top / WhatsApp */}
      <motion.button
        className="floating-btn whatsapp"
        onClick={scrollToTop}
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <SlArrowUp />
      </motion.button>

      {/* Pandit Contact Toggle */}
      <motion.div
        className="floating-btn pandit-contact"
        onClick={toggleSocials}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src="https://kamleshyadav.com/html/astrology/version-1/images/content/timer_2.png"
          alt="Pandit Raj"
          className="icon-img"
        />
        <span className="contact-label">Pandit Raj Contact</span>
      </motion.div>
    </div>
  );
};

export default FloatingButtons;
