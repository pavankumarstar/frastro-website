import React from 'react';
import Faq from '../../components/Faq';
import SectionService from '../../components/Service/SectionService';
import ClientTestimonials from '../../components/ClientTestimonials';

const contentData = [
  {
    paragraph1: "The arc of the life line deﬁnes the root of the thumb, which is the mount of the Sun, the reservoir of our vitality. The larger the arc, the stronger that person’s natural physical reserves—the tanks are full, and the owner has a deep well of energy, stamina, and enthusiasm to share with the world. The depth of the life line describes the quality of our physical vitality, the conduit of our energy out into the world. A deep life line indicates that the owner has a powerful ability to express her energy, and every opportunity to live a long and successful life. She may be impatient with lesser mortals who tire more easily, and be inclined to pour all that energy into her temperament or temper. To balance: Some of this vitality can be worked out physically, and it would be a good idea to cultivate patience, as well as empathy with those gifted with subtler energy.",
    header: "Does Each Lines Carry Its Own Meaning?",
    imageSrc: "https://www.webstrot.com/html/tm/astrologer/light_version/images/content/kundali/hand_img.jpg",
    paragraph2: "It begins where the story of our psyche begins, connected to our childhood at the root of our life line, and is found between thumb and foreﬁnger. The length of the head line does not show how intelligent we are but the breadth of our interests. Its arc and depth describe the power and attitude of the mind. ",
    paragraph3: "A straight and level head line shows a level headed person, who is keen on common sense and logical evidence, and less interested in theory or exploring alternatives. This person will be interested in science, a structured and practical profession, or one that follows a time-honoured tradition. Our emotional lives are complex, and not deﬁned by one line. We can’t look at a hand and tell from the lines if its owner will be happily married to a black-haired stranger by the age of 36. But reading the hand can help you to know what to do with your one wild and precious heart, and maximize the potential for comfortable and easy relationships."
  },
  {
    paragraph1: "People with water hands have long, rectangular palms and long fingers. Water hands are typically graceful and delicate. Their palms are usually narrow and covered with thin, fine lines. People with water hands often have soft, shiny skin that is sometimes clammy or damp to the touch. The zodiac signs are also based on the elements, but your hand shape and astrological sign might not match up. If you’re a fiery Leo and have water hands, that’s completely normal; it just adds to the interesting makeup of who you are!",
    header: "Hands Carry Its Own Meaning?",
    imageSrc: "https://www.wikihow.com/images/thumb/d/d9/Types-of-Hands-Step-1-Version-2.jpg/v4-728px-Types-of-Hands-Step-1-Version-2.jpg.webp",
    paragraph2: "Earth hands have square palms and short fingers. These hands typically look squished or compressed and are wider rather than narrow. People with earth hands usually have thicker skin that is rough or coarse to the touch. They also have very few lines on their palms.People with earth hands are strong-willed, practical, and reliable. These are no-nonsense people who usually prefer to stick to what they know. They are kind though, and are usually the people you turn to when you need advice or a helping hand. People with earth hands are concerned with the here and now and have their feet planted firmly on the ground.",
    paragraph3: "Fire hands have long, rectangular palms and short fingers. People with fire hands usually have fingers that are shorter than the length of their palm. The skin on their hands might have a reddish hue and be slightly rough to the touch.[9] If they have lines on their palm, they’re typically thick and deep.While people with fire hands take a lot of risks, they follow their intuition which usually steers them right."
  },
  {
    paragraph1: "If your Index finger is longer than your Ring finger, then you are a leader who is quick to take charge of any situation. You are a confident and resourceful person who shines at leading the way. You are also found to be resourceful and quite good at giving advice. You are even-tempered. You are not the kind who will any decision on a whim. You are an analytical, goal-oriented, and far-sighted person. People look upto you for the right answers. You are quite wary of your actions too as they usually have a big impact on the people following you.",
    header: "THE SPACES BETWEEN YOUR FINGERS?",
    imageSrc: "https://www.webstrot.com/html/tm/astrologer/light_version/images/content/kundali/hand_img3.jpg",
    paragraph2: "f your Index finger and Ring finger are the same length, then you are a person who leads a balanced life. You are a caring, faithful, gentle, and well-organized individual. You give a warm vibe who is also known to be a good listener. You gain pleasure in helping others and listening to their problems. Others feel comfortable, recognized, and appreciated in your presence. You are mostly found in peaceful energy. People are also drawn to you and mostly confide in you with their deepest secrets.",
    paragraph3: "If your Ring finger is longer than your Index finger, then you have high levels of confidence. You are a very calculated person who leads with a pragmatic and rational approach toward things. You have a strategic mind. You do not get stuck on one thing. One will seldom find you deterred by a problem or obstacle. You usually have a backup plan or an alternate solution if the first solution fails. You also have a charming personality and are quite popular with the opposite sex."
  },
  {
    paragraph1: "observing the palm's natural topography. Fleshy areas called mounts and plains are related to different life themes. The classic mounts correspond with the seven classical planets within astrology: Apollo (the sun), Luna (the moon), Mercury, Venus, Mars, Jupiter, and Saturn. Rounded, slightly elevated mounts reveal attributes that are balanced and well-proportioned, while sunken mounts expose an individual's blind spots or underdeveloped qualities. Lastly, extremely prominent mounts reveal dominant characteristics that may be exaggerated or overemphasized.",
    header: "Look at the mounts.",
    imageSrc: "https://www.webstrot.com/html/tm/astrologer/light_version/images/content/kundali/hand_img4.jpg",
    paragraph2: "Located at the base of the index finger (and above the Mount of Inner Mars), the Mount of Jupiter symbolizes confidence, ambition, and leadership. It reveals a connection to the spiritual realm, along with divine aptitudes.The Mount of Saturn is located at the base of the middle finger. This area corresponds to wisdom, responsibility, and fortitude. It reveals an individual's integrity, as well as their deep understanding of the ups and downs of life.",
    paragraph3: "Situated beneath the ring finger, the Mount of Apollo derives its name from the sun god of classical antiquity. Within palmistry, this area of the hand corresponds with an individual's optimism, vitality, and dynamic essence. Just as zodiac sun signs expose individuals' innate identity, the Mount of Apollo showcases artistic inclinations, happiness, and potential for success."
  },
  {
    paragraph1: "Our palms naturally evolve over the course of our lives, but the fate line transforms the fastest. Also known as the line of destiny, the fate line is a vertical crease in the center of the palm that reveals the degree to which an individual's life will be influenced by external circumstances beyond their control.If the heart line begins below the index finger, it reveals content in relationships; if it begins below the middle finger, it reveals the potential for restlessness. The depth of the line signifies the significance of interpersonal relationships in an individual's life, while the length corresponds with time spent coupled . ",
    header: "Determine the hand shape.",
    imageSrc: "https://www.webstrot.com/html/tm/astrologer/light_version/images/content/kundali/hand_img5.jpg",
    paragraph2: "Whenever you're experiencing a massive shift, whether personal or professional, take a quick peek at the fate line. Has it changed? Palmists believe that itchy hands are a sign of upcoming shifts, so stay attuned to this physiological clue, as well.",
    paragraph3: "The sun line, or Apollo's line, is the vertical crease furthest toward the pinky side of the palm, and it reveals public image, legacy, and fame. The sun line varies greatly in length, depth, and position, and alongside the fate line, it demonstrates how and when an individual will achieve success. If the sun line and fate line intersect or run parallel, they signal that an individual's prominence will be a byproduct of external events outside their control. "
  },
];

const PalmReading = () => {
  return (
    <div>
      <SectionService
        buttonLabels={["The Lines", "The Hands", "The Fingers", "Scan your palm", "Read your palm"]}
        contentData={contentData}
      />
      <Faq />
      <ClientTestimonials/>
    </div>
  );
};

export default PalmReading;
