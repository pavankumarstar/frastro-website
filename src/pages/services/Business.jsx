import React from 'react';
import ServiceSection from '../../components/ServiceSection';
import { FaChartLine, FaBriefcase, FaHandshake } from 'react-icons/fa';
import Faq from '../../components/Faq';

const Business = () => {
  return (
    <div>
      <ServiceSection
      title="Business Problem Solutions"
      description={[
        "Facing financial losses, partnership conflicts, or stagnation in your business? a renowned business astrologer in Canada, offers powerful Vedic remedies and strategic astrological guidance to overcome challenges, attract prosperity, and ensure long-term success.",
        "His proven business astrology solutions analyze your entrepreneurial horoscope to remove obstacles, improve cash flow, resolve disputes, and create cosmic alignment for growth, stability, and competitive advantage in your industry."
      ]}
      imageSrc="/images/businessproblem.jpg"
      highlights={[
        { icon: <FaChartLine />, label: 'Growth' },
        { icon: <FaBriefcase />, label: 'Stability' },
        { icon: <FaHandshake />, label: 'Partnerships' },
      ]}
      solutions={[
        'Financial Growth & Wealth Attraction',
        'Business Partnership Harmony',
        'Obstacle Removal & Success Strategies',
        'Competition Protection & Market Dominance',
      ]}
      buttonText="Fix Your Business Issues"
      buttonLink="/contact"
    />
    <Faq/>
    </div>
  );
};

export default Business;
