import React from "react";
import { useNavigate } from "react-router-dom";
import "./SacredPooja.css";

const poojaData = [
  {
    title: "Kali Maa Pooja",
    duration: "2.5 Hours",
    description:
      "Master Raj performs powerful rituals to invoke Goddess Kali for protection, strength, and the removal of negative energies—bringing peace, power, and transformation to your life.",
    tags: ["Protection", "Transformation"],
    image:
      "/images/pooja/Kalli.jpg",
  },
  {
    title: "Hanuman Pooja",
    duration: "2 Hours",
    description:
      "Master Raj invokes Lord Hanuman’s blessings to bring immense strength, courage, and protection from evil forces and harmful planetary influences.",
    tags: ["Strength", "Courage"],
    image:
      "/images/pooja/Hanmnau.jpg",
  },
  {
    title: "Ganesh Pooja",
    duration: "3 Hours",
    description:
      "Master Raj calls upon Lord Ganesha to remove life’s obstacles and to attract success, wisdom, and good fortune through divine rituals.",
    tags: ["Wisdom", "Success", "Prosperity"],
    image:
      "/images/pooja/Gansh.jpg",
  },
  {
    title: "Shiva Pooja",
    duration: "3 Hours",
    description:
      "Master Raj invokes Lord Shiva’s energy for spiritual awakening, inner peace, and destruction of negativity—bringing deep transformation and mental clarity.",
    tags: ["Peace", "Clarity", "Spiritual Growth"],
    image:
      "/images/pooja/Shiva.jpg",
  },
  {
    title: "Krishna Pooja",
    duration: "3 Hours",
    description:
      "Master Raj invokes Lord Krishna’s grace to bring love, joy, emotional healing, and harmony in personal relationships through sacred rituals.",
    tags: ["Love", "Joy", "Harmony"],
    image:
      "/images/pooja/Krishna.jpg",
  },
  {
    title: "Lakshmi Maa Pooja",
    duration: "2.5 Hours",
    description:
      "Master Raj performs sacred rituals to invoke Goddess Lakshmi for wealth, abundance, financial growth, and harmony in both personal and professional life.",
    tags: ["Wealth", "Abundance", "Harmony"],
    image:
      "/images/pooja/Lakashmi.jpg",
  },
];

const SacredPooja = () => {
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate("/contact");
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-3">
        <span>Sacred Pooja Services</span>
      </h2>
      <p className="text-center text-muted mb-4">
        Vedic rituals to align your stars and remove obstacles
      </p>

      {/* Horizontal Scroll for All Screens */}
      <div className="horizontal-scroll-cards">
        {poojaData.map((pooja, index) => (
          <div className="card h-100 shadow-sm scroll-card" key={index}>
            <img className="card-img-top" src={pooja.image} alt={pooja.title} />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{pooja.title}</h5>
              <p className="card-text">{pooja.description}</p>
              <div className="mb-2">
                {pooja.tags.map((tag, i) => (
                  <span key={i} className="badge badge-info mr-1">{tag}</span>
                ))}
              </div>
              <p className="text-muted"><small>{pooja.duration}</small></p>
              <button className="btn btn-primary mt-auto" onClick={handleBookClick}>
                Book Ritual
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SacredPooja;
