import React from "react";
import { motion } from "framer-motion";
import "./AstroSection.css";
import { useNavigate } from "react-router-dom";

const AstroSection = () => {
  const navigate = useNavigate();

    const handleReadMore = () => {
    navigate("/about"); // Navigates to About page
  };

  return (
    <div className="astro-wrapper">
      <div className="astro-left">
        <h1>
          We Can Use Astrology  <br />To Find Your Future
        </h1>
       <p className="leading-relaxed text-gray-700">
  With decades of experience in{" "}
  <span className="font-semibold text-orange-600"><b>Palm Specialist</b></span>,{" "}
  <span className="font-semibold text-purple-600">Black Magic Removal</span>, 
  and Palm Reading, <b>Astrologer Master Raj</b> has helped countless individuals 
  break free from unseen forces and uncover the secrets written in their palms.
  <br /><br />
  Whether you're trapped by negative energies, mysterious setbacks, or seeking 
  clarity through the lines on your hand, his <b>spiritual  Specialist</b> insight offers powerful 
  protection and peace. Each session is rooted in ancient wisdom, offering 
  personalized guidance for a better tomorrow.
</p>

        <ul>
          <li>🌞 Astrology is just a finger pointing at reality</li>
          <li>🌞 Millionaires don’t have astrologers, billionaires do</li>
          <li>🌞 It is not in the stars to hold our destiny but in ourselves.</li>
          <li>🌞 Astrology is like a gateway drug to a more cosmic world view.</li>
        </ul>
        <button onClick={handleReadMore}>Read More</button>
      </div>

      <div className="astro-right">
        <motion.img
          src="/images/about/homesection.jpg"
          alt="Astro Lady"
          className="astro-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Top-right floating planet */}
        {/* Top-right animated aura/starfield effect */}
{/* Top-right mystic swirl animation */}
<motion.div
  className="top-right-swirl"
  animate={{ rotate: [0, 360], opacity: [0.6, 1, 0.6] }}
  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
>
  <img src="/images/blackglow.png" alt="Mystic Swirl" />
</motion.div>


       

        {/* Bottom-left circle animation */}
        <motion.div
          className="circle-animate"
          animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default AstroSection;
