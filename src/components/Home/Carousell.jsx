import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // must import styles

import image1 from "../../assets/images/carousel/one1.jpg";
import image2 from "../../assets/images/carousel/one2.jpg";
import image3 from "../../assets/images/carousel/one3.jpg";


const Carousell = () => {
  return (
    <div className="carousel-container">
      <Carousel
        autoPlay
        infiniteLoop
        interval={2000}     // autoplay speed
        showArrows={true}   // left/right arrows
        showThumbs={false}  // hide bottom thumbnails
        showStatus={false}  // hide "1/3" status
        stopOnHover={true}  // pause when hovering
        swipeable={true}    // allow swipe on mobile
        emulateTouch={true} // emulate touch on desktop
      >
        <div>
          <img src={image1} alt="First slide" />
        </div>
        <div>
          <img src={image2} alt="Second slide" />
        </div>
        <div>
          <img src={image3} alt="Third slide" />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousell;
