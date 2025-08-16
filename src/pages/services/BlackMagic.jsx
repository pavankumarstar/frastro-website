import React from 'react';

import Faq from '../../components/Faq';
import SectionService from '../../components/Service/SectionService';
import ClientTestimonials from '../../components/ClientTestimonials';

const buttonLabels = [
  'What is Black Magic?',
  'Symptoms',
  'Removal Process',
  'Protection Techniques',
];

const contentData = [
  {
    header: 'What is Black Magic?',
    paragraph1:
      'Black magic, also known as witchcraft, is the usage of supernatural power for evil and selfish purposes and to perform malicious practices to destroy someone physically, mentally, or financially. It can be done using the victim’s hair, clothes, photo, or even by looking directly into their eyes. Practicing black magic is not something new – it has been practiced for generations. That is why Master Raj, a renowned Black Magic Specialist, warns us to be cautious in this time of Kalyug where genuine well-wishers are few.',
    imageSrc:
      'https://static.toiimg.com/thumb/msid-79510159,imgsize-36354,width-400,resizemode-4/79510159.jpg',
    paragraph2:
      'Black magic, also called dark magic or witchcraft, is the practice of using supernatural powers for harmful or selfish purposes. It often involves spells, curses, rituals, or the manipulation of evil spirits. With the guidance of Master Raj, an experienced Black Magic Specialist, many people have overcome these negative influences and restored balance in their lives.',
    paragraph3:
      'At large cultural and spiritual centers across the world, people seek divine help against black magic. Similarly, Master Raj provides spiritual solutions rooted in ancient wisdom to protect individuals and families from such unseen forces.',
  },
  {
    header: 'Symptoms of Black Magic',
    paragraph1:
      'Usually, there are different signs through which you can identify if a person is affected by black magic. These symptoms include health issues, behavioural changes, bad luck, or recurring nightmares. According to Master Raj, if a person is under a black magic spell, they may experience unexplained health issues like stomach disorders, headaches, body pain, or sudden weight loss.',
    imageSrc:
      'https://static.toiimg.com/thumb/msid-118776475,imgsize-83186,width-400,resizemode-4/118776475.jpg',
    paragraph2:
      'Strange behaviour, extreme mood swings, or sudden anger may also indicate black magic. A person may become reclusive or experience disturbed sleep and vivid nightmares. Master Raj, the Black Magic Specialist, emphasizes that recognizing these early signs is the first step towards spiritual protection.',
    paragraph3:
      'Black magic may also affect finances and career growth. Many who approach Master Raj for guidance share stories of repeated failures, job losses, and financial setbacks linked to black energy influences.',
  },
  {
    header: 'Removal Process',
    paragraph1:
      'Removing black magic involves rituals, chants, and spiritual remedies. As Master Raj explains, energy itself is neutral – it can be divine or destructive depending on its use. Just like electricity can light up a home or power an electric chair, spiritual energy too can heal or harm depending on intent.',
    imageSrc:
      'https://static.sadhguru.org/d/46272/1633181944-1633181943417.jpg',
    paragraph2:
      'People can indeed misuse energies. One Veda, the Atharvana Veda, details both positive and negative uses. However, Master Raj highlights that many black magic effects are psychological – the fear and symbols often do more damage than the ritual itself.',
    paragraph3:
      'That is why consulting a Black Magic Specialist like Master Raj is important. He not only identifies whether black magic is real or psychological but also performs safe and effective remedies, guiding individuals away from fear and towards inner strength.',
  },
  {
    header: 'Protection Techniques',
    paragraph1:
      'Protective mantras, talismans, and regular cleansing can prevent black magic. Master Raj often advises daily spiritual hygiene, just like we maintain physical cleanliness. A black energy covering forms around us daily, unseen but impactful at physical, psychological, and spiritual levels.',
    imageSrc:
      'https://media.spiritualresearchfoundation.org/wp-content/uploads/2024/08/06235346/covering-1024x576.jpg',
    paragraph2:
      'Through consistent spiritual practice under the guidance of a Black Magic Specialist like Master Raj, one can strengthen their aura and reduce vulnerability to harmful energies. People sensitive to black energy often describe haziness, pressure, or nausea when exposed to someone carrying this covering.',
    paragraph3:
      'Only advanced spiritual insight can truly detect the extent of black energy. Master Raj, with decades of experience, uses both ancient mantras and personalized remedies to protect individuals, ensuring lasting peace and spiritual safety.',
  },
];

const BlackMagic = () => {
  return (
    <div>
      <SectionService buttonLabels={buttonLabels} contentData={contentData} />
      <Faq />
      <ClientTestimonials />
    </div>
  );
};

export default BlackMagic;
