import React from 'react';
import ServiceSection from '../../components/ServiceSection';
import { FaHandPaper, FaGem, FaBookOpen } from 'react-icons/fa';

const PalmReading = () => {
  return (
    <ServiceSection
      title="Palm Reading Services"
      description="What does your palm say about your life? Discover your fate, love, health, and career insights through professional palmistry readings based on ancient Vedic science."
      imageSrc="/images/palmreading.jpg"
      highlights={[
        { icon: <FaHandPaper />, label: 'Life Line Analysis' },
        { icon: <FaGem />, label: 'Fate Insights' },
        { icon: <FaBookOpen />, label: 'Personality Decode' },
      ]}
      solutions={[
        'Love & Marriage Lines',
        'Health & Wealth Prediction',
        'Career and Success Paths',
        'Customized Palm Reports',
      ]}
      buttonText="Get Your Palm Read"
      buttonLink="/contact"
    />
  );
};

export default PalmReading;
