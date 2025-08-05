import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Cards.css";
import { Link } from "react-router-dom";


const items = [
  { title: "Love Marriage", img: "/images/cards/love-marriage.jpg", link: "/services/love-marriage" },
  { title: "Love Problem", img: "/images/cards/love-problem.jpg", link: "/services/love-problem" },
  { title: "Black Magic Removal", img: "/images/cards/black-magic.jpg", link: "/services/black-magic" },
  { title: "Black Eye", img: "/images/cards/black-eye.jpg", link: "/services/evil-eye" },
  { title: "Business Problem", img: "/images/cards/business-problem.jpg", link: "/services/business-problems" },
  { title: "Family Problem", img: "/images/cards/family-problem.jpg", link: "/services/family-problems" },
  { title: "Negative Energy", img: "/images/cards/negative.jpg", link: "/services/negative-energy" },
  { title: "Plam Reading", img: "/images/cards/plamreading.jpg", link: "/services/palm-reading" },
  { title: "Tarot Reading", img: "/images/cards/Tarot-reading.jpg", link: "/services/tarot-reading" },
  { title: "Health Problem", img: "/images/healthproblem.jpg", link: "/services/health-problem" },
];
const Cards = () => {
  return (
    <div className="cards-wrapper">
      <div className="cards-header">
        <div className="header-text">
          <h1 className="cards-title">Feature Services</h1>
          <p className="cards-description">
            Astrology is Just a Finger Pointing at Reality
          </p>
        </div>
      </div>
      <div className="cards-grid">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-media">
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="card-overlay">
                <div className="overlay-content">
                  <h2>{item.title}</h2>
                  <Link to={item.link} className="learn-btn">Learn More →</Link>

                  {/* Animated Icons */}
                  <motion.div
                    className="icon-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <a
                      href="tel:+1234567890"
                      className="icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaPhoneAlt />
                    </a>
                    <a
                      href="https://wa.me/1234567890"
                      className="icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
