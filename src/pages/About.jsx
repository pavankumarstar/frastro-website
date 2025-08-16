import React from 'react';
import './About.css';
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Faq from '../components/Faq';
import ClientTestimonials from '../components/ClientTestimonials';
import StatsSection from '../components/about/StatsSection';
import OurServices from '../components/about/OurServices';
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
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const About = () => {
  return (
    <div className="">
      <div className="contact-header">
        <img
          src="/images/about/15.jpg"
          alt="/images/about/13.jpg"
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
      <div
        className="about-inner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        
      >
        <div
          className="about-left"
          variants={itemVariants}
        >
          <h1 className="about-headline"> PANDIT RAJ ASTROLOGY</h1>

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
              Pandit Raj Astrologer in Canada with 25 years of experience in Astrology, Vastu-Shastra & Spiritualism. Astro means Astrology or Jyotisha and Science means its study. This study of science is completely based on the impact of planetary forces on the life on earth. Astro means Astrology or Jyotisha and Science means its study. This study of science is completely based on the impact of planetary forces on the life on earth. Be it human beings, or animals, or trees and plants, whoever has life on planet earth for them there is a certain astrological impact. Astroscience is in depth study and research of Planets, Zodiac signs from Aries to Pisces, 27 Nakshatra and 12 houses of Birthchart or Kundali.
            </p>
            <p>
              Many areas of our life like our Personality, Characteristics, our Taste, Behavior and Looks can be easily derived by analyzing these things in the Horoscope. Infact, Astrology can also reveal many things from your Past, Present and Future. Vedic Astrology or Jyotisha can play a very important role for providing guidance about your Career field, Relationships, Education, Finance, and astrology also precisely predicts about your Health matters.
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
        </div>

        <motion.div
          className="about-right"
          variants={itemVariants}
        >
          <div className="image-wrapper">
            <img
              className="about-image"
              src="/images/about/two.jpg"
              alt="Stella Mars"
            />
            <div className="image-overlay" />
          </div>
        </motion.div>
      </div>
    </div>
    <div>
      {/* <Map/> */}
      <OurServices/>
      <Faq/>
      <StatsSection/>
      <ClientTestimonials/>
    </div>
    </div>
      
  );
};

export default About;