import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from '../src/images/logo-2.png'; // Update with the path to your logo
import { springSmooth } from './motion';

const NetflixTitle: React.FC = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isClicked) {
      const audioContext = new AudioContext();
      let sourceNode: AudioBufferSourceNode;

      const loadAndPlaySound = async () => {
        try {
          await audioContext.resume();
          const response = await fetch(netflixSound);
          const arrayBuffer = await response.arrayBuffer();
          const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

          sourceNode = audioContext.createBufferSource();
          sourceNode.buffer = audioBuffer;
          sourceNode.connect(audioContext.destination);
          sourceNode.start(0);
        } catch (err) {
          console.error("Sound error:", err);
        }
      };

      loadAndPlaySound();

      // Navigate after sound finishes
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  const handleStart = () => {
    if (!isClicked) {
      setIsClicked(true);
    }
  };

  
  return (
    <div className="netflix-container" onClick={handleStart}>
      <motion.img
        src={logoImage}
        alt="Custom Logo"
        className="netflix-logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isClicked
            ? prefersReducedMotion
              ? { opacity: 0, transition: { delay: 0.5, duration: 0.4 } }
              : { 
                  opacity: 0, 
                  scale: 3, 
                  // Added the 0.5s delay right here!
                  transition: { delay: 0.9, duration: 3, ease: [0.16, 1, 0.3, 1] } 
                }
            : { opacity: 1, scale: 1, transition: springSmooth }
        }
      />
      {!isClicked && (
        <motion.p
          className="netflix-hint glass glass-pill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.6 } }}
        >
          Tap to begin
          {/* This span holds the spinning light beam */}
          <span className="border-beam"></span>
        </motion.p>
      )}
    </div>
  );
};

export default NetflixTitle;