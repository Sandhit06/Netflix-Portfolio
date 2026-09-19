import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiGooglecloud, SiUdemy, SiCoursera, SiIeee, SiHackerrank, SiAmazon } from 'react-icons/si';
import { Certification } from '../types';
import { certificationsData } from '../data/constants';
import { staggerContainer, fadeSlideUp, cardHover } from '../motion';
const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />,
  'googlecloud': <SiGooglecloud />,
  'aws': <SiAmazon />,
  'hackerrank': <SiHackerrank />,
}

const Certifications: React.FC = () => {

  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    async function fetchCertifications() {
      const data = certificationsData;
      setCertifications(data);
    }

    fetchCertifications();
  }, []);

  if (certifications.length === 0) return <div>Loading...</div>;

  return (
    <div className="certifications-container">
      <motion.div
        className="certifications-grid"
        variants={staggerContainer(0.08)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {certifications.map((cert, index) => (
          <motion.a
            href={cert.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card"
            variants={fadeSlideUp}
            {...cardHover}
          >
            <div className="certification-content">
              <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Certifications;
