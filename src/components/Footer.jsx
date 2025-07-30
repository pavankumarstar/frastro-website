import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-grid">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>Astrology Expert offering love marriage, love problem, and palm reading services with years of experience and trusted guidance.</p>
        </div>

        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>Love Marriage</li>
            <li>Love Problem</li>
            <li>Palm Reading</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>📞 +91-7483969594</li>
            <li>✉️ astro@example.com</li>
            <li>📍 Delhi, India</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Astrology Expert. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
