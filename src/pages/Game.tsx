// src/pages/Game.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Game.css';
import { FaTimes } from 'react-icons/fa';
import { buttonTap } from '../motion';


const Game: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Disable scroll on mount
        return () => {
            document.body.style.overflow = 'auto'; // Re-enable on unmount
        };
    }, []);

    const handleClose = () => {
        const profile = localStorage.getItem('selectedProfile') || 'Recruiter';
        navigate(`/profile/${profile}`);
    };

    return (
        <div className="game-container">
            <div className="iframe-wrapper">
                <iframe
                    src="https://cuberun.adamkarlsten.com/"
                    title="Cube Run"
                    className="game-iframe"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-modals allow-pointer-lock"
                    allow="fullscreen; autoplay; gamepad; pointer-lock"
                    loading="lazy"
                />
            </div>
            <motion.button
                className="netflix-close-button glass glass-pill"
                onClick={handleClose}
                aria-label="Close Game"
                {...buttonTap}
            >
                <FaTimes />
            </motion.button>
        </div>
    );
};

export default Game;
