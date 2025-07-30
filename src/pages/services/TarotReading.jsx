import React from 'react';
import ServiceSection from '../../components/ServiceSection';
import { FaStar, FaMoon, FaQuestionCircle } from 'react-icons/fa';

const TarotReading = () => {
  return (
    <ServiceSection
      title="Tarot Card Reading"
      description={[
        "Seeking divine guidance for your life path? tarot card readings that reveal hidden truths, illuminate opportunities, and provide spiritual direction. His intuitive interpretations combine ancient wisdom with psychic insight to help you navigate life's challenges.",
        "Through the mystical tarot, he accesses cosmic knowledge to provide clarity on love, career, finances, and spiritual growth. His readings have helped thousands gain perspective, make empowered decisions, and understand their soul's journey."
      ]}
      imageSrc="/images/tarotreading.jpg"
      highlights={[
        { icon: <FaStar />, label: 'Clarity' },
        { icon: <FaMoon />, label: 'Intuition' },
        { icon: <FaQuestionCircle />, label: 'Guidance' },
      ]}
      solutions={[
        'Celtic Cross (Comprehensive Life Reading)',
        'Love & Relationship Spread',
        'Career Path & Financial Guidance',
        'Spiritual Growth & Karmic Insight',
      ]}
      buttonText="Book a Tarot Session"
      buttonLink="/contact"
    />
  );
};

export default TarotReading;
