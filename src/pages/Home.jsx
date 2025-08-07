import React from 'react';
import './Home.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { HoverEffect } from '../components/Hover';
import ClientTestimonials from '../components/ClientTestimonials';
import Cards from '../components/Home/Cards';
import Content from '../components/Home/Content';
import {ThreeDMarquee } from '../components/ThreeDMarquee';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import SacredPooja from '../components/SacredPooja';
import AstrologerSection from '../components/Home/AstrologerSection';
import Faq from '../components/Faq';
import Carousell from '../components/Home/Carousell';

const Home = () => {
   const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="home">
       
        
        <Carousell/>
        
        {/* <div className='about-marquee'>
                        <ThreeDMarquee
                  images={[
                    "/images/as1.png",
                    "/images/as2.jpg",
                    "/images/as3.jpg",
                    "/images/as4.jpg",
                    "/images/as5.jpg",
                    "/images/as6.jpg",
                    "/images/as7.jpg",
                    "/images/as8.jpg",
                    "/images/as9.jpg",
                    "/images/as10.jpg",
                    "/images/as11.jpg",
                    "/images/as12.jpg"
                  ]}/>
              </div> */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* <Content
           mainImage='/images/as2.jpg'
           overlayImage='/images/as3.jpg'
           title='Know About Astrology'
           description={`It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it esdehas a more-or less normal distribution of letters.

As opposed to using 'Content here, content here', making it look likesdesdee readable English. Many desktop publishing packages and web page editors sdesnow use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will usdencover many web sites still in their web page editors sdesnow infancy.`}
           phone='+91 1800-124-105'
          /> */}
          
        </motion.div>
          <AstrologerSection/>
          <Cards/>
          <Faq/>
          <SacredPooja/>
          <ClientTestimonials/>
    </div>
  );
};

export default Home;