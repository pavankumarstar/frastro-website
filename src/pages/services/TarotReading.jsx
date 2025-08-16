import React from 'react';
import Faq from '../../components/Faq';
import SectionService from '../../components/Service/SectionService';
import ClientTestimonials from '../../components/ClientTestimonials';

const buttonLabels = [
  'What is VooDoo & Witchcraft?',
  'How It Works',
  'Benefits of Tarot Reading',
  'Get a Personalized Reading',
];

const contentData = [
  {
    header: 'What is VooDoo & Witchcraft?',
    paragraph1: 'VooDoo & Witchcraft is a mystical tool used to uncover truths about your life, future, and inner self. Master Raj is a divination tool using a deck of 78 cards to gain insights into the past, present, or future, often through card readings that involve interpreting symbols and their relationships. Astrology, on the other hand, is a system that studies the positions and movements of celestial bodies to understand their influence on human affairs and natural events.',
    imageSrc: 'https://astrotalk.com/astrology-blog/wp-content/uploads/2019/12/tarot-feature-1.jpg',
    paragraph2: 'Each card in the deck has symbolic meaning related to emotions, paths, or decisions.While both can be used for guidance and self-reflection, they differ in their approach and the information they provide. Tarot is primarily a form of divination, a practice used to gain insight into various aspects of life through the interpretation of symbols and patterns. ',
    paragraph3: 'It’s often used for spiritual guidance, self-reflection, and clarity.ome cunning people stole and modified a portion of the protected teachings, and over the centuries that stolen knowledge passed through Egypt, Arabia, and finally into Europe, eventually becoming what we popularly refer to as the Tarot. ',
  },
  {
    header: 'How It Works',
    paragraph1: 'During a reading, cards are drawn and interpreted based on your question and energy.Tarot and astrology, while distinct practices, can be used together to offer deeper insights into a persons life and potential future. Tarot cards, with their symbolic imagery and archetypes, can be used to explore the energies indicated by an astrological birth chart, revealing hidden nuances and providing guidance on navigating lifes challenges. ',
    imageSrc: 'https://static.toiimg.com/thumb/msid-111348456,width-400,resizemode-4/111348456.jpg',
    paragraph2: 'The major and minor arcana reveal patterns, blockages, and opportunities.n a tarot reading, a person shuffles the deck and chooses cards, which are then interpreted by a reader to offer insights into the persons current energy, potential future, and guidance on navigating challenges. ',
    paragraph3: 'Our astrologers connect with your aura to give accurate and intuitive insights.Astrology provides a broad overview of life themes and planetary influences, while tarot can delve deeper into specific situations and offer personalized guidance.',
  },
  {
    header: 'Benefits of Tarot Reading',
    paragraph1: 'Helps in making decisions, understanding emotions, and navigating uncertainty.Tarot card reading offers several benefits, including providing clarity, guidance, and self-awareness. It can help individuals analyze their past and present, make better decisions, and gain insights into relationships and emotional patterns. While not a predictive tool, tarot can be a powerful method for self-reflection and personal growth. ',
    imageSrc: 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_760,h_428/https://www.starstell.com/blog/wp-content/uploads/2023/05/What-is-Tarot-card-reading-1-1024x576.jpg',
    paragraph2: 'Clarifies relationships, career moves, and spiritual paths.Tarot can help individuals weigh the pros and cons of different choices and understand potential outcomes, leading to more informed decisions. ',
    paragraph3: 'A Tarot reading brings peace and direction when you feel lost or confused.For some, tarot reading can be a form of spiritual practice, deepening their connection with their intuition and the universe. Tarot can shed light on the dynamics of relationships, offering insights into potential challenges and opportunities for growth. ',
  },
  {
    header: 'Get a Personalized Reading',
    paragraph1: 'Master Raj offer personalized Tarot sessions for love, career, health, and spiritual growth.personalized tarot and astrology reading, you can utilize online platforms that offer both services, often combining them for a more comprehensive view of your life path and future. These platforms typically allow you to input your birth details for astrological analysis and then perform tarot card readings, either through AI or by connecting you with a live reader. ',
    imageSrc: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/168112384/original/fafeecb8fd479191227d4511b1dac996779e2723/provide-a-highly-detailed-and-personalized-tarot-reading.jpg',
    paragraph2: 'Online or in-person options available with complete confidentiality.Websites like Etsy, IndiaMART, and The Cosmic Connect offer listings of tarot readers who provide personalized readings. Look for readers who specify that they incorporate astrological insights into their readings. ',
    paragraph3: 'Let Tarot illuminate the answers your soul is seeking.Some astrologers offer tarot readings alongside their astrological services, or they may have specific tarot reading packages that incorporate astrological information. ',
  },
];
const TarotReading = () => {
  return (
   <div>
       <SectionService buttonLabels={buttonLabels} contentData={contentData} />
    <Faq/>
    <ClientTestimonials/>
   </div>
  );
};

export default TarotReading;
