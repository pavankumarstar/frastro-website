import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AstroAlert.css';
import { motion, AnimatePresence } from 'framer-motion';

const AstroAlert = () => {
  const [showAlert, setShowAlert] = useState(true);
  const navigate = useNavigate();

  // Auto close after 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowAlert(false);
    navigate('/');
  };

  const handleBook = () => {
    const phoneNumber = '647-471-3459'; // Replace with your WhatsApp number
    const message = encodeURIComponent("Hello! I would like to book an appointment.");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <AnimatePresence>
      {showAlert && (
        <>
          <motion.div
            className="alert-blur-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="astro-alert"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button className="close-btn" onClick={handleClose}>
              &times;
            </button>

            <h2>AstroAlert</h2>
            <p>🌟 Divine Assistance in Chandan – Available in All Regions 🌍</p>
            <div className="alert-buttons">
              <button className="book-btn" onClick={handleBook}>
                Book Appointment
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AstroAlert;
