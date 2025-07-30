import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = form;

    const text = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/917483969594?text=${encodedText}`; // Replace number if needed

    window.open(whatsappUrl, '_blank');

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        { name, email, phone, message },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      console.log('✅ Email sent');
    } catch (err) {
      console.error('❌ Email error:', err);
    }

    try {
      await fetch(process.env.REACT_APP_SHEET_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([
          [name, email, phone, message, new Date().toLocaleString()],
        ]),
      });
      console.log('✅ Saved to Google Sheets');
    } catch (err) {
      console.error('❌ Google Sheets error:', err);
    }

    alert('Your details were sent successfully!');
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Your Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default ContactForm;
