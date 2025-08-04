import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Header.css';
import { NavLink } from 'react-router-dom';

const menuVariants = {
  hidden: { opacity: 0, x: 10, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.07,
      duration: 0.25,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    x: 10,
    scale: 0.95,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 8 },
  visible: { opacity: 1, x: 0, transition: { ease: 'easeOut' } },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <NavLink to="/" className="logo" onClick={() => setMenuOpen(false)}>
          Astrology
        </NavLink>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} ref={navRef}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About Us</NavLink>

          <div
            className="dropdown"
            ref={dropdownRef}
            onMouseEnter={() => window.innerWidth > 768 && setServicesOpen(true)}
            onMouseLeave={() => window.innerWidth > 768 && setServicesOpen(false)}
            onClick={() => {
              if (window.innerWidth <= 768) setServicesOpen((o) => !o);
            }}
          >
            <span className="dropdown-toggle">
              Services{' '}
              
            </span>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  className="dropdown-menu"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={menuVariants}
                >
                  <motion.div variants={itemVariants}>
                    <NavLink to="/services/love-marriage" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                      Love Marriage
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink to="/services/love-problem" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                      Love Problem
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink to="/services/palm-reading" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                      Palm Reading
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink to="/services/evil-eye" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                      Evil Eye
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink to="/services/black-magic" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                      Black Magic
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink to="/services/health-problem" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                      Health Problem
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink to="/services/family-problems" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                      Family Problems
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink to="/services/business-problems" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                      Business
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink to="/services/negative-energy" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                      Negative Energy
                    </NavLink>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <NavLink to="/services/tarot-reading" onClick={() => { setMenuOpen(false); setServicesOpen(false); }}>
                      Tarot Reading
                    </NavLink>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* <NavLink to="/location" onClick={() => setMenuOpen(false)}>Location</NavLink> */}
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>

        <div className="hamburger" onClick={() => setMenuOpen((o) => !o)}>
          <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'change' : ''}`}></div>
        </div>
      </div>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)}></div>}
    </header>
  );
};

export default Header;
