import React from 'react';

import Faq from '../../components/Faq';
import SectionService from '../../components/Service/SectionService';
import ClientTestimonials from '../../components/ClientTestimonials';


const buttonLabels = [
  'What is Evil Eye?',
  'Symptoms & Impact',
  'Astrological Remedies',
  'Protective Measures',
];

const contentData = [
  {
    header: 'What is Evil Eye?',
    paragraph1: 'The Evil Eye, or “Drishti”, is a harmful gaze that brings misfortune, jealousy, or sickness. In astrology, its seen as a negative energy that can disrupt ones aura and lead to discomfort, misfortune, or even illness. While not a literal eye, it represents evil eye problems projected onto someone, potentially impacting their physical, emotional, mental, and even spiritual well-being. ',
    imageSrc: '/images/eye/six1.jpg',
    paragraph2: ' Master Raj It often comes from those who unconsciously or consciously emit negative energy due to envy. Every culture has a different concoction or definition of this term. Not to mention people and customs differ how they deal with this situation. But, whatever a non-believer may say, he/she will ultimately succumb and start believing for a reason.',
    paragraph3: 'This ancient belief has roots in many cultures and is recognized in Vedic astrology.There are innumerable treatises in Vedic Astrology where envy, black eye, evil eye and many other methods of getting ill effects from people around are mentioned. Some of them may not be valid universally or none of these rules may stay true',
  },
  {
    header: 'Symptoms & Impact',
    paragraph1: 'Common signs include headaches, sudden illness, irritability, or misfortune without reason.cultures where a persons negative gaze or envy can negatively impact anothers well-being. Symptoms attributed to the evil eye can range from physical ailments to emotional distress and disruptions in daily life. Sudden fatigue, unexplained illnesses, headaches, stomach problems, sleep disturbances, and even physical pain in various parts of the body are cited as potential physical manifestations',
    imageSrc: '/images/eye/six2.jpg',
    paragraph2: 'Children may cry excessively, and adults may feel mentally disturbed.Anxiety, depression, feelings of paranoia, difficulty concentrating, and a general sense of unease or negativity are also considered signs. ',
    paragraph3: 'Prolonged exposure can affect success, harmony, and personal relationships.Struggles with relationships, financial setbacks, and obstacles in career or business ventures are sometimes linked to the evil eyes influence. ',
  },
  {
    header: 'Astrological Remedies',
    paragraph1: 'Our Master Raj use salt rituals, lemon-chili techniques, and black thread remedies. spiritual practices, symbolic rituals, and gemstone recommendations. These remedies aim to neutralize negative energy and protect individuals from the perceived harmful effects of the evil eye. This ritual involves using items like mustard seeds, red chilies, rock salt, or coconuts, circling them around the affected person and then discarding or burning them. ',
    imageSrc: '/images/eye/six3.jpg',
    paragraph2: 'Special poojas like Nazar Dosh Nivaran help cleanse the aura and restore balance.Reciting protective mantras like the Hanuman Chalisa or Durga Kavach daily is believed to strengthen the aura and provide spiritual protection. Black thread, often worn around the ankle, or amulets with the OM symbol or evil eye bead are used to deflect negative energy. ',
    paragraph3: 'Mantras such as the Hanuman Chalisa and Durga Stotra are also effective. Placing a small black dot behind the ear or on the forehead, particularly for children, is a common remedy. Vastu Shastra suggests using rock salt for purification, strategically placing mirrors to deflect negativity, and hanging lemon and chilies to ward off evil forces. ',
  },
  {
    header: 'Protective Measures',
    paragraph1: 'Using protective symbols like the "Nazar Battu", or wearing black beads helps ward off evil.The benefits of shielding yourself from the Evil Eye extend far beyond emotional well-being. When you are protected from harmful energies you often experience improved mental clarity healthier relationships better decision-making & enhanced luck. Evil Eye protection is primary helpful when used alongside remedies found in Kundli Dosha corrections or health horoscope understands. ',
    imageSrc: 'https://static.toiimg.com/thumb/msid-116366537,imgsize-30312,width-400,resizemode-4/116366537.jpg',
    paragraph2: 'Daily chanting, spiritual baths, and lighting camphor at home are powerful preventives.In Vedic astrology some planetary doshas or combinations can attract negative vibrations primary during periods like Sade Sati or Rahu-Ketu dasha. With the right Evil Eye protection you are less vulnerable to sudden losses accidents or misunderstandings in relationships.',
    paragraph3: 'Stay positive and protected with personalized astrological advice.It acts like a spiritual firewall absorbing & redirecting energy that does not belong to you. For individuals going through critical life phases like marriage planning career changes or business ventures applying these protection methods can restore energetic balance & stability.',
  },
];
const EvilEye = () => {
  return (
 <div>
      <SectionService buttonLabels={buttonLabels} contentData={contentData} />
    <Faq/>
    <ClientTestimonials/>
 </div>
  );
};

export default EvilEye;
