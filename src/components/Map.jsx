import React from 'react';
import { motion } from 'framer-motion';
import './Map.css';

const Map = ({
  title = 'Visit Me',
  subtitle = 'Location',
  description = `Vestibulum at leo purus. Etiam at vestibulum libero. Cras augue neque, finibus sit amet pellentesque in, fermentum vel enim. Phasellus volutpat vulputate arcu, gravida lobortis auctor vitae. Suspendisse felis lacus, fermentum in mauris at, accumsan gravida eros. Fusce id ligula efficitur, feugiat vel, blandit enim. Vestibulum ante ipsum.`,
  address = 'Star Street, Washington DC, USA',
  phone = '+23 67 537 4556',
  // Example coordinates: New Haven, CT (you can change to your own)
  mapEmbedSrc = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.67410673108!2d-79.54286655715585!3d43.718122802549985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sin!4v1754152755785!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
}) => {
  return (
    <section className="location-section">
      <div className="location-inner">
        <motion.div
          className="location-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="map-wrapper">
            <iframe
              title="Location map"
              src={mapEmbedSrc}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        <motion.div
          className="location-right"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        >
          <div className="meta">
            <span className="tap">{subtitle}</span>
            <h1 className="headline">{title}</h1>
            <div className="underline" />
          </div>
          <p className="desc">{description}</p>
          <div className="contact-info">
            <div className="info-item">
              <div className="icon">
                {/* location pin */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="9" r="2.5" fill="currentColor" />
                </svg>
              </div>
              <div className="text">{address}</div>
            </div>
            <div className="info-item">
              <div className="icon">
                {/* phone */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.13 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.13-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.81.33 1.6.62 2.35a2 2 0 0 1-.45 2.11L9.1 8.9a16 16 0 0 0 6 6l1.72-1.18a2 2 0 0 1 2.11-.45c.75.29 1.54.5 2.35.62A2 2 0 0 1 22 16.92z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="text">{phone}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Map;
