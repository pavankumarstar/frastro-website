import React from 'react';
import './ContactInfo.css'; // Import the CSS
import { GoLocation } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";


const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      <div className="info-box">
        <div className="icon-circle">
          <GoLocation />
        </div>
        <p>
          <strong>Address:</strong><br />
         7A-7086 Airport road <br />
          Mississauga L4T-2G8 ON Canada
        </p>
      </div>

      <div className="info-box">
        <div className="icon-circle">
          <FiPhone />

        </div>
        <p>
          <strong>Phone:</strong> <br />
          <a href="tel:+1235235598">+1647-471-3459 </a>
        </p>
      </div>

      <div className="info-box">
        <div className="icon-circle">
          <MdEmail />


        </div>
        <p>
          <strong>Email:</strong> <br />
          <a href="mailto:panditraj5561@gmail.com">panditraj5561@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
