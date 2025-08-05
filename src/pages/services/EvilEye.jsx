import React from 'react';
import ServiceSection from '../../components/ServiceSection';
import { FaEyeSlash, FaShieldAlt, FaWater } from 'react-icons/fa';
import Faq from '../../components/Faq';
import SectionService from '../../components/Service/SectionService';

const EvilEye = () => {
  return (
 <div>
       <SectionService 
  buttonLabels={["The Lines", "The Hands", "The Fingers", "Scan your palm", "Read your palm"]}
  paragraph1="First paragraph text here..."
  imageSrc="/images/palm-reading.png"
  paragraph2="Second paragraph content..."
  paragraph3="Third paragraph content..."
/>
    <Faq/>
 </div>
  );
};

export default EvilEye;
