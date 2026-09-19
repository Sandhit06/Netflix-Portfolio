import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ProfileCard from '../components/ProfileCard';
import './browse.css';
import { profiles } from '../data/constants';
import { staggerContainer } from '../motion';


const Browse: React.FC = () => {
  const navigate = useNavigate();

  const handleProfileClick = (profile: { name: string; image: string; backgroundGif: string }) => {
    localStorage.removeItem("selectedProfile");
    localStorage.removeItem("backgroundGif");
    localStorage.removeItem("profileImage");

    localStorage.setItem("selectedProfile", profile.name);
    localStorage.setItem("backgroundGif", profile.backgroundGif);
    localStorage.setItem("profileImage", profile.image);
    navigate(`/profile/${profile.name}`);
  };

  return (
    <div className="browse-container">
      <motion.p
        className='who-is-watching'
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Who's Watching?
      </motion.p>
      <motion.div
        className="profiles glass glass-panel"
        variants={staggerContainer(0.12, 0.2)}
        initial="hidden"
        animate="visible"
      >
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            onClick={() => handleProfileClick(profile)}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Browse;