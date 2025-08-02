"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./background.css";

const beams = [
  { initialX: 10, translateX: 10, duration: 7, repeatDelay: 3, delay: 2 },
  { initialX: 600, translateX: 600, duration: 3, repeatDelay: 3, delay: 4 },
  { initialX: 100, translateX: 100, duration: 7, repeatDelay: 7, className: "beam-thin" },
  { initialX: 400, translateX: 400, duration: 5, repeatDelay: 14, delay: 4 },
  { initialX: 800, translateX: 800, duration: 11, repeatDelay: 2, className: "beam-thick" },
  { initialX: 1000, translateX: 1000, duration: 4, repeatDelay: 2, className: "beam-medium" },
  { initialX: 1200, translateX: 1200, duration: 6, repeatDelay: 4, delay: 2, className: "beam-thin" },
];

const Background = ({ children, className = "" }) => {
  const containerRef = useRef(null);
  const parentRef = useRef(null);

  return (
    <div ref={parentRef} className={`background-wrapper ${className}`}>
      {/* beams layer */}
      <div className="beams-container" aria-hidden="true">
        {beams.map((beam, idx) => (
          <Beam
            key={`beam-${idx}`}
            beamOptions={beam}
            parentRef={parentRef}
            containerRef={containerRef}
          />
        ))}
        <div ref={containerRef} className="beam-shadow" />
      </div>

      {/* foreground content: anything you pass in sits on top */}
      <div className="background-foreground">{children}</div>
    </div>
  );
};

export default Background;

/* Beam + Explosion unchanged from your version */
const Beam = ({ beamOptions = {}, parentRef, containerRef }) => {
  const beamRef = useRef(null);
  const [collision, setCollision] = useState({ detected: false, coordinates: null });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);

  useEffect(() => {
    const checkCollision = () => {
      if (
        !cycleCollisionDetected &&
        beamRef.current &&
        containerRef.current &&
        parentRef.current
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX = beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({ detected: true, coordinates: { x: relativeX, y: relativeY } });
          setCycleCollisionDetected(true);
        }
      }
    };

    const interval = setInterval(checkCollision, 50);
    return () => clearInterval(interval);
  }, [cycleCollisionDetected, containerRef]);

  useEffect(() => {
    if (collision.detected) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);
      setTimeout(() => setBeamKey((prev) => prev + 1), 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={`beam ${beamOptions.className || ""}`}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`explosion-${collision.coordinates.x}-${collision.coordinates.y}`}
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Explosion = (props) => {
  const sparks = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={`explosion`}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="explosion-flash"
      />
      {sparks.map((spark) => (
        <motion.span
          key={spark.id}
          initial={{ x: 0, y: 0, opacity: 1 }}
          animate={{ x: spark.directionX, y: spark.directionY, opacity: 0 }}
          transition={{ duration: Math.random() * 1.5 + 0.5 }}
          className="explosion-spark"
        />
      ))}
    </div>
  );
};
