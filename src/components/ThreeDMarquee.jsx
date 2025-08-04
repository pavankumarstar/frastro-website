"use client";
import { motion } from "framer-motion";
import "./ThreeDMarquee.css";

export const ThreeDMarquee = ({ images }) => {
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div className="marquee-wrapper">
      <div className="marquee-center">
        <div className="marquee-container">
          <div className="marquee-grid">
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 100 : -100 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                key={colIndex}
                className="marquee-column"
              >
                <GridLineVertical offset="80px" />
                {subarray.map((image, imageIndex) => (
                  <div className="marquee-image-wrapper" key={imageIndex}>
                    <GridLineHorizontal offset="20px" />
                    <motion.img
                      whileHover={{ y: -10 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      src={image}
                      alt={`Image ${imageIndex + 1}`}
                      className="marquee-image"
                      width={970}
                      height={700}
                      loading="lazy"
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({ offset = "200px" }) => (
  <div
    className="grid-line-horizontal"
    style={{
      "--offset": offset,
    }}
  />
);

const GridLineVertical = ({ offset = "150px" }) => (
  <div
    className="grid-line-vertical"
    style={{
      "--offset": offset,
    }}
  />
);
