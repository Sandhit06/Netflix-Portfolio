import React, { useEffect, useLayoutEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import NetflixTitle from './NetflixTitle';
import ProfilePage from './profilePage/profilePage';
import Browse from './browse/browse';
import WorkExperience from './pages/WorkExperience';
import Recommendations from './pages/Recommendations';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Game from './pages/Game';
import Layout from './Layout';
import Music from './pages/Music';
import Reading from './pages/Reading';
import Blogs from './pages/Blogs';
import Certifications from './pages/Certifications';
import PageTransition from './components/PageTransition';

/** Reset the document scroll position whenever the active route changes. */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Prevent the browser from restoring the previous scroll position during
    // client-side route changes or when navigating back/forward.
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><NetflixTitle /></PageTransition>} />
          <Route path="/browse" element={<PageTransition><Browse /></PageTransition>} />
          <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
          <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
          <Route path="/recommendations" element={<Layout><Recommendations /></Layout>} />
          <Route path="/skills" element={<Layout><Skills /></Layout>} />
          <Route path="/projects" element={<Layout><Projects /></Layout>} />
          <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
          <Route path="/music" element={<Layout><Music /></Layout>} />
          <Route path="/reading" element={<Layout><Reading /></Layout>} />
          <Route path="/blogs" element={<Layout><Blogs /></Layout>} />
          <Route path="/game" element={<PageTransition><Game /></PageTransition>} />
          <Route path="/certifications" element={<Layout><Certifications /></Layout>} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
