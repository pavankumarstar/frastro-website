import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Faq.css';

const faqData = [
  {
    question: 'Roboto Font use for this site',
    answer: 'Roboto font is used for a modern and clean appearance.',
  },
  {
    question: 'Cryptocurrency - Who Are Involved With It?',
    answer: 'Traders, investors, miners, and developers are typically involved in cryptocurrency.',
  },
  {
    question: 'Risks & Rewards Of Investing In Bitcoin?',
    answer: 'Rewards include high returns; risks involve volatility and regulatory concerns.',
  },
  {
    question: 'Risks & Rewards Of Investing In Bitcoin?',
    answer: 'Repeated to showcase multiple items. Same concerns apply.',
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
