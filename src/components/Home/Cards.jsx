import React, { useEffect, useRef } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Cards.css";
import { Link } from "react-router-dom";

const items = [
  { title: "Love Marriage", img: "/images/cards/love-marriage.jpg", link: "/services/love-marriage" , desc: 'Expert guidance on love marriage and relationship alignment.' },
  { title: "Love Problem", img: "/images/cards/love-problem.jpg", link: "/services/love-problem", desc: 'Resolve misunderstandings and restore harmony in love life.' },
  { title: "Black Magic Removal", img: "/images/cards/black-magic.jpg", link: "/services/black-magic" , desc: 'Expert guidance on black magic removal.' },
  { title: "Black Eye", img: "/images/cards/black-eye.jpg", link: "/services/evil-eye" , desc: 'Expert guidance on evil eye removal.' },
  { title: "Business Problem", img: "/images/cards/business-problem.jpg", link: "/services/business-problems", desc: 'Expert guidance on business problems.' },
  { title: "Family Problem", img: "/images/cards/family-problem.jpg", link: "/services/family-problems" , desc: 'Expert guidance on family problems.' },
  { title: "Negative Energy", img: "/images/cards/negative.jpg", link: "/services/negative-energy", desc: 'Expert guidance on negative energy.' },
  { title: "Palm Reading", img: "/images/cards/plamreading.jpg", link: "/services/palm-reading", desc: 'Expert guidance on palm reading.' },
  { title: "Tarot Reading", img: "/images/cards/Tarot-reading.jpg", link: "/services/tarot-reading", desc: 'Expert guidance on tarot reading.' },
  { title: "Health Problem", img: "/images/healthproblem.jpg", link: "/services/health-problem" , desc: 'Expert guidance on health problems.' },
];

const Cards = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let cardWidth = scrollContainer?.offsetWidth || 300;

    const scroll = () => {
      if (scrollContainer) {
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        if (scrollContainer.scrollLeft >= maxScrollLeft) {
          // scroll back to start
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // scroll to next "page"
          scrollContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }
    };

    const interval = setInterval(scroll, 4000);

    return () => clearInterval(interval);
  }, []);

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

      <div className="cards-grid" ref={scrollRef}>
        {items.map((item, index) => (
          <motion.div
            className="card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card-media">
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="card-overlay">
                <div className="overlay-content">
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <Link to={item.link} className="learn-btn">
                    Learn More →
                  </Link>
                  <motion.div
                    className="icon-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <a href="tel:647-471-3459" className="icon-link">
                      <FaPhoneAlt />
                    </a>
                    <a href="https://wa.me/16474713459" className="icon-link">
                      <FaWhatsapp />
                    </a>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Cards;