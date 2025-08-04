import React from 'react';
import ServiceSection from '../../components/ServiceSection';
import { FaRadiationAlt, FaWind, FaBolt } from 'react-icons/fa';
import Faq from '../../components/Faq';

const NegativeEnergy = () => {
  return (
    <div>
      <ServiceSection
      title="Negative Energy Removal"
      description={[
        "Feeling drained, experiencing bad luck, or sensing dark energy in your surroundings? a master energy healer in Canada, provides powerful negative energy removal services to cleanse your aura, purify your space, and restore positive vibrations using ancient Vedic techniques.",
        "His proven energy cleansing methods have helped thousands break free from psychic attacks, emotional vampires, and environmental negativity through sacred mantras, space purification rituals, and personal energy shielding techniques."
      ]}
      imageSrc="/images/negativeenergy.jpg"
      highlights={[
        { icon: <FaRadiationAlt />, label: 'Energy Scan' },
        { icon: <FaWind />, label: 'Aura Cleanse' },
        { icon: <FaBolt />, label: 'Spiritual Recharge' },
      ]}
      solutions={[
        'Aura Cleansing & Energy Field Repair',
        'Home & Workplace Energy Purification',
        'Psychic Protection & Shielding',
        'Entity Removal & Spiritual Detox',
      ]}
      buttonText="Cleanse Your Energy Field"
      buttonLink="/contact"
    />
    <Faq/>
    </div>
  );
};

export default NegativeEnergy;
