import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Carousel.css";

const Carousel = ({
  images = [],
  autoplay = true,
  overlay = true,
  overlayClass = "",
  direction = "up",
  children,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    const loadImages = () => {
      const promises = images.map((img) => {
        return new Promise((resolve, reject) => {
          const i = new Image();
          i.src = img;
          i.onload = () => resolve(img);
          i.onerror = () => reject(img);
        });
      });

      Promise.all(promises)
        .then(setLoadedImages)
        .catch((err) => console.error("Image load error:", err));
    };

    loadImages();
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);

    let interval;
    if (autoplay) {
      interval = setInterval(handleNext, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [autoplay, loadedImages]);

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev + 1 === images.length ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 1 < 0 ? images.length - 1 : prev - 1
    );
  };

  const slideVariants = {
    initial: {
      scale: 0.9,
      opacity: 0,
      rotateX: 45,
    },
    animate: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exitUp: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.6 },
    },
    exitDown: {
      opacity: 0,
      y: "100%",
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="carousel-container">
      {overlay && <div className={`carousel-overlay ${overlayClass}`} />}
      {children && <div className="carousel-content">{children}</div>}

      {loadedImages.length > 0 && (
        <AnimatePresence>
          <motion.img
  key={currentIndex}
  src={loadedImages[currentIndex]}
  className="carousel-image"
  initial="initial"
  animate="animate"
  exit={direction === "up" ? "exitUp" : "exitDown"}
  variants={slideVariants}
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  onDragEnd={(e, info) => {
    if (info.offset.x < -50) handleNext();     // swipe left
    if (info.offset.x > 50) handlePrev();      // swipe right
  }}
/>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Carousel;
