import React from 'react';
import './About.css';
import FAQSection from '../components/FAQSection';
// import { Boxes } from '../components/Boxes';

// import { ThreeDMarquee } from '../components/Marquee';
// import { Boxes } from '../components/Boxes';


const About = () => {
  return (
    <div className="">
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
      {/* <Boxes/> */}
      <section className="faq-section">
       <FAQSection />
      </section>
    </div>
  );
};

export default About;
