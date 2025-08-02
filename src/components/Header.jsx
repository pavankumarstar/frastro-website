import React, { useState, useEffect, useRef } from 'react';

import './Header.css';


import { NavLink } from 'react-router-dom';

import { FaChevronDown } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
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
              if (window.innerWidth <= 768) setServicesOpen(!servicesOpen);
            }}
          >
            <span className="dropdown-toggle">
              Services <FaChevronDown className={`chevron-icon ${servicesOpen ? 'rotate' : ''}`} />

            </span>
            <div className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}>
              <NavLink to="/services/love-marriage" onClick={() => setMenuOpen(false)}>Love Marriage</NavLink>
              <NavLink to="/services/love-problem" onClick={() => setMenuOpen(false)}>Love Problem</NavLink>
              <NavLink to="/services/palm-reading" onClick={() => setMenuOpen(false)}>Palm Reading</NavLink>
              <NavLink to="/services/evil-eye" onClick={() => setMenuOpen(false)}>Evil Eye</NavLink>
              <NavLink to="/services/black-magic" onClick={() => setMenuOpen(false)}>Black Magic</NavLink>
              <NavLink to="/services/health-problem" onClick={() => setMenuOpen(false)}>Health Problem</NavLink>
              <NavLink to="/services/family-problems" onClick={() => setMenuOpen(false)}>Family Problems</NavLink>
              <NavLink to="/services/business-problems" onClick={() => setMenuOpen(false)}>Business</NavLink>
              <NavLink to="/services/negative-energy" onClick={() => setMenuOpen(false)}>Negative Energy</NavLink>
              <NavLink to="/services/tarot-reading" onClick={() => setMenuOpen(false)}>Tarot Reading</NavLink>
            </div>
          </div>

          <NavLink to="/location" onClick={() => setMenuOpen(false)}>Location</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
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
