import React, { useState, useEffect, useRef } from 'react';
import './Content.css';
import { motion, AnimatePresence } from 'framer-motion';

const swipeConfidenceThreshold = 10000; // adjust sensitivity
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Content = ({
  images = [
    { src: '/images/content/onehome.jpg', alt: 'Astrology 1' },
    { src: '/images/content/secondhome.jpg', alt: 'Astrology 2' },
  
  ],
  title = 'KNOW ABOUT ASTROLOGY',
  description = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.`,
  phone = '+16474713459',
}) => {
  const [[activeIndex, direction], setIndex] = useState([0, 0]); // direction: 1=next, -1=prev
  const intervalRef = useRef(null);

  // Autoplay (forward)
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex(([prev]) => [(prev + 1) % images.length, 1]);
    }, 4000);
    return () => clearInterval(intervalRef.current);
  }, [images.length]);

  // Manual navigation helpers
  const paginate = (newDirection) => {
    clearInterval(intervalRef.current); // reset autoplay on manual
    setIndex(([prev]) => {
      const nextIndex = (prev + newDirection + images.length) % images.length;
      return [nextIndex, newDirection];
    });
    // restart autoplay after short delay
    intervalRef.current = setInterval(() => {
      setIndex(([prev]) => [(prev + 1) % images.length, 1]);
    }, 4000);
  };

  const active = images[activeIndex];



  return (
    <section className="content-section">
      <div className="content-inner">
        {/* LEFT SIDE - IMAGE */}
        <div className="content-left">
          <div className="image-stack">
           
            <div className="image-wrapper">
  <motion.img
    key={active?.src}
    src={active?.src}
    alt={active?.alt || 'Astrology image'}
    className="main-img"
    loading="lazy"
    initial={{ x: direction > 0 ? 300 : -300 }}
    animate={{ x: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    drag="x"
    dragConstraints={{ left: 0, right: 0 }}
    dragElastic={0.2}
    onDragEnd={(e, { offset, velocity }) => {
      const swipe = swipePower(offset.x, velocity.x);
      if (swipe < -swipeConfidenceThreshold) {
        paginate(1);
      } else if (swipe > swipeConfidenceThreshold) {
        paginate(-1);
      }
    }}
  />

              {/* Optional arrows */}
              <div className="nav-arrows">
                <button
                  aria-label="Previous"
                  className="arrow-btn prev"
                  onClick={() => paginate(-1)}
                >
                  ‹
                </button>
                <button
                  aria-label="Next"
                  className="arrow-btn next"
                  onClick={() => paginate(1)}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - TEXT */}
        <div className="content-right">
          <div className="content-title">
            <h1>{title}</h1>
            <div className="underline" />
          </div>

          <div className="content-description">
            {description.split('\n').map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
            <motion.a
              href="/about"
              className="read-more-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              READ MORE
            </motion.a>
          </div>

          {/* CONTACT SECTION */}
          <div className="content-contact">
            <a
              href="https://wa.me/16474713459"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="icon-circle">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.5 2.5.78 3.85.78a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.35.27 2.65.78 3.85a1 1 0 01-.21 1.11l-2.2 2.2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="contact-text">
                <div className="small">Contact Our Expert Astrologers</div>
                <div className="phone">{phone}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
