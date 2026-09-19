// src/pages/Game.tsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Game.css';
import { FaTimes } from 'react-icons/fa';
import { buttonTap } from '../motion';

const CUBE_RUN_URL = 'https://cuberun.adamkarlsten.com/';

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
                    src={CUBE_RUN_URL}
                    title="Cube Run"
                    className="game-iframe"
                    allow="fullscreen; autoplay; gamepad; pointer-lock"
                />
            </div>
            <div className="mobile-game-launch">
                <p>Cube Run needs its own browser surface for mobile touch controls.</p>
                <a
                    href={CUBE_RUN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-game-button"
                >
                    Open Cube Run
                </a>
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
