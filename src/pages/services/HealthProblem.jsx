import React from 'react';
import ServiceSection from '../../components/ServiceSection';
import { FaHeartbeat, FaLeaf, FaMedkit } from 'react-icons/fa';

const HealthProblem = () => {
  return (
    <ServiceSection
      title="Health Problem Remedies"
      description={[
        "Struggling with chronic health issues or unexplained ailments? a renowned energy healer in Canada, offers powerful Vedic remedies and spiritual healing solutions to address the root causes of health problems and restore your physical and mental wellbeing.",
        "His holistic health solutions combine astrological insights with ancient healing practices to help thousands overcome persistent health challenges, boost immunity, and achieve balanced wellbeing through cosmic alignment and energy healing."
      ]}
      imageSrc="/images/healthproblem.jpg"
      highlights={[
        { icon: <FaHeartbeat />, label: 'Vitality' },
        { icon: <FaLeaf />, label: 'Natural Balance' },
        { icon: <FaMedkit />, label: 'Spiritual Healing' },
      ]}
      solutions={[
        'Chronic Disease Remedies',
        'Mental Health & Anxiety Solutions',
        'Energy Healing & Chakra Balancing',
        'Karmic Health Issue Resolution',
      ]}
      buttonText="Start Your Healing Journey"
      buttonLink="/contact"
    />
  );
};

export default HealthProblem;
