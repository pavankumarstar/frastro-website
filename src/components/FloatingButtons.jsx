// components/FloatingButtons.jsx
import { motion } from 'framer-motion';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import './FloatingButtons.css';

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <motion.a
        href="https://wa.me/yourNumber" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp"
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <FaWhatsapp />
      </motion.a>

      <motion.a
        href="tel:+91XXXXXXXXXX" // Replace with your phone number
        className="floating-btn phone"
        whileHover={{ scale: 1.2, rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 120, delay: 0.2 }}
      >
        <FaPhoneAlt />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
