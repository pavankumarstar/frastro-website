import React from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import {ThreeDMarquee } from '../components/ThreeDMarquee';
import ClientTestimonials from '../components/ClientTestimonials';
import Cards from '../components/Home/Cards';
import Content from '../components/Home/Content';
import Faq from '../components/Faq';

const Home = () => {
  return (
    <div className="home">
      <div className="about-marquee">
        <ThreeDMarquee
          images={[
            '/images/as1.png',
            '/images/as2.jpg',
            '/images/as3.jpg',
            '/images/as4.jpg',
            '/images/as5.jpg',
            '/images/as6.jpg',
            '/images/as7.jpg',
            '/images/as8.jpg',
            '/images/as9.jpg',
            '/images/as10.jpg',
            '/images/as11.jpg',
            '/images/as12.jpg',
          ]}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Content
          mainImage="/images/as2.jpg"
          title="Know About Astrology"
          description={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.

As opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.`}
          phone="+91 1800-124-105"
        />
      </motion.div>

      <Cards />
      <Faq/>
      <ClientTestimonials />
    </div>
  );
};

export default Home;
