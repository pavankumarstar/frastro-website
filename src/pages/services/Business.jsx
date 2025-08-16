import React from 'react';

import Faq from '../../components/Faq';
import SectionService from '../../components/Service/SectionService';
import ClientTestimonials from '../../components/ClientTestimonials';

const buttonLabels = [
  'Business Challenges',
  'Causes of Failure',
  'Astrological Remedies',
  'Success Strategies',
];

const contentData = [
  {
    header: 'Business Challenges',
    paragraph1: 'Facing constant losses, blocked deals, Owning a business may be demanding, and owners frequently deal with a great deal of pressure and uncertainty. By looking at their birth charts, Master Raj may assist Business astrology solutions in better understanding their own emotional and mental tendencies. This increased self-awareness can help with decision-making, stress management, and general wellbeing, which strengthens one’s ability to overcome challenges.',
    imageSrc: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*bnUB4NgXXcycVBSgVnyGGg.jpeg',
    paragraph2: 'Business obstacles often arise due to hidden cosmic disturbances or negative planetary alignments.Astrologers can offer extra viewpoints when it comes to making important business decisions of Master Raj. They can identify potential hazards and difficulties that could otherwise go undiscovered by examining the astrological indicators connected to a certain decision.',
    paragraph3: 'Understanding the root Master Raj reasons is essential before applying remedies It is crucial to stress that, even while astrology can offer insightful guidance, business decisions shouldn’t primarily be based on astrological advice. Instead, think of it as just one of the numerous tools a business owner has at his or her disposal, along with market research, financial analysis, and strategic planning..',
  },
  {
    header: 'Causes of Failure',
    paragraph1: 'Weak Jupiter or Mercury, Rahu-Ketu doshas, or malefic Saturn can result in setbacks.f in your Horoscope you Find Surya weak then there are many possibilities that it is affecting your Business. There are some Mantras that you can try to make your Business astrology solutions and Business better.When your Horoscope is Defining Surya Weak then it could be the major reason for your Business Failure.',
    imageSrc: 'https://astrotalk.com/astrology-blog/wp-content/uploads/2019/08/business-losses-1-768x502.jpg',
    paragraph2: 'Master Raj offer a Vastu defects in offices or shops also contribute to recurring business issues.Swarn Dosh affects your Business and Money that you have Generated through your Business. If you have Swarn Dosh in your Horoscope then you will lose all the money that you have earned through your Business and your Business will Go Down after some Point.',
    paragraph3: 'Unfavorable timing for investment or partnerships worsens the situation. When in your Horoscope Mangal and Shani are not at suitable places then you should not start a business. Expert astrologers suggest that you should find astrology behind business failure but never ignore your horoscope.',
  },
  {
    header: 'Astrological Remedies',
    paragraph1: 'Our Master Raj suggest yantras, gemstones, and mantras tailored to your Business astrology solutions horoscope.Master Raj remedies for business success involve utilizing astrological principles and practices to overcome challenges and enhance prosperity. These remedies often focus on strengthening beneficial planetary influences, mitigating negative planetary effects, and aligning with auspicious timings and directions. ',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN4EI_5EbKxddS8n1GrTNukGNA-BwndVjGcw&shttps://www.astroscience.com/cdn/shop/articles/lal-kitab-remedies.webp?v=1733296446',
    paragraph2: 'Special poojas or homams can neutralize negative influences from business charts.Worshipping Goddess Lakshmi on Fridays with white flowers and sweets invites prosperity.  Keeping their idol in the northeast direction of the workplace, lighting a ghee diya, and offering prayers can help remove obstacles. ',
    paragraph3: 'Regular spiritual consultation helps keep your business aligned with planetary energies.Astrological remedies should be combined with honesty, hard work, and ethical business practices for optimal results. ',
  },
  {
    header: 'Success Strategies',
    paragraph1: 'Choose auspicious dates for launches or new deals based on your birth chart. Business Master Raj offers strategies for success by aligning Business astrology solutions decisions with Master Raj insights derived from birth charts and planetary movements. This includes strategic timing for launches and promotions, identifying ideal team members, and understanding industry trends ahead of time. ',
    imageSrc: 'https://sohinisastri.com/wp-content/uploads/2024/11/astrologer-calculates-natal-chart-makes-forecast-generative-ai_192745-1611-1-1024x682.webp',
    paragraph2: 'Implement Vastu-compliant workspace and attract positive energies.By analyzing birth charts and utilizing remedies like gemstone therapy and Vedic fire rituals, businesses can navigate challenges and enhance their prospects. ',
    paragraph3: 'Stay spiritually strong and confident with guidance from divine astrology. Astrology can help identify potential challenges and suggest remedies to mitigate negative influences. ',
  },
];
const Business = () => {
  return (
    <div>
         <SectionService buttonLabels={buttonLabels} contentData={contentData} />
    <Faq/>
    <ClientTestimonials/>
    </div>
  );
};

export default Business;
