import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import "./AstrologerSection.css";
import { useNavigate } from "react-router-dom";

const AstrologerSection = () => {
        const navigate = useNavigate();

  const handleBookClick = () => {
    navigate("/contact"); // this should match your route
  };
  return (
    <div className="astro-section">
      <motion.div
        className="astro-left"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src="images/dy.jpg" alt="Astrologer" />
      </motion.div>

      <motion.div
        className="astro-right"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Meet & Talk With Our Astrologer</h2>
        <h3>Every Problem Have A Solution</h3>
        <p>
          With decades of experience in Vedic sciences and spiritual healing,
          Astrologer Pandit Raj  has helped countless individuals find clarity and peace...
        </p>

        <ul className="highlights">
          <li><FaCheckCircle /> Black Magic Expert</li>
          <li><FaCheckCircle /> Love Problem Specialist</li>
          <li><FaCheckCircle /> Spiritual Healer</li>
        </ul>

        <div className="experience">
          <span className="circle">25</span>
          <span className="pavan">Years Experience</span>
        </div>

       <div className="buttons">
  <button
    className="contact"
    onClick={handleBookClick}
  >
    Contact Us
  </button>

  <button
    className="chat"
    onClick={() =>
      window.open('https://wa.me/16474713459', '_blank')
    }
  >
    Let's Chat
  </button>
</div>
      </motion.div>
    </div>
  );
};

export default AstrologerSection;
