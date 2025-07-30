import React from 'react';
import './About.css';
import FAQSection from '../components/FAQSection';


const About = () => {
  return (
    <div className="about-wrapper">
      {/* Full-width video */}
      <div className="about-video-section">
        <video
          src="/videos/about.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="about-video"
        />
         <div className="video-overlay">
          <h1 className="video-title">Welcome to Our Astrology World</h1>
        </div>
      </div>

      {/* Below video: content grid */}
      <div className="about-below-grid">
        {/* Left image */}
        <div className="about-images">
          <img src="/images/about1.jpg" alt="Astrology work" />
          
        </div>

        {/* Right content */}
        <div className="about-content">
          <h2>About Our Astrology</h2>
          <p>
            Welcome to our astrology services,astrology is a sacred journey toward self-discovery and spiritual clarity. It’s more than just predicting events—it’s about aligning with cosmic energies, understanding your life’s true purpose, and unlocking your highest potential through the timeless wisdom of Vedic astrology.
          </p>
          <p>
            With a blend of ancient Vedic wisdom and intuitive insight, Pandit Nandhaji guides individuals through life’s challenges toward clarity and fulfillment. At Astro Aura, astrology is not just about predicting the future—it’s a profound tool for understanding yourself, making empowered decisions, and living with purpose. Discover the deeper meaning behind your journey and align with the universe’s powerful energies.
          </p>
        </div>
      </div>

      <section className="faq-section">
       <FAQSection />
      </section>
    </div>
  );
};

export default About;
