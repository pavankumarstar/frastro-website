import React from 'react';
import './ClientTestimonials.css';

const ClientTestimonials = () => {
  const testimonials = [
    {
      text: "Master Shiva reading revealed career opportunities I never would have considered. Within months, I found my true calling.",
      author: "Sarah Johnson",
      position: "Canada , Toronto",
      avatar: "",
      delay: "0s"
    },
    {
      text: "The relationship analysis helped me understand karmic patterns I've been repeating for lifetimes. Profound healing followed.",
      author: "Michael Chen",
      position: "Canada , Montreal",
      avatar: "MC",
      delay: "0.2s"
    },
    {
      text: "Master Shiva prediction about my financial situation came true to the month. The remedies he suggested made all the difference.",
      author: "Emily Rodriguez",
      position: "Canada , Calgary",
      avatar: "ER",
      delay: "0.4s"
    },
    {
      text: "Master Shiva black magic removal changed my life. I was facing unexplained problems for months, but after his powerful remedies, everything began to clear up—just as he predicted. His guidance brought peace and protection back into my life.",
      author: "David Thompson",
      position: "Canada , Vancouver",
      avatar: "DT",
      delay: "0.6s"
    },
    {
      text: "I had almost given up hope of getting married due to constant delays and family obstacles. Master Shiva guidance and astrological remedies worked wonders—within months, everything aligned, and my marriage was fixed smoothly.",
      author: "Lisa Park",
      position: "Canada , Edmonton",
      avatar: "LP",
      delay: "0.8s"
    },
    {
      text: "Master Shiva spiritual healing brought me inner peace during the darkest phase of my life. His sessions helped me reconnect with my energy, clear negativity, and feel truly balanced for the first time in years.",
      author: "James Wilson",
      position: "Canada ,  Winnipeg",
      avatar: "JW",
      delay: "1s"
    }
  ];

  const carouselTestimonials = [
    { text: "Amazing experience! Highly recommend their services.", author: "Alex Smith", rating: 5 },
    { text: "Professional, reliable, and results-driven team.", author: "Maria Garcia", rating: 5 },
    { text: "Exceeded expectations in every aspect of the project.", author: "Robert Kim", rating: 5 },
    { text: "Innovative solutions that truly made a difference.", author: "Jennifer Lee", rating: 5 },
    { text: "Outstanding communication and project delivery.", author: "Tom Anderson", rating: 5 },
    { text: "They understand client needs and deliver perfectly.", author: "Sophie Brown", rating: 5 },
    { text: "Top-notch quality and attention to detail.", author: "Carlos Martinez", rating: 5 },
    { text: "Reliable partners for any complex project.", author: "Anna Davis", rating: 5 }
  ];

  const QuoteIcon = () => (
    <svg className="quote-icon" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
    </svg>
  );

  const StarIcon = () => (
    <span className="star">★</span>
  );

  return (
    <div className="testimonials-container">
      <div className="testimonials-background"></div>
      
      <div className="testimonials-content">
        <div className="testimonials-title">
          <h2>What Our Clients Say</h2>
          <p>Discover why businesses trust us to deliver exceptional results</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card"
              style={{ '--delay': testimonial.delay }}
            >
              <QuoteIcon />
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.avatar}
                </div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-carousel">
          <h3 className="carousel-title">More Happy Clients</h3>
          <div className="carousel-container">
            <div className="carousel-track">
              {[...carouselTestimonials, ...carouselTestimonials].map((testimonial, index) => (
                <div key={index} className="carousel-card">
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <p className="text">"{testimonial.text}"</p>
                  <p className="author">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonials;