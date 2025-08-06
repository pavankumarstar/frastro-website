import React from 'react';

import Faq from '../../components/Faq';
import SectionService from '../../components/Service/SectionService';
import ClientTestimonials from '../../components/ClientTestimonials';

const buttonLabels = [
  'Root of Conflicts',
  'Astrological Causes',
  'Spiritual Solutions',
  'Peaceful Living',
];

const contentData = [
  {
    header: 'Root of Conflicts',
    paragraph1: 'Family issues may include misunderstandings, disrespect, or a lack of emotional connection.Astrology can offer insights into the roots of family conflicts by analyzing planetary positions and aspects in birth charts, potentially revealing underlying tensions and patterns. Specifically, Vedic astrology examines houses related to family (2nd, 4th, 7th) and their lords, looking for afflictions from malefic planets like Saturn, Rahu, Ketu, and Mars, which can indicate misunderstandings and quarrels. ',
    imageSrc: 'https://www.bengalijyotishcenter.com/wp-content/uploads/2025/05/2148548614.jpg',
    paragraph2: 'Ego clashes and generational gaps often cause emotional distance.Family is the foundation of our lives. But when issues arise—be it between parents and children, husband and wife, in-laws, or siblings—it affects everyone’s mental and emotional well-being. These problems often start small but grow bigger over time due to misunderstandings, ego clashes, jealousy, or external influences like financial stress or black magic. ',
    paragraph3: 'These conflicts grow when not resolved with compassion and understanding.Our expert offers deep insight through Vedic astrology and provides powerful, personalized remedies to resolve family disputes.',
  },
  {
    header: 'Astrological Causes',
    paragraph1: 'Planetary positions, especially Moon, Mars, and Rahu, can cause disharmony in families. Negative influences on the 4th house, representing family, or the Moon, symbolizing emotions, can lead to discord. Malefic planets like Saturn, Mars, Rahu, and Ketu can also trigger conflicts. Pitra Dosh, an ancestral influence, may manifest as ongoing health issues, financial instability, or emotional distress within the family. ',
    imageSrc: 'https://www.astrotaare.com/uploads/blogs/1699002784WhatsApp%20Image%202023-11-03%20at%2014.41.35.jpeg',
    paragraph2: 'Weak 4th house or presence of doshas in the family chart leads to emotional breakdown.Family is the cornerstone of our lives, the place where we seek love, support, and a sense of belonging. However, family problems are an inevitable part of life, and they can sometimes leave us feeling lost and overwhelmed.',
    paragraph3: 'Timing of specific phases (like Sade Sati) also intensifies family tensions.The sun sign represents an individuals core personality Understanding each family members sun sign can provide insight into their basic characteristics and tendencies.',
  },
  {
    header: 'Spiritual Solutions',
    paragraph1: 'Performing Graha Shanti, Navagraha poojas, and chanting family harmony mantras brings relief.analyzing birth charts to identify the root causes of conflicts and suggesting remedies like mantras, gemstones, and rituals to restore harmony. These remedies aim to balance planetary influences and promote positive communication, understanding, and unity within the family. ',
    imageSrc: 'https://d2vlk40wphb5v6.cloudfront.net/public/cms-images/blogs/132507395_4-Best-Astrological-Remedies-for-Family-Issues.jpg',
    paragraph2: 'Consulting an astrologer for joint family horoscope evaluation is highly recommended.Astrologers analyze birth charts (horoscopes) of family members to understand the underlying astrological influences contributing to family conflicts.',
    paragraph3: 'Divine remedies help to align family energies and open paths for bonding.This analysis helps pinpoint specific planetary imbalances or negative aspects that may be causing discord. ',
  },
  {
    header: 'Peaceful Living',
    paragraph1: 'Daily prayers, wearing harmony-generating gemstones, and regular puja bring long-term peace.analyzing birth charts to identify potential areas of conflict and offering remedies for harmony. Specifically, the 4th house in Vedic astrology, known as the "House of Happiness," is crucial for understanding emotional security and family dynamics. Planets like Rahu and Ketu, along with doshas like Mangal Dosha, can also contribute to family disharmony. ',
    imageSrc: 'https://astrotalk.com/astrology-blog/wp-content/uploads/2020/01/Astrological-Remedies-to-Bring-Happiness-in-Your-Home-e1580479277272.jpeg',
    paragraph2: 'Keeping your home Vastu-balanced can also restore emotional warmth.Astrology helps pinpoint the specific planets, houses, and aspects causing problems, providing a deeper understanding of the issues. For instance, Rahus influence can lead to deceit and misunderstandings, while Ketu can cause detachment and lack of communication',
    paragraph3: 'approaching an Aries with directness and assertiveness is recommended, while approaching a Pisces requires empathy and understandingAstrology lights the way for a loving and respectful family environment.',
  },
];
const FamilyProblems = () => {
  return (
    <div >
       <SectionService buttonLabels={buttonLabels} contentData={contentData} />
    <Faq/>
    <ClientTestimonials/>
    </div>
  );
};

export default FamilyProblems;
