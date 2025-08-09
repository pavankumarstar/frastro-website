import React from 'react';
import './Footer.css';
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-section" aria-label="Site Footer">
    

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
            <li><a href="/love-marriage">Love Marriage</a></li>
            <li><a href="/love-problem">Black Magic</a></li>
            <li><a href="/palm-reading">Love Problem</a></li>
            <li><a href="/palm-reading">Family Problem</a></li>
            <li><a href="/palm-reading">Negative Energy</a></li>
            <li><a href="/palm-reading">Business Problem</a></li>
            <li><a href="/palm-reading">Evil Eye</a></li>
            <li><a href="/palm-reading">Health Probelm</a></li>
            <li><a href="/palm-reading">Palm Reading</a></li>
            <li><a href="/palm-reading">Tarot Reading</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li>📞 <a href="tel:16474713459">16474713459</a></li>
            <li>📍 7A-7086 Airport road Mississauga L4T-2G8 ON Canada</li>
            <li>
              <a
                href="https://wa.me/16474713459"
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
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon"><FaInstagram /></a>
<a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon"><FaFacebookF /></a>
<a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon"><FaYoutube /></a>
<a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon"><FaTwitter /></a>

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
