import React from 'react';
import './Home.css';

import zodiac from '../assets/images/love-black.jpg';
import palm from '../assets/images/palm-reading.jpg';
import cosmic from '../assets/images/spiritual-healing.jpg';


import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {

    const bannerStyle = {
        backgroundImage: "url('/images/astrology-banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        display : "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 1rem",
    };


  return (
    <div className="home">
      {/* Banner */}
      {/* <section className="home-banner" style={bannerStyle}>
        <div className="banner-content">
          <h1 className="banner-title">Welcome to Astrology Expert</h1>
          <p className="banner-subtitle">Unlock your destiny with trusted guidance</p>
        </div>
      </section> */}

      <section className="home-carousel">
       
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
        >
          <div>
            <img src={zodiac} alt="Zodiac Insights" />
            {/* <p className="legend">Zodiac Insights & Compatibility</p> */}
          </div>
          <div>
            <img src={palm} alt="Palm Reading" />
            {/* <p className="legend">Deep Palm Reading Sessions</p> */}
          </div>
          <div>
            <img src={cosmic} alt="Cosmic Energy" />
            {/* <p className="legend">Explore Cosmic Energy</p> */}
          </div>
        </Carousel>
      </section>


      {/* Content */}
      <section className="home-content">
        <div className="content-box fade-in-up">
          <h2>What We Offer</h2>
          <p>We provide professional astrology services for love marriage, relationship issues, palm reading, and more. Our guidance is trusted by thousands across the globe.</p>
        </div>

        <div className="content-box fade-in-up delay">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>✅ 20+ Years of Experience</li>
            <li>✅ Personalized Reports</li>
            <li>✅ Confidential & Accurate Readings</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
