import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp, FaPhone } from 'react-icons/fa';
import { useState } from 'react';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const [showSocials, setShowSocials] = useState(false);
  const toggleSocials = () => setShowSocials(prev => !prev);

  return (
    <div className="floating-buttons">
      {/* Social Icons Toggle */}
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
        </motion.div>
      )}

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/16474713459"
        className="floating-btn whatsapp"
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPhone />
      </motion.a>

      {/* Toggle Button with Image & Label */}
      <motion.div
        className="floating-btn pandit-contact"
        onClick={toggleSocials}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
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
