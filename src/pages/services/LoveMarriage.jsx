import React from 'react';
import ServiceSection from '../../components/ServiceSection';
import { FaRing, FaHeart, FaBalanceScale } from 'react-icons/fa';

const LoveMarriage = () => {
  return (
    <ServiceSection
      title="Love Marriage Solutions"
      description={[
        "Facing obstacles in your love marriage journey? a trusted Indian astrologer in Canada, offers powerful Vedic remedies to overcome family opposition, caste barriers, and karmic challenges preventing your union with your beloved.",
        "His specialized love marriage solutions have helped thousands of couples unite despite all odds, with proven astrological remedies to remove barriers, gain family approval, and ensure a harmonious married life blessed with cosmic approval."
      ]}
      imageSrc="/images/lovemarriage.jpg"
      highlights={[
        { icon: <FaRing />, label: 'Marriage Alignment' },
        { icon: <FaHeart />, label: 'Love Support' },
        { icon: <FaBalanceScale />, label: 'Family Acceptance' },
      ]}
      solutions={[
        'Family Approval & Acceptance Remedies',
        'Inter-caste/Interfaith Marriage Solutions',
        'Love Marriage Astrological Consultation',
        'Removal of Love Marriage Obstacles',
      ]}
      buttonText="Unite with Your Partner"
      buttonLink="/contact"
    />
  );
};

export default LoveMarriage;
