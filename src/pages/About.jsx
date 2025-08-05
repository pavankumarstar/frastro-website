import React from 'react';
import './About.css';
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Map from '../components/Map';
import Faq from '../components/Faq';
const zodiacItems = [
  { label: 'Pisces', symbol: '♓' },
  { label: 'Virgo', symbol: '♍' },
  { label: 'Aquarius', symbol: '♒' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      when: 'beforeChildren',
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const About = () => {
  return (
    <div className="">
      <div className="contact-header">
        <img
          src="/images/About-back.jpg"
          alt="Decorative header for about"
          className="header-image"
          aria-hidden="true"
        />

        <motion.h1
          className="headline"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.9, ease: 'easeOut' },
            },
          }}
        >
          About Us
          <motion.span
            aria-hidden="true"
            className="underline"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          />
        </motion.h1>
      </div>
    <div className='about-section'>
      <motion.div
        className="about-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={containerVariants}
      >
        <motion.div
          className="about-left"
          variants={itemVariants}
        >
          <h1 className="about-headline">Stella Mars</h1>

          <div className="zodiac-nav">
            {zodiacItems.map((z, i) => (
              <React.Fragment key={z.label}>
                <div className="zodiac-item">
                  <span className="symbol">{z.symbol}</span> {z.label.toUpperCase()}
                </div>
                {i < zodiacItems.length - 1 && <div className="divider">•</div>}
              </React.Fragment>
            ))}
          </div>

          <div className="underline-wrapper">
            <div className="dot" />
            <div className="line" />
            <div className="arrow">→</div>
          </div>

          <div className="about-description">
            <p>
              Aenean at lectus sed neque tempor volutpat quis id neque. Sed enim purus, ultrices vitae ultricies id, eleifend at eros. Sed non lorem a elit tempus semper. Nulla facilisi. Cras porttitor consequat nunc sed egestas. Vestibulum sit amet consectetur turpis. Nullam euismod purus at ipsum vehicula vulputate. Vivamus eu massa in libero ornare interdum elementum blandit mauris. Nullam porttitor id neque in rutrum.
            </p>
            <p>
              Vestibulum non neque in mi dictum suscipit. Fusce quis facilisis metus. Vestibulum at leo purus. Etiam at vestibulum libero. Cras augue neque, finibus sit amet pellentesque in, fermentum vel enim.
            </p>
          </div>

          <div className="social-icons">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <button className="social-btn">
                  <FaTwitter />
                </button>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <button className="social-btn">
                  <FaFacebookF />
                </button>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <button className="social-btn">
                  <FaYoutube />
                </button>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <button className="social-btn">
                  <FaInstagram />
                </button>
              </a>
          </div>
        </motion.div>

        <motion.div
          className="about-right"
          variants={itemVariants}
        >
          <div className="image-wrapper">
            <img
              className="about-image"
              src="/images/about1.jpg"
              alt="Stella Mars"
            />
            <div className="image-overlay" />
          </div>
        </motion.div>
      </motion.div>
    </div>
    <div>
      <Map/>
      <Faq/>
    </div>
    </div>
      
  );
};

export default About;
