import React from 'react';
import ServiceSection from '../../components/ServiceSection';
import { FaHome, FaUsers, FaPeace } from 'react-icons/fa';

const FamilyProblems = () => {
  return (
    <ServiceSection
      title="Family Problem Solutions"
      description="Disputes and misunderstandings disrupting your family peace? Our astrological insights and remedies bring harmony, unity, and better communication to your home."
      imageSrc="/images/family.jpg"
      highlights={[
        { icon: <FaHome />, label: 'Harmony' },
        { icon: <FaUsers />, label: 'Bonding' },
        { icon: <FaPeace />, label: 'Peace' },
      ]}
      solutions={[
        'Parent-Child Conflict Resolution',
        'In-Law & Sibling Issues',
        'Elderly Support Remedies',
        'Energy Balance at Home',
      ]}
      buttonText="Bring Peace to Your Home"
      buttonLink="/contact"
    />
  );
};

export default FamilyProblems;
