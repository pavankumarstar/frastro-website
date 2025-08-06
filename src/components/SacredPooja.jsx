import React from "react";
import "./SacredPooja.css";
import { useNavigate } from "react-router-dom";

const poojaData = [
  {
    title: "Kali Maa Pooja",
    duration: "2.5 Hours",
    description:
      "Psychic performs powerful rituals to invoke Goddess Kali for protection, strength, and the removal of negative energies—bringing peace, power, and transformation to your life.",
    tags: ["Protection", "Transformation"],
    image: "https://i.pinimg.com/736x/61/c1/7a/61c17a6d068797c42fb5453d415ea671.jpg",
  },
  {
    title: "Hanuman Pooja",
    duration: "2 Hours",
    description:
      "Psychic invokes Lord Hanuman’s blessings to bring immense strength, courage, and protection from evil forces and harmful planetary influences.",
    tags: ["Strength", "Courage"],
    image: "https://i.pinimg.com/736x/db/2d/b5/db2db5960b3ffea074e6c6dec6bd6746.jpg",
  },
  {
    title: "Ganesh Pooja",
    duration: "3 Hours",
    description:
      "Psychic calls upon Lord Ganesha to remove life’s obstacles and to attract success, wisdom, and good fortune through divine rituals.",
    tags: ["Wisdom", "Success", "Prosperity"],
    image: "https://i.pinimg.com/736x/eb/87/59/eb875938f51cbba3d5223f7f9c51efe6.jpg",
  },
  {
    title: "Shiva Pooja",
    duration: "3 Hours",
    description:
      "Psychic invokes Lord Shiva’s energy for spiritual awakening, inner peace, and destruction of negativity—bringing deep transformation and mental clarity.",
    tags: ["Peace", "Clarity", "Spiritual Growth"],
    image: "https://i.pinimg.com/736x/16/21/24/16212440d29c57c25920cd7945ee8498.jpg",
  },
  {
    title: "Krishna Pooja",
    duration: "3 Hours",
    description:
      "Psychic invokes Lord Krishna’s grace to bring love, joy, emotional healing, and harmony in personal relationships through sacred rituals.",
    tags: ["Love", "Joy", "Harmony"],
    image: "https://i.pinimg.com/736x/1e/ce/b6/1eceb6e7789284d8300ce8745ce6ef68.jpg",
  },
];



const SacredPooja = () => {
    const navigate = useNavigate();

  const handleBookClick = () => {
    navigate("/contact"); // this should match your route
  };

  return (
    <div className="sacred-pooja-wrapper">
      <h2 className="section-title">
        <span>Sacred Pooja</span> Services
      </h2>
      <p className="section-subtitle">
        Vedic rituals to align your stars and remove obstacles
      </p>

      <div className="pooja-card-container">
        {poojaData.map((pooja, index) => (
          <div className="pooja-card" key={index}>
            <div className="pooja-image">
              <img src={pooja.image} alt={pooja.title} />
              <div className="pooja-tags">
                {pooja.tags.map((tag, i) => (
                  <span key={i} className="pooja-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="pooja-content">
              <div className="pooja-duration">
                <span className="dot"></span> {pooja.duration}
              </div>
              <h3>{pooja.title}</h3>
              <p>{pooja.description}</p>
              <button className="book-btn" onClick={handleBookClick}>Book Ritual</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SacredPooja;
