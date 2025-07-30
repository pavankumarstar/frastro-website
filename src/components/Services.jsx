import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: '💖 Love Marriage',
      description: 'Expert guidance on love marriage and relationship alignment.'
    },
    {
      title: '💔 Love Problem',
      description: 'Resolve misunderstandings and restore harmony in love life.'
    },
    {
      title: '✋ Palm Reading',
      description: 'Accurate palm reading to predict your future and destiny.'
    }
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
