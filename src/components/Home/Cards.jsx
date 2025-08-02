import React from "react";
import "./Cards.css"; // assume this file contains the styles below

const items = [
  { title: "Love Marriage", img: "/images/cards/love-marriage.jpg" },
  { title: "Love Problem", img: "/images/cards/love-problem.jpg" },
  { title: "Black Magic Removal", img: "/images/cards/black-magic.jpg" },
  { title: "Black Eye", img: "/images/cards/black-eye.jpg" },
  { title: "Business Problem", img: "/images/cards/business-problem.jpg" },
  { title: "Family Problem", img: "/images/cards/family-problem.jpg" },
  { title: "Negative Energy", img: "/images/cards/negative.jpg" },
  { title: "Plam Reading", img: "/images/cards/plamreading.jpg" },
  { title: "Tarot Reading", img: "/images/cards/Tarot-reading.jpg" },
  { title: "Health Problem", img: "/images/healthproblem.jpg" },
];

const Cards = () => {
  return (
    <div className="cards-wrapper">
      <div className="cards-header">
        <div className="header-text">
          <h1 className="cards-title">Feature Services</h1>
          <p className="cards-description">Astrology is Just a Finger Pointing at Reality</p>
        </div>
      </div>
      <div className="cards-grid">
        {items.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-media">
              <img src={item.img} alt={item.title} loading="lazy" />
              <div className="card-overlay">
                <div className="overlay-content">
                  <h2>{item.title}</h2>
                  <button className="learn-btn">Learn More →</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
