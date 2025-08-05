// components/SocialSidebar.jsx
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaWhatsapp, FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import './SocialSidebar.css';

const icons = [
  {
    icon: <FaPhoneAlt />,
    link: 'tel:+91XXXXXXXXXX',
    className: 'phone',
  },
  {
    icon: <FaWhatsapp />,
    link: 'https://wa.me/yourNumber',
    className: 'whatsapp',
  },
  {
    icon: <FaInstagram />,
    link: 'https://instagram.com/yourProfile',
    className: 'instagram',
  },
  {
    icon: <FaFacebookF />,
    link: 'https://facebook.com/yourPage',
    className: 'facebook',
  },
  {
    icon: <FaTwitter />,
    link: 'https://twitter.com/yourProfile',
    className: 'twitter',
  },
];

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      {icons.map((item, index) => (
        <motion.a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-icon ${item.className}`}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 120, delay: index * 0.1 }}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialSidebar;
