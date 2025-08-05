import React from 'react';
import { motion } from 'framer-motion';
import './SectionService.css';

const SectionService = ({ buttonLabels = [], paragraph1, imageSrc, paragraph2, paragraph3 }) => {
    return (
        <div className='section-wrapper'>
            <div className='section-head'>
                {buttonLabels.map((label, index) => (
                    <button key={index}>{label}</button>
                ))}
            </div>

            <motion.div
                className='section-line'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className='section-highlight'>DOES EACH LINE CARRY ITS OWN MEANING?</h1>

                {/* First paragraph full width */}
                <div className='section-pass'>
                    <p className='p-1'>{paragraph1}</p>
                </div>

                {/* 40-60 Image + Text layout */}
                <div className='section-bottom'>
                    <div className='section-img'>
                        <img src={imageSrc} alt='Palm Reading' />
                    </div>
                    <div className='section-text'>
                        <p className='p-2'>{paragraph2}</p>
                        <p className='p-3'>{paragraph3}</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SectionService;
