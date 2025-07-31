import React from 'react';
import './Home.css';
import zodiac from '../assets/images/love-black.jpg';
import palm from '../assets/images/palm-reading.jpg';
import cosmic from '../assets/images/spiritual-healing.jpg';
import Carousel from '../components/Carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Background from '../components/Background';

const Home = () => {
  return (
    <div className="home">
      <section className="home-carousel">
        <Carousel
          images={[zodiac, palm, cosmic]}
          autoplay={true}
          direction="up"
        >

        </Carousel>
      </section>
      <section className='home-service'>


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
        <Background />
      </section>
    </div>
  );
};

export default Home;