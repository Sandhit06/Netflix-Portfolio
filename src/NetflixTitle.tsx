import React, { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from '../src/images/logo-2.png'; // Update with the path to your logo

const NetflixTitle: React.FC = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

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
      <img
        src={logoImage}
        alt="Custom Logo"
        className={`netflix-logo ${isClicked ? 'animate' : ''}`}
      />
    </div>
  );
};

export default NetflixTitle;