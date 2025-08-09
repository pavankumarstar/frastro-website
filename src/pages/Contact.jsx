import React, { useState } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    honeypot: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.honeypot) return;
    setSubmitting(true);
    setStatusMsg(null);

    const { firstName, lastName, email, subject, message } = form;
    const waMessage = `Name: ${firstName} ${lastName}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    const encoded = encodeURIComponent(waMessage);
    const number = '16474713459';

    window.open(`https://wa.me/${number}?text=${encoded}`, '_blank');

    setForm({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      honeypot: '',
    });
    setSubmitting(false);
    setStatusMsg('Your message has been sent via WhatsApp!');
  };

  return (
     <div>
      
    <div className="contact-container">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        DIVINE <span className="highlight">ASSISTANCE</span>
      </motion.h2>
      <p className="subtitle">
       Divine assistance of Astrologers active involvement in our lives to support and guide us.
      </p>

      <motion.div
        className="form-wrapper"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="honeypot"
            style={{ display: 'none' }}
            value={form.honeypot}
            onChange={handleChange}
          />
          <div className="input-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              value={form.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="input-row">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={form.subject}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            required
            value={form.message}
            onChange={handleChange}
          />

          <div className="form-actions">
            <button type="submit" disabled={submitting}>
              {submitting ? 'Sending...' : 'Send'}
            </button>
          </div>

          {statusMsg && <div className="status">{statusMsg}</div>}
        </form>
      </motion.div>

      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884.2536335683226!2d-79.64755762399484!3d43.705277871099675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3bfe9930d1c7%3A0x7a2a3817a03721ba!2s7086%20Airport%20Rd%20%237a%2C%20Mississauga%2C%20ON%20L4T%202G8%2C%20Canada!5e0!3m2!1sen!2sin!4v1754474426556!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <ContactInfo/>
     </div>
  );
};

export default Contact;
