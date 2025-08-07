import React from 'react';
import './OurServices.css';

const servicesLeft = [
  {
    title: 'Astrology Tips',
    desc: 'Daily insights based on planetary positions and zodiac signs to guide your decisions.',
    icon: '/icons/health.svg',
  },
  {
    title: 'Gem Stone',
    desc: 'Discover the best gemstones for your birth chart to attract positivity and success.',
    icon: '/icons/gem.svg',
  },
  {
    title: 'Vastu Tips',
    desc: 'Improve energy flow in your home or office using ancient Vastu Shastra principles.',
    icon: '/icons/vastu.svg',
  },
];

const servicesRight = [
  {
    title: 'Health Tips',
    desc: 'Astrological remedies and diet suggestions based on your moon sign and doshas.',
    icon: '/icons/kundli.svg',
  },
  {
    title: 'Numerology Tips',
    desc: 'Decode the power of numbers in your life — from name vibrations to lucky dates.',
    icon: '/icons/number.svg',
  },
  {
    title: 'Kundli Dosha',
    desc: 'Identify and neutralize planetary doshas like Mangal or Kaal Sarp in your Kundli.',
    icon: '/icons/astro.svg',
  },
];


const OurServices = () => {
  return (
    <div className="our-services">
      <div className="services-header">
        <h2>Our Services</h2>
      <p>Reveal your destiny through the power of ancient astrology.</p>

      </div>
      <div className="services-content">
        <div className="service-column">
          {servicesLeft.map((item, idx) => (
            <div className="service-card" key={idx}>
  <img src={item.icon} alt={item.title} className="card-icon" />
  <div className="card-text">
    <h3>{item.title}</h3>
    <p>{item.desc}</p>
  </div>
</div>
          ))}
        </div>
<div className="service-center">
  <div className="rotating-wrapper">
    <div className="circle-animation"></div>
  </div>
  <img
    src="/images/hand.png"
    alt="Palm Reading"
    className="service-image"
  />
</div>

        <div className="service-column">
          {servicesRight.map((item, idx) => (
            <div className="service-card" key={idx}>
              <img src={item.icon} alt={item.title} className="card-icon" />
              <div className="card-right">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
