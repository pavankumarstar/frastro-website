import React from 'react';

import Faq from '../../components/Faq';
import SectionService from '../../components/Service/SectionService';
import ClientTestimonials from '../../components/ClientTestimonials';

const buttonLabels = [
  'Health and Astrology',
  'Planetary Causes',
  'Healing Remedies',
  'Strengthen Your Health',
];

const contentData = [
  {
    header: 'Health and Astrology',
    paragraph1: 'Master Raj reveals hidden health issues through your birth chart. Astrology suggests that planets and their positions in a birth chart can indicate potential health issues. The 6th, 8th, and 12th houses are particularly relevant, with the 6th house associated with diseases and the immune system, the 8th house with longevity and serious health challenges, and the 12th house with mental health and long-term recovery. Planets like the Sun, Moon, Mars, and Saturn are also linked to specific body parts and systems, and their alignments can signal potential health problems. ',
    imageSrc: 'https://www.indastro.com/img/upload/16697213741533895343Medical-Astrolog.jpg',
    paragraph2: 'Each planet governs parts of the body — affliction leads to specific diseases. Medical astrology remedies is associated with certain body parts and systems. For example, the Sun governs the heart, the Moon influences mental health, and Mars is linked to blood and muscles. ',
    paragraph3: 'Predictive astrology can help in early diagnosis and prevention.The strength of the ascendant (rising sign) and its ruling planet can indicate overall health and disease resistance. ',
  },
  {
    header: 'Planetary Causes',
    paragraph1: 'Malefic Mars causes accidents, Saturn delays healing, Rahu causes addiction.planetary positions and aspects in ones birth chart are believed to indicate potential health issues. Different planets are associated with specific body parts and systems, and their placement and strength can suggest vulnerabilities or predispositions to certain ailments.',
    imageSrc: 'https://www.namoastro.com/blog/wp-content/uploads/2024/01/9-Planets-Associated-Diseases-and-Astrological-Remedies-For-Prevention-1200x900.png',
    paragraph2: 'The 6th, 8th, and 12th houses in your chart reflect chronic health issues.Sun is linked to the heart and vitality, while the Moon is associated with mental health and emotions. Malefic planets like Mars and Saturn are often seen as indicators of potential health challenges, while benefic planets like Jupiter are generally associated with good health. ',
    paragraph3: 'Dasha periods reveal the timing and severity of Medical astrology remedies.When a planet is negatively aspected by another planet, it can indicate a weakness or vulnerability in the area of health it governs. ',
  },
  {
    header: 'Healing Remedies',
    paragraph1: 'Mantras, yantras, and specific poojas restore health and reduce suffering.In the event that you are facing health issues since long and cant discover a cure or regardless of whether a relative of yours is confronting a medical issue, at that point we are here to reveal to you some visionary tips for a healthy body. By adhering to these couple of basic directions, one can get a sound actual wellbeing alongside a psychological equilibrium.',
    imageSrc: '/images/helath/second1.jpg',
    paragraph2: 'Rudraksha, fasting, and gemstone therapy balance body and mind energies. Moon is considered for psychological well- being of an individual while Solar is considered for substantial prosperity of a person. Great or undesirable well -being relies on the force or feeble purpose of those planets.First home importance the ascendant means our total build and its look to sum things up.',
    paragraph3: 'Medical astrology remedies complements medical treatment for faster recovery.In astrology first, second, 6th, seventh, eighth and eleventh homes are considered for well-being related focuses though the twelfth home shows the hospitalization. ',
  },
  {
    header: 'Strengthen Your Health',
    paragraph1: 'Master Raj offer personalized health astrology guidance based on your kundali.that various planetary positions and aspects in a birth chart can indicate potential health issues and offer remedies for strengthening ones well-being. Specific houses like the 6th, 8th, and 12th are particularly relevant for health predictions and malefic planets like Saturn and Mars can indicate health challenges. ',
    imageSrc: '/images/helath/second2.jpg',
    paragraph2: 'Know favorable times for surgeries, recovery, or immunity boosts. Health astrology is a unique line of Vedic astrology, which investigates links between cosmic energies and planetary positions on the one hand, and a person’s health and individual state on the other',
    paragraph3: 'Keep your energy strong and chakras aligned for lifelong wellness.It takes notice of the fact that astrologers have been admitting for centuries that whatever occurs in the universe does have profound influence over the physical and mental well-being of a person. ',
  },
];
const HealthProblem = () => {
  return (
    <div>
        <SectionService buttonLabels={buttonLabels} contentData={contentData} />
    <Faq/>
    <ClientTestimonials/>
    </div>
  );
};

export default HealthProblem;
