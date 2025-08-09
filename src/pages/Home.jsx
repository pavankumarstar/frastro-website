import React, { useState } from 'react';
import './Home.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ClientTestimonials from '../components/ClientTestimonials';
import Cards from '../components/Home/Cards';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import SacredPooja from '../components/SacredPooja';
import Faq from '../components/Faq';
import Carousell from '../components/Home/Carousell';
import AstroSection from '../components/Home/AstroSection';
import Header from '../components/Header';

const Home = ({ showHeader }) => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [highlight, setHighlight] = useState("");

  return (
    <>
      {showHeader && <Header highlight={highlight} />}

      <div className="home">
        <div
          onMouseEnter={() => setHighlight("home")}
          onMouseLeave={() => setHighlight("")}
        >
          <Carousell />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            onMouseEnter={() => setHighlight("about")}
            onMouseLeave={() => setHighlight("")}
          >
            <AstroSection />
          </div>
        </motion.div>

        <div
          onMouseEnter={() => setHighlight("services")}
          onMouseLeave={() => setHighlight("")}
        >
          <Cards />
        </div>

        <Faq />
        <SacredPooja />
        <ClientTestimonials />
      </div>
    </>
  );
};

export default Home;
