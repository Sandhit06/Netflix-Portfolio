import React from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { springSnappy } from '../motion';
import './ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      className="theme-toggle glass glass-pill tap-scale"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-pressed={isDark}
    >
      <div className="theme-toggle-track" style={{ justifyContent: isDark ? 'flex-end' : 'flex-start' }}>
        <motion.span className="theme-toggle-knob" layout transition={springSnappy}>
          {isDark ? <FaMoon /> : <FaSun />}
        </motion.span>
      </div>
    </button>
  );
};

export default ThemeToggle;
