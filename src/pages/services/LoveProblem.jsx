import React from 'react';
import ServiceSection from '../../components/ServiceSection';
import { FaHeart, FaComments, FaHandsHelping } from 'react-icons/fa';

const LoveProblem = () => {
  return (
    <ServiceSection
      title="Couple Disputes Solutions"
      description={[
        "Struggling with love life challenges? A renowned love astrologer in Canada, offers powerful Vedic astrology solutions to attract your soulmate, heal broken relationships, and create lasting romantic connections through cosmic alignment.",
        "His proven love astrology methods analyze your birth chart's romantic potential, remove karmic blocks, and enhance Venus energy to help you find true love, improve existing relationships, and experience deeper emotional fulfillment."
      ]}
      imageSrc="/images/loveproblem.jpg"
      highlights={[
        { icon: <FaHeart />, label: 'Healing' },
        { icon: <FaComments />, label: 'Communication' },
        { icon: <FaHandsHelping />, label: 'Understanding' }
      ]}
      solutions={[
        'Communication Breakdown Repair',
        'Trust & Intimacy Restoration',
        'Anger & Resentment Removal',
        'Third-Party Interference Solutions'
      ]}
      buttonText="Resolve Your Relationship Conflicts"
      buttonLink="/contact"
    />
  );
};

export default LoveProblem;
