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
    paragraph1: 'Black magic also known as witchcraft is usage of supernatural power for evil and selfish purposes and to perform malicious practices to destroy someone physically or mentally or financially. It can be done using the victims hair, clothes, photo or looking directly into eyes. Practicing black magic is not something new, it has been practiced since generations and hence we need to be very careful in this time of Kalyug where you are surrounded by very few well-wishers.',
    imageSrc:'https://static.toiimg.com/thumb/msid-79510159,imgsize-36354,width-400,resizemode-4/79510159.jpg' ,
    paragraph2: 'Black magic, also known as dark magic or witchcraft, is the practice of using supernatural powers for harmful, selfish, or evil purposes. It often involves spells, curses, rituals, or the manipulation of evil spirits to cause harm, control, or manipulate others. ',
    paragraph3: 'At a large area in the heart of the city like Bangkok’s Ratchaprasong intersection – the hub of economic trade and shopping, we also find a center of objects that both Thais and foreigners like to worship and pray to for success in work, good fortune, love, and relationships.',
  },
  {
    header: 'Symptoms of Black Magic',
    paragraph1: 'Usually, there are different signs through which you can understand if a person is going through black magic or not. These symptoms can be health issues, behavioural changes, bad luck or nightmares. Let me explain to you the signs of black magic done on you.If a person is under the spell of a black magic then they can have unexplained health issues like stomach issues, headaches, body aches and sudden loss of weight. ',
    imageSrc:'https://static.toiimg.com/thumb/msid-118776475,imgsize-83186,width-400,resizemode-4/118776475.jpg',
    paragraph2: 'If you feel that a person has started behaving strangely and has been having extreme mood swings then it may be because of black magic. The person me exhibit extreme anger or irritability and also may become reclusive. A person under the spell of black magic may have vivid nightmares and a very disturbed sleep pattern.',
    paragraph3: 'black magic may also impact your luck and finances. People under the spell of black magic may go through a loss of income or unforeseen and unfortunate incidents.',
  },
  {
    header: 'Removal Process',
    paragraph1: 'Removing black magic involves rituals, chants, and spiritual remedies. You need to understand that energy is just energy; it is neither divine nor is it evil. You can make anything – a god or a devil – out of it. It is like electricity. Is electricity the divine or the devil? When it is lighting your house, it is the divine.  If it becomes an electric chair, it is the devil. It just depends on who is operating it at that moment.',
    imageSrc: 'https://static.sadhguru.org/d/46272/1633181944-1633181943417.jpg',
    paragraph2: 'So can people do black magic? Definitely they can. If positive uses are there, negative uses are also there. One Veda, the Atharvana Veda is dedicated to the use of energies for both positive and negative. But what I have seen is, most of the time these things are psychological. A little bit of it may be there, but the rest of it is your own mind driving you crazy. If I want to drive you crazy, I do not have to do any actual black magic. Tomorrow morning when you come out of your house, suppose there is a skull and some blood all over the place, once you see this, that’s it! .',
    paragraph3: 'Avoid trying to remove it yourself as it may worsen the condition.You will become ill, your business will go bad, everything negative will happen to you because of a certain fear grips you. No black magic has been done. Just certain symbols which indicate that this seems to be some kind of black magic will destroy your mind. So most of the time, it is just psychological. Even if black magic is done to you, only ten percent may be the real thing. The rest of it is you destroying yourself. ',
  },
  {
    header: 'Protection Techniques',
    paragraph1: 'Protective mantras, talismans, and regular cleansing can prevent black magic.Even since we were young, our parents have ingrained in us the practice of bathing at least once a day. If need be, sometimes we bathe 2 or 3 times a day. This helps to clean our physical body. It also has a spiritual benefit to some extent. Unfortunately, what most of us have not learnt is that we also have to clean ourselves at a spiritual level on a daily basis. A black energy covering invariably gets formed around us on an everyday basis. Most of us cannot perceive it as it is subtle in nature, but it affects us negatively at a physical, psychological and spiritual level',
    imageSrc: 'https://media.spiritualresearchfoundation.org/wp-content/uploads/2024/08/06235346/covering-1024x576.jpg',
    paragraph2: 'spiritual practice, one gains the subtle ability to perceive a black energy covering. When such people look at a person with black energy covering, they will feel that they cannot see the person’s face clearly. It will appear hazy to them. When in close proximity to a person with a black covering, one can experience subtle pressure, nausea and at times a foul odour as well.',
    paragraph3: 'The extent of a black energy covering can only be correctly understood through the medium of an advanced level of sixth sense. Those who have an advanced level of sixth sense of vision will be able to observe the extent of the covering visually.'
  },
];

const BlackMagic = () => {
  return (
    <div>
    <SectionService buttonLabels={buttonLabels} contentData={contentData} />

    <Faq/>
    <ClientTestimonials/>
    </div>
    
  );
};

export default BlackMagic;
