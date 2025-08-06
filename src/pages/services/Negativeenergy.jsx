import React from 'react';
import Faq from '../../components/Faq';
import SectionService from '../../components/Service/SectionService';
import ClientTestimonials from '../../components/ClientTestimonials';


const buttonLabels = [
  'Understanding Negative Energy',
  'How It Affects You',
  'Astrological Healing',
  'Daily Energy Boosters',
];

const contentData = [
  {
    header: 'Understanding Negative Energy',
    paragraph1: 'Negative energy surrounds us due to stress, jealousy, past karma, or spiritual imbalance.In astrology, negative energy is often linked to malefic planetary influences, weak planetary placements, or past karmic imbalances. When left unaddressed, these issues can intensify and affect different aspects of life.In astrology, negative energy is often linked to malefic planetary influences, weak planetary placements, or past karmic imbalances. When left unaddressed, these issues can intensify and affect different aspects of life.',
    imageSrc: 'https://i.pinimg.com/1200x/19/91/91/199191638315dc78f0ac5ccae8f942dc.jpg',
    paragraph2: 'It can enter our lives through people, environments, or personal thoughts.Saturn is a karmic planet, and its Sade Sati or Dhaiya phases can bring financial troubles, mental stress, and delays in important work.Rahu and Ketu are shadow planets associated with illusions and sudden changes. Their negative influence can lead to confusion, stress, and even obstacles in career and relationships.',
    paragraph3: 'Awareness is key to identifying its presence and neutralizing it.Negative energy can also accumulate due to incorrect Vastu placements. Improper room alignment, clutter, or the presence of certain elements can block positive energy.Rudraksha beads are powerful spiritual tools that protect against negativity. Meditating with them enhances inner peace and creates a protective shield against negative influences.',
  },
  {
    header: 'How It Affects You',
    paragraph1: 'It causes tiredness, mental fog, sudden failures, and broken relationships.In astrology, negative energy can manifest in various ways, impacting different aspects of life depending on planetary influences and karmic imbalances. It can lead to physical and emotional distress, affecting mental clarity, relationships, and overall well-being. Recognizing the signs of negative energy and understanding its astrological sources can help individuals seek remedies and protective measures. ',
    imageSrc: 'https://static.toiimg.com/thumb/msid-119201206,imgsize-33088,width-400,resizemode-4/119201206.jpg',
    paragraph2: 'You may feel demotivated, constantly unlucky, or face repeated setbacks.Negative energy can manifest as fatigue, chronic pain, sleep disturbances, and weakened immunity. It can cause anxiety, depression, mood swings, and a tendency to dwell on negative thoughts. Negative energy can lead to strained relationships, frequent arguments, and a general feeling of unease around others.ou may feel inexplicably tired or depleted of energy, especially after being around certain people or in certain environments.  ',
    paragraph3: 'It lowers your vibration and affects your physical and emotional health.Planets like Saturn, Rahu, and Ketu are often associated with negative influences. Planets in unfavorable houses or aspected by malefic planets can amplify negative effects. ',
  },
  {
    header: 'Astrological Healing',
    paragraph1: 'Rituals like aura cleansing, Navagraha poojas, and reciting positive mantras help immensely.Astrological healing, specifically related to negative energy, involves using astrological principles to identify, address, and mitigate negative influences in ones life. This can include understanding planetary positions that might be causing disharmony, and using remedies like chanting mantras, wearing protective gemstones, or performing specific rituals to cleanse and purify the energy field. ',
    imageSrc: 'https://www.animaastrologer.com/wp-content/uploads/al_opt_content/IMAGE/www.animaastrologer.com/wp-content/uploads/2025/01/negative-energy-.png.bv_resized_desktop.png.bv.webp?bv_host=www.animaastrologer.com',
    paragraph2: 'Gemstones, rudraksha, and yantras realign your energy with universal harmony.Certain planetary aspects in ones birth chart can be associated with negative energy or difficult situations. For example, unfavorable aspects of Rahu or malefic planets can manifest as negative behavior patterns or unpredictable situations. In Vedic astrology, negative energy can be linked to Rahu Dosha, which can be addressed through specific remedies like salt rituals and performing certain prayers.  ',
    paragraph3: 'Regular consultations ensure negative patterns don’t return. Donations and offerings can be made to strengthen the positive influence of certain planets. Regular meditation, especially with Rudraksha beads, can help cleanse the aura and promote inner peace. ',
  },
  {
    header: 'Daily Energy Boosters',
    paragraph1: 'Burning sage, using essential oils, listening to spiritual chants uplift your energy.It can come from negative people, from your surroundings, or from your own psyche. It can leave you exhausted both mentally and physically. Negative energy perpetuates itself, therefore, breeding more negativity. Learning to deal with negative energy is important for your health and happiness.Meditation is one of the most powerful and widely used techniques to cleanse and boost your aura. This ancient practice helps to calm the mind, reduce stress, and connect you with your inner self, allowing you to clear any negative or stagnant energy from your Aura Booster.Sound has a profound effect on our energy field. Certain frequencies, especially those used in sound therapy, can resonate with your body’s energetic vibrations, helping to balance and boost your aura. Sound healing practices use instruments like singing bow.',
    imageSrc: 'https://jyotishay.com/storage/files/blogs/Untitled%20design%20(1).png',
    paragraph2: 'Practice meditation and gratitude rituals for positive flow.Crystals have long been used for their ability to amplify and transform energy. When it comes to aura boosting, certain crystals can help cleanse and rejuvenate your energy field. Using crystals can enhance the flow of energy, clear blockages, and offer protection against negative influences.Sound has a profound effect on our energy field. Certain frequencies, especially those used in sound therapy, can resonate with your body’s energetic vibrations, helping to balance and boost your aura. Sound healing practices use.',
    paragraph3: 'Astrology gives personalized tools to stay balanced and spiritually clean Aromatherapy utilizes the healing properties of essential oils to cleanse and elevate your aura. Scents such as lavender, sandalwood, frankincense, and eucalyptus are known for their ability to calm the mind.',
  },
];
const NegativeEnergy = () => {
  return (
    <div>
         <SectionService buttonLabels={buttonLabels} contentData={contentData} />
    <Faq/>
    <ClientTestimonials/>
    </div>
  );
};

export default NegativeEnergy;
