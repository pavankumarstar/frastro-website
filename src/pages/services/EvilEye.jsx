import React from 'react';
import ServiceSection from '../../components/ServiceSection';
import { FaEyeSlash, FaShieldAlt, FaWater } from 'react-icons/fa';

const EvilEye = () => {
  return (
    <ServiceSection
      title="Evil Eye Protection"
      description="Suffering from frequent bad luck or sudden health and wealth issues? Our Evil Eye protection rituals shield you from jealousy, envy, and harmful gazes."
      imageSrc="/images/evileye.jpg"
      highlights={[
        { icon: <FaEyeSlash />, label: 'Energy Shield' },
        { icon: <FaShieldAlt />, label: 'Spiritual Armor' },
        { icon: <FaWater />, label: 'Purification' },
      ]}
      solutions={[
        'Evil Eye Diagnosis',
        'Protection Rituals',
        'Daily Cleansing Guidance',
        'Family & Child Protection',
      ]}
      buttonText="Get Protected Now"
      buttonLink="/contact"
    />
  );
};

export default EvilEye;
