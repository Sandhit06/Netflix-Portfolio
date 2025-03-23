import React, { useEffect, useState } from 'react';
import './ContactMe.css';
import profilePic from '../images/sandhit.jpg';
import {
  FaEnvelope,
  FaCoffee,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram
} from 'react-icons/fa';
import { ContactMe as IContactMe } from '../types';
import { contactInfo } from '../data/constants';

const ContactMe: React.FC = () => {
  const [userData, setUserData] = useState<IContactMe>();

  useEffect(() => {
    async function fetchUserData() {
      const data = contactInfo;
      setUserData(data);
    }

    fetchUserData();
  }, []);

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        {/* LinkedIn Badge */}
        <div className="linkedin-badge-custom">
          <img src={profilePic} alt="Sandhit" className="badge-avatar" />
          <div className="badge-content">
            <h3 className="badge-name">{userData?.name}</h3>
            <p className="badge-title">{userData.title}</p>
            <p className="badge-description">{userData.summary}</p>
            <p className="badge-company">{userData.companyUniversity}</p>
            <a
              href={userData.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="badge-link"
            >
              <FaLinkedin className="linkedin-icon" /> View Profile
            </a>
          </div>
        </div>
        <p className="contact-invite">
          I'm always up for a chat or a coffee! Feel free to reach out <FaCoffee className="coffee-icon" />
        </p>
      </div>

      {/* Footer */}
      <footer className="contact-footer">
        <div className="social-icons">
          <a href="mailto:sandhitkarmakar@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://github.com/Sandhit06" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com/sandhitk" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/rizdhitz/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
        <p className="footer-text white-only">© 2025 Sandhit Karmakar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactMe;
