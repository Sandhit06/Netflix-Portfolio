import React from 'react';
import { motion } from 'framer-motion';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';
import { ProfileBanner as ProfileBannerType } from '../types';
import { staggerContainer, fadeSlideUp } from '../motion';

interface ProfileBannerProps {
  bannerData: ProfileBannerType;
}

const ProfileBanner: React.FC<ProfileBannerProps> = ({ bannerData }) => {
  const handlePlayClick = () => {
    window.open(bannerData.resumeLink, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(bannerData.linkedinLink, '_blank');
  };

  return (
    <div className="profile-banner">
      <motion.div
        className="banner-content"
        variants={staggerContainer(0.15)}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="banner-headline" id="headline" variants={fadeSlideUp}>
          {bannerData.headline}
        </motion.h1>

        <motion.div className="banner-buttons" variants={fadeSlideUp}>
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="Linkedin" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProfileBanner;
