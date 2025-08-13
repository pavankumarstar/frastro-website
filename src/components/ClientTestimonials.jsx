import React from "react";
import "./ClientTestimonials.css";
import Avatar from "react-avatar";

const testimonials = [
  {
    text: "Master Raj reading revealed career opportunities I never would have considered. Within months, I found my true calling.",
    author: "Sarah Johnson",
    position: "Canada, Toronto",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "The relationship analysis helped me understand karmic patterns...",
    author: "Michael Chen",
    position: "Canada, Montreal",
    image: "https://randomuser.me/api/portraits/men/31.jpg",
  },
  {
    text: "Master Raj prediction about my financial situation came true to the month. The remedies he suggested made all the difference.",
    author: "Emily Rodriguez",
    position: "Canada , Calgary",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
  },
  {
    text: "Master Raj black magic removal changed my life. I was facing unexplained problems for months, but after his powerful remedies, everything began to clear up—just as he predicted. His guidance brought peace and protection back into my life.",
    author: "David Thompson",
    position: "Canada , Vancouver",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    text: "I had almost given up hope of getting married due to constant delays and family obstacles. Master Raj guidance and astrological remedies worked wonders—within months, everything aligned, and my marriage was fixed smoothly.",
    author: "Lisa Park",
    position: "Canada , Edmonton",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    text: "Master Raj spiritual healing brought me inner peace during the darkest phase of my life. His sessions helped me reconnect with my energy, clear negativity, and feel truly balanced for the first time in years.",
    author: "James Wilson",
    position: "Canada , Winnipeg",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
];

const QuoteIcon = () => (
  <svg className="quote-icon" fill="currentColor" viewBox="0 0 24 24">
    <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
  </svg>
);

export default function ClientTestimonials() {
  return (
    <div className="testimonials-container">
      <div className="testimonials-title">
        <h2>What Our Clients Say</h2>
        <p>Discover why businesses trust us to deliver exceptional results</p>
      </div>

      <div className="testimonials-carousel-container">
        <div className="testimonials-carousel">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="testimonial-card">
              <QuoteIcon />
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <Avatar
                  name={t.author}
                  src={t.image}
                  round
                  size="48"
                  textSizeRatio={2}
                  color="#FFD700"
                  fgColor="#000"
                />
                <div className="author-info">
                  <h4>{t.author}</h4>
                  <p>{t.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
