import React from 'react';

import image1 from '../../assets/images/carousel/one1.jpg';
import image2 from '../../assets/images/carousel/one2.jpg';
import image3 from '../../assets/images/carousel/one3.jpg';

import './Carousell.css'; // Assuming you have some styles for the carousel

const Carousell = () => {
  return (
    <div className="container-fluid p-0">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"   // autoplay speed
        data-bs-pause="hover"     // pause on hover
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100 img-fluid" src={image1} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src={image2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100 img-fluid" src={image3} alt="Third slide" />
          </div>
        </div>

        {/* Prev Button */}
        <button
          className="carousel-control-prev no-bg"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next no-bg"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default Carousell;
