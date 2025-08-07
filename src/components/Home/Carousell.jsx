import React from 'react';

import image1 from '../../assets/images/love-black.jpg';
import image2 from '../../assets/images/palm-reading.jpg';
import image3 from '../../assets/images/spiritual-healing.jpg';

const Carousell = () => {
  return (
    <div className="container-fluid p-0">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
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

        {/* Optional Prev/Next Controls */}
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousell;
