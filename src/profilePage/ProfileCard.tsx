import React from 'react';
import { motion } from 'framer-motion';
import { fadeSlideUp, cardHover } from '../motion';
import './ProfileCard.css';

interface ProfileCardProps {
  name: string;
  image: string;
  onClick: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, image, onClick }) => {
  return (
    <motion.div className="profile-card" onClick={onClick} variants={fadeSlideUp} {...cardHover}>
      <div className="image-container">
        <img src={image} alt={`${name} profile`} className="profile-image" />
      </div>
      <h3 className="profile-name">{name}</h3>
    </motion.div>
  );
};

export default ProfileCard;
