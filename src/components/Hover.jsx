import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "./Hover.css";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={`hover-grid ${className}`}>
      {items.map((item, idx) => (
        <div
          key={item?.link}
          className="hover-card-wrapper"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                className="hover-image-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: 1.03 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              />
            )}
          </AnimatePresence>

          <a href={item?.link}>
            <Card>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </a>
        </div>
      ))}
    </div>
  );
};

export const Card = ({ children, className }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-inner">{children}</div>
    </div>
  );
};

export const CardTitle = ({ children, className }) => {
  return <h4 className={`card-title ${className}`}>{children}</h4>;
};

export const CardDescription = ({ children, className }) => {
  return <p className={`card-description ${className}`}>{children}</p>;
};
