import React, { useState } from 'react';
import './FAQSection.css';

const faqs = [
  { id: 1, question: 'What is Vedic astrology?', answer: 'Vedic astrology is an ancient system based on the positions of celestial bodies at birth.' },
  { id: 2, question: 'Can astrology predict marriage?', answer: 'Yes, astrology can estimate timing and compatibility using planetary alignments.' },
  { id: 3, question: 'Do I need my exact birth time?', answer: 'Yes, accurate birth time helps create precise charts and predictions.' },
  { id: 4, question: 'Is online consultation accurate?', answer: 'Absolutely. We use your exact birth chart to give accurate guidance remotely.' },
  { id: 5, question: 'How does palm reading work?', answer: 'It interprets the lines, mounts, and shapes of the hand to reveal life patterns.' },
  { id: 6, question: 'Can you remove black magic?', answer: 'Yes, we offer spiritual remedies and protection services against negative energies.' },
];

const FAQSection = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="faq-wrapper">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-grid">
        {/* Split FAQs into two columns */}
        <div className="faq-column">
          {faqs.slice(0, 3).map((faq) => (
            <div key={faq.id} className="faq-item">
              <button
                className={`faq-question ${activeId === faq.id ? 'active' : ''}`}
                onClick={() => toggleFAQ(faq.id)}
              >
                {faq.question}
              </button>
              {activeId === faq.id && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>

        <div className="faq-column">
          {faqs.slice(3, 6).map((faq) => (
            <div key={faq.id} className="faq-item">
              <button
                className={`faq-question ${activeId === faq.id ? 'active' : ''}`}
                onClick={() => toggleFAQ(faq.id)}
              >
                {faq.question}
              </button>
              {activeId === faq.id && <div className="faq-answer">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
