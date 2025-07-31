import React from "react";
import "./ServiceHome.css";

const ServiceHome = () => {
  return (
    <div className="card-container">
      <div className="card-body">
        <h2 className="card-title">Make things float in air</h2>
        <p className="card-description">
          Hover over this card to unleash the power of CSS perspective
        </p>
        <div className="card-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop"
            alt="thumbnail"
            className="card-image"
          />
        </div>
        <div className="card-buttons">
          <a href="https://twitter.com/mannupaaji" target="_blank" rel="noreferrer" className="card-link">
            Try now →
          </a>
          <button className="card-button">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceHome;
