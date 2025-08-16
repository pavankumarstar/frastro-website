import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Faq.css';

const faqData = [
  {
    question: 'How do Master Raj help?',
    answer: 'Master Raj provide insights through birth chart analysis, helping with relationships, life decisions, emotional well-being, and career guidance.',
  },
  {
    question: 'Can Master Raj  predict marriage?',
    answer: 'Yes, by analyzing planetary positions, dashas, and transits in your birth chart, particularly focusing on Jupiters influence.',
  },
  {
    question: 'How does Master Raj predict marriage timing?',
    answer: 'Through examination of dasha periods, planetary transits, and specific marriage yogas in the birth chart.',
  },
  {
    question: 'Is Psychic Raj service accurate in Canada?',
    answer: 'Absolutely, with numerous satisfied clients in Canada benefiting from his accurate readings and spiritual guidance.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      className="faq-wrapper"
    >
      <div className="faq">
        <motion.h1
          className="faq-heading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Astrologer Progress
        </motion.h1>

        <div className="faq-content">
          <motion.div
            className="faq-left"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <img src='/images/faq.jpg' alt="Astrology" />
          </motion.div>

          <motion.div
            className="faq-right"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
          >
            <h1 className='faq-line'>Questions (FAQ’s)</h1>
            <div className="faq-items">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  className="faq-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 80,
                    damping: 15,
                    delay: index * 0.1,
                  }}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggleAccordion(index)}
                  >
                    {faq.question}
                    <motion.span
                      className="icon"
                      animate={{ rotate: activeIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      +
                    </motion.span>
                  </div>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        className="faq-answer"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
