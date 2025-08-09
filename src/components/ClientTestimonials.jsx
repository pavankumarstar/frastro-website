import React from 'react';
import './ClientTestimonials.css';
import Avatar from 'react-avatar';


const ClientTestimonials = () => {
  const testimonials = [
    {
    text: "Master Raj reading revealed career opportunities I never would have considered. Within months, I found my true calling.",
    author: "Sarah Johnson",
    position: "Canada, Toronto",
    image: "https://randomuser.me/api/portraits/women/44.jpg", // ✅ sample avatar
    delay: "0s"
    },
    {
          text: "The relationship analysis helped me understand karmic patterns...",
    author: "Michael Chen",
    position: "Canada, Montreal",
    image: "https://randomuser.me/api/portraits/men/31.jpg", // ✅ another avatar
    delay: "0.2s"
    },
    {
      text: "Master Raj prediction about my financial situation came true to the month. The remedies he suggested made all the difference.",
      author: "Emily Rodriguez",
      position: "Canada , Calgary",
      image: "https://randomuser.me/api/portraits/women/27.jpg",
      delay: "0.4s"
    },
    {
      text: "Master Raj black magic removal changed my life. I was facing unexplained problems for months, but after his powerful remedies, everything began to clear up—just as he predicted. His guidance brought peace and protection back into my life.",
      author: "David Thompson",
      position: "Canada , Vancouver",
      image: "https://randomuser.me/api/portraits/men/23.jpg",
      delay: "0.6s"
    },
    {
      text: "I had almost given up hope of getting married due to constant delays and family obstacles. Master Raj guidance and astrological remedies worked wonders—within months, everything aligned, and my marriage was fixed smoothly.",
      author: "Lisa Park",
      position: "Canada , Edmonton",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      delay: "0.8s"
    },
    {
      text: "Master Raj spiritual healing brought me inner peace during the darkest phase of my life. His sessions helped me reconnect with my energy, clear negativity, and feel truly balanced for the first time in years.",
      author: "James Wilson",
      position: "Canada ,  Winnipeg",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      delay: "1s"
    }
  ];

//   const carouselTestimonials = [
//   { text: "Master Shiva's remedies changed my life—my career took off just weeks after his reading.", author: "Priya Desai", rating: 5 },
//   { text: "The vastu correction he suggested brought immediate peace to my home.", author: "Ravi Malhotra", rating: 5 },
//   { text: "His horoscope reading was incredibly accurate. I felt deeply understood.", author: "Nina Patel", rating: 5 },
//   { text: "Master Shiva helped me remove years of negative energy holding me back.", author: "Aarav Mehta", rating: 5 },
//   { text: "The gemstone recommendation brought clarity and confidence in my decision-making.", author: "Kavita Sharma", rating: 5 },
//   { text: "Every prediction has unfolded exactly as he said. He's truly gifted.", author: "Rajiv Nair", rating: 5 },
//   { text: "I was skeptical at first, but his spiritual guidance healed my relationship with my father.", author: "Meera S.", rating: 5 },
//   { text: "Astrology sessions with Master Shiva feel like therapy—he’s helped me reconnect with my soul.", author: "Aman Verma", rating: 5 }
// ];


  const QuoteIcon = () => (
    <svg className="quote-icon" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"/>
    </svg>
  );

  // const StarIcon = () => (
  //   <span className="star">★</span>
  // );

  return (
    <div className="testimonials-container">
      <div className="testimonials-background"></div>
      
      <div className="testimonials-content">
        <div className="testimonials-title">
          <h2>What Our Clients Say</h2>
          <p>Discover why businesses trust us to deliver exceptional results</p>
        </div>

        <div className="testimonials-carousel-container">
  <div className="testimonials-carousel">
    {[...testimonials, ...testimonials].map((testimonial, index) => (
      <div 
        key={index} 
        className="testimonial-card"
        style={{ '--delay': testimonial.delay }}
      >
        <QuoteIcon />
        <p className="testimonial-text">"{testimonial.text}"</p>
        <div className="testimonial-author">
          <Avatar 
            name={testimonial.author}
            src={testimonial.image}
            round={true}
            size="48"
            textSizeRatio={2}
            color="#FFD700"
            fgColor="#000"
          />
          <div className="author-info">
            <h4>{testimonial.author}</h4>
            <p>{testimonial.position}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>



        
      </div>
    </div>
  );
};

export default ClientTestimonials;