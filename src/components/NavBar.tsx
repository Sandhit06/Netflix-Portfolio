import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaHome, FaBriefcase, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; // Import icons
import './Navbar.css';
import netflixLogo from '../images/logo-2.png';
import blueImage from '../images/blue.png';
import { springSheet } from '../motion';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const profileImage = localStorage.getItem('profileImage') || blueImage;
  const profileName = localStorage.getItem('selectedProfile') || 'Recruiter';

  useEffect(() => {
    // We attach the scroll event with { capture: true } 
    // This forces the window to listen to ANY scrolling happening inside ANY element on the page
    const handleScrollEvent = (e: Event) => {
      // The event target is the specific container that is scrolling (e.g., your #root or body)
      const target = e.target as HTMLElement | Document;
      
      // Determine how far down that container has scrolled
      let currentScrollY = 0;
      
      if (target instanceof Document) {
        currentScrollY = window.scrollY; // Fallback if the window itself is scrolling
      } else {
        currentScrollY = target.scrollTop; // Gets the scroll position of the specific div
      }

      // Trigger the glass effect if scrolled past 80px
      setIsScrolled(currentScrollY > 80);
    };

    // The magical `{ capture: true }` makes it intercept all scroll events inside the app
    window.addEventListener('scroll', handleScrollEvent, { capture: true });

    return () => {
      window.removeEventListener('scroll', handleScrollEvent, { capture: true });
    };
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={netflixLogo} alt="Netflix" />
          </Link>
          <ul className="navbar-links">
            <li><Link to={`/profile/${profileName}`}>Home</Link></li>
            <li><Link to="/work-experience">Professional</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact-me">Hire Me</Link></li>
          </ul>
        </div>
        <div className="navbar-right">
          <div className={`hamburger ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
            <div></div><div></div><div></div>
          </div>
          <img src={profileImage} alt="Profile" className="profile-icon" onClick={() => navigate('/browse')} />
        </div>
      </nav>

      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            key="sidebar-overlay"
            className="sidebar-overlay"
            onClick={closeSidebar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        )}
        {isSidebarOpen && (
          <motion.div
            key="sidebar"
            className="sidebar"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={springSheet}
          >
            <div className="sidebar-logo">
              <img src={netflixLogo} alt="Netflix Logo" />
            </div>
            <ul>
              <li><Link to={`/profile/${profileName}`} onClick={closeSidebar}><FaHome /> Home</Link></li>
              <li><Link to="/work-experience" onClick={closeSidebar}><FaBriefcase /> Professional</Link></li>
              <li><Link to="/skills" onClick={closeSidebar}><FaTools /> Skills</Link></li>
              <li><Link to="/projects" onClick={closeSidebar}><FaProjectDiagram /> Projects</Link></li>
              <li><Link to="/contact-me" onClick={closeSidebar}><FaEnvelope /> Hire Me</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
