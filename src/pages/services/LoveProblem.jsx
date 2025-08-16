import React from 'react';

import Faq from '../../components/Faq';
import SectionService from '../../components/Service/SectionService';

import ClientTestimonials from '../../components/ClientTestimonials';
const buttonLabels = [
  'Common Love Issues',
  'Astrological Reasons',
  'Spiritual Remedies',
  'Rekindle Your Love',
];

const contentData = [
  {
    header: 'Common Love Issues',
    paragraph1: 'Breakups, misunderstandings, loss of spark, or interference from third parties.Common Ex love back solution astrologer that astrology can address include communication breakdowns, lack of interest, frequent arguments, family objections, inter-caste marriage issues, long-distance relationship challenges, one-sided love, and compatibility issues. Astrology analyzes planetary positions, particularly Venus, Mars, and the 7th house, to understand the root causes of these problems and offer remedies. ',
    imageSrc: 'https://astrotalk.com/astrology-blog/wp-content/uploads/2023/07/shutterstock_323647400.jpg',
    paragraph2: 'Love problems can create emotional distress and confusion. Poor communication can lead to misunderstandings and emotional distance. Mercury, the planet of communication, is often cited as a key factor. Its placement and aspects in the birth chart can reveal potential communication challenges. ',
    paragraph3: 'They often arise unexpectedly and require delicate resolution.A partner losing interest can stem from various factors, including a lack of passion or a decline in the initial attraction. Venus, the planet of love and beauty, is crucial here. Its placement can indicate the level of devotion and passion in a relationship. ',
  },
  {
    header: 'Astrological Reasons',
    paragraph1: 'Unfavorable Venus or Mars, Mangal dosha, or Rahu-Ketu influence can cause love turbulence.Ex love back solution astrologer suggests that planetary positions and aspects in ones birth chart can reveal potential reasons for love and relationship problems. These can include issues like delayed marriage, relationship conflicts, or even attracting unhealthy relationships. Specific planetary placements, such as Saturns influence on the 5th or 7th house, Marss position in certain houses, or the influence of Rahu or Ketu, can indicate potential challenges. ',
    imageSrc: 'https://whitelotusspirituality.com/wp-content/webp-express/webp-images/uploads/2025/06/Untitled-design-89.png.webp',
    paragraph2: 'Your 5th and 7th house reveal deep insights into your love destiny.This condition arises when Mars is placed in certain houses in the birth chart and can lead to conflicts and disagreements in relationships. The positions and aspects of planets like Venus (love, relationships), Mars (passion, energy), Saturn (delays, obstacles), and Rahu/Ketu (illusion, karmic influences) can significantly impact romantic life. ',
    paragraph3: 'Kundali mismatches or bad transits also impact relationships.Reciting mantras, particularly those related to Venus, can attract positive energy and strengthen relationships. Specific actions like wearing gemstones, performing pujas (rituals), or making donations can appease malefic planets and improve relationships. ',
  },
  {
    header: 'Spiritual Remedies',
    paragraph1: 'Master Raj offer love problem solutions through mantra chanting, yantras, and relationship rituals.Astrology offers several spiritual remedies for love problems, including mantra recitation, worship of deities, and fasting, all aimed at attracting positive energy and resolving relationship issues. Analyzing planetary positions in ones birth chart can reveal the root cause of problems like lack of communication, misunderstandings, or family interference, and suggest appropriate remedies. ',
    imageSrc: '/images/love/four1.jpg',
    paragraph2: 'Performing the right pooja at the right time can remove obstacles in love.Worshipping deities like Shiva-Parvati, Lakshmi-Vishnu, or Radha-Krishna is recommended to enhance love and relationships Chanting specific mantras, particularly those related to Venus (the planet of love) or deities associated with love, can attract positive energy and blessings, according to the Times of India. ',
    paragraph3: 'Ex love back solution astrologer remedies are created after detailed chart analysis.If these planets are negatively influencing your relationship, it can lead to aggression, arguments, or family objections. Remedies may include donating red items on Tuesdays or seeking blessings from Lord Hanuman, according to Astroscience. ',
  },
  {
    header: 'Rekindle Your Love',
    paragraph1: 'With Ex love back solution astrologer support, you can rebuild trust, harmony, and affection. Master Raj can offer insights and remedies for rekindling love and resolving love-related problems by examining planetary positions, particularly Venus, and other relevant houses in a birth chart. It can help understand compatibility, identify potential obstacles, and suggest personalized solutions to improve relationships. ',
    imageSrc: '/images/love/four2.jpg',
    paragraph2: 'Get guidance to reunite with your partner or attract new love. Astrological remedies can be used to overcome obstacles and reunite with a lost love by understanding the influence of planets like Venus and Mars. Specific planetary combinations and placements can highlight potential obstacles in a relationship, such as communication issues, lack of intimacy, or external influences. ',
    paragraph3: 'We help you move from heartbreak to healing using divine wisdom. An astrologer can provide tailored advice based on an individuals birth chart, offering insights into relationship patterns and suggesting personalized solutions for improvement. ',
  },
];
const LoveProblem = () => {
  return (
    <div>
        <SectionService buttonLabels={buttonLabels} contentData={contentData} />
    <Faq/>
    <ClientTestimonials />
    </div>
  );
};

export default LoveProblem;
