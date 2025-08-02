import React, { useState } from 'react';
import './Content.css';

const Content = ({
  images = [
    { src: '/images/as3.jpg', overlay: '/images/as3.png', alt: 'Astrology 1' },
    { src: '/images/as4.jpg', overlay: '/images/overlay2.png', alt: 'Astrology 2' },
    { src: '/images/as5.jpg', overlay: '/images/overlay3.png', alt: 'Astrology 3' },
    { src: '/images/as6.jpg', overlay: '/images/overlay4.png', alt: 'Astrology 4' },
  ],
  title = 'Know About Astrology',
  description = `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it esdehas a more-or less normal distribution of letters.

As opposed to using 'Content here, content here', making it look likesdesdee readable English. Many desktop publishing packages and web page editors sdesnow use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will usdencover many web sites still in their web page editors sdesnow infancy.`,
  phone = '+91 1800-124-105',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex] || {};

  return (
    <section className="content-section">
      <div className="content-inner">
        <div className="content-left">
          <div className="image-stack">
            <div className="frame back-frame" />
            <div className="frame middle-frame" />
            <div className="image-wrapper">
              <img
                key={active.src}
                src={active.src}
                alt={active.alt || 'Astrology image'}
                className="main-img"
                loading="lazy"
              />
              {active.overlay && (
                <div className="symbol-overlay">
                  <img src={active.overlay} alt="Overlay symbol" />
                </div>
              )}
            </div>
          </div>
          <div className="nav-dots">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Show image ${idx + 1}`}
                aria-current={idx === activeIndex ? 'true' : 'false'}
                type="button"
              />
            ))}
          </div>
        </div>

        <div className="content-right">
          <div className="content-title">
            <h1>{title}</h1>
            <div className="underline" />
          </div>
          <div className="content-description">
            {description.split('\n').map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
            <button className="read-more-btn">READ MORE</button>
          </div>
          <div className="content-contact">
            <div className="contact-card">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
