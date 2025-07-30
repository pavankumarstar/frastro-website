import React from 'react';
import ServiceSection from '../../components/ServiceSection';
import { FaMagic, FaShieldAlt, FaSun } from 'react-icons/fa';

const BlackMagic = () => {
  return (
    <ServiceSection
      title="Black Magic Removal"
      description={[
        "Experiencing unexplained misfortunes, sudden health issues, or negative energy in your life? a powerful spiritual healer in Canada, provides authentic Vedic black magic removal services to break dark spells, remove evil eye effects, and restore positive energy flow in your life.",
        "His proven spiritual remedies have helped thousands break free from black magic curses, psychic attacks, and negative energy attachments through powerful mantras, yagnas, and protective talismans blessed by divine energy."
      ]}
      imageSrc="/images/blackmagic.jpg"
      highlights={[
        { icon: <FaMagic />, label: 'Curse Removal' },
        { icon: <FaShieldAlt />, label: 'Protection' },
        { icon: <FaSun />, label: 'Positivity' },
      ]}
      solutions={[
        'Black Magic Detection & Removal',
        'Evil Eye & Negative Energy Cleansing',
        'Spiritual Protection & Aura Cleansing',
        'Vedic Rituals for Curse Removal',
      ]}
      buttonText="Protect Yourself Now"
      buttonLink="/contact"
    />
  );
};

export default BlackMagic;
