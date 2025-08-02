import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    sunSign: '',
    email: '',
    phone: '',
    message: '',
    honeypot: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.honeypot) return; // bot
    setSubmitting(true);
    setStatusMsg(null);

    const { name, sunSign, email, phone, message } = form;
    const waText = `Name: ${name}\nSun Sign: ${sunSign}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(waText);
    const whatsappNumber = '917483969594';
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');

    try {
      if (
        process.env.REACT_APP_EMAILJS_SERVICE_ID &&
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID &&
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      ) {
        await emailjs.send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          { name, sunSign, email, phone, message, datetime: new Date().toLocaleString() },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );
        console.log('Email sent');
      } else {
        console.warn('EmailJS vars missing');
      }
    } catch (err) {
      console.error('EmailJS error', err);
      setStatusMsg('Email failed to send.');
    }

    try {
      if (process.env.REACT_APP_SHEET_API) {
        await fetch(process.env.REACT_APP_SHEET_API, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify([[name, sunSign, email, phone, message, new Date().toLocaleString()]]),
        });
        console.log('Saved to sheet');
      } else {
        console.warn('Sheet API missing');
      }
    } catch (err) {
      console.error('Sheet error', err);
      setStatusMsg((prev) => (prev ? prev + ' Sheet save failed.' : 'Sheet save failed.'));
    }

    if (!statusMsg) setStatusMsg('Your details were sent successfully!');
    setForm({
      name: '',
      sunSign: '',
      email: '',
      phone: '',
      message: '',
      honeypot: '',
    });
    setSubmitting(false);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <img
          src="/images/Contact.png"
          alt="Decorative header"
          className="header-image"
          aria-hidden="true"
        />
      </div>

      <div className="contact-content">
        <div className="contact-left">
          <span className="small-label">CONTACT</span>
          <h2 className="headline">Get In Touch</h2>
          <div className="contact-passage">
            <p>
              Vestibulum at leo purus. Etiam at vestibulum libero. Cras augue neque, finibus sit
              amet pellentesque in, fermentum vel enim. Phasellus volutpat vulputate arcu, gravida
              lobortis auctor vitae. Suspendisse felis lacus, fermentum in mauris at, accumsan
              gravida eros. Fusce id ligula efficitur, feugiat vel, blandit enim. Vestibulum ante
              ipsum.
            </p>
            <div className="contact-share">
              <div className="info-line">
                <span className="icon">📍</span>
                <span>Star Street, Washington DC, USA</span>
              </div>
              <div className="info-line">
                <span className="icon">✉️</span>
                <span>Stellarium@bold-themes.com</span>
              </div>
              <div className="info-line">
                <span className="icon">📞</span>
                <span>+23 344 53 4556</span>
              </div>
              <div className="info-line">
                <span className="icon">📱</span>
                <span>+23 67 537 4556</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form onSubmit={handleSubmit} className="form-box" aria-label="Contact form">
            <input
              type="text"
              name="honeypot"
              value={form.honeypot}
              onChange={handleChange}
              style={{ display: 'none' }}
              autoComplete="off"
              tabIndex="-1"
            />

            <div className="row">
              <div className="field-group">
                <input
                  name="name"
                  placeholder="Your Name*"
                  value={form.name}
                  onChange={handleChange}
                  required
                  aria-label="Your Name"
                />
              </div>
              <div className="field-group">
                <input
                  name="sunSign"
                  placeholder="Sun Sign*"
                  value={form.sunSign}
                  onChange={handleChange}
                  required
                  aria-label="Sun Sign"
                />
              </div>
            </div>

            <div className="row">
              <div className="field-group full">
                <input
                  name="email"
                  type="email"
                  placeholder="E-mail*"
                  value={form.email}
                  onChange={handleChange}
                  required
                  aria-label="Email"
                />
              </div>
            </div>

            <div className="row">
              <div className="field-group full">
                <input
                  name="phone"
                  type="tel"
                  placeholder="Your Phone*"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  aria-label="Phone"
                />
              </div>
            </div>

            <div className="row">
              <div className="field-group full">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  aria-label="Message"
                  rows={5}
                />
              </div>
            </div>

            <div className="submit-row">
              <button type="submit" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send'}
              </button>
            </div>
            {statusMsg && <div className="status-message">{statusMsg}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
