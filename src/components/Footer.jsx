import React, { useEffect, useState } from 'react';
import './Footer.css';
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaSun,
  FaMoon,
} from 'react-icons/fa';

const Footer = () => {
  const [theme, setTheme] = useState('dark');
  const [visible, setVisible] = useState(false);

  // Load persisted theme
  useEffect(() => {
    const stored = localStorage.getItem('site-theme');
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
      document.documentElement.setAttribute('data-theme', stored);
    } else {
      // default to dark
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Toggle theme and persist
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('site-theme', next);
  };

  // Reveal on near scroll bottom
  useEffect(() => {
    const onScroll = () => {
      const scrolledFromBottom =
        document.documentElement.scrollHeight -
        window.innerHeight -
        window.scrollY;
      if (scrolledFromBottom < 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer
      className={`footer-section ${visible ? 'revealed' : ''}`}
      aria-label="Site Footer"
    >
      <div className="footer-top-row">
        <div className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? <FaSun /> : <FaMoon />}
          <span className="toggle-label">
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </span>
        </div>
      </div>

      <div className="footer-inner">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            Astrology expert offering love marriage, love problem, and palm reading services with
            trusted guidance grounded in Vedic wisdom.
          </p>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="/love-marriage">Love Marriage</a>
            </li>
            <li>
              <a href="/love-problem">Love Problem</a>
            </li>
            <li>
              <a href="/palm-reading">Palm Reading</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li>
              📞 <a href="tel:+917483969594">+91-7483969594</a>
            </li>
            <li>
              ✉️ <a href="mailto:astro@example.com">astro@example.com</a>
            </li>
            <li>📍 Delhi, India</li>
            <li>
              <a
                href="https://wa.me/917483969594"
                aria-label="Chat on WhatsApp"
                className="whatsapp-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-column social-column">
          <h3>Follow</h3>
          <div className="social-row">
            <a aria-label="Instagram" href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a aria-label="Facebook" href="#" className="social-icon">
              <FaFacebookF />
            </a>
            <a aria-label="YouTube" href="#" className="social-icon">
              <FaYoutube />
            </a>
            <a aria-label="Twitter" href="#" className="social-icon">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Astrology Expert. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
