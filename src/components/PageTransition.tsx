import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../motion';

interface PageTransitionProps {
  children: React.ReactNode;
}

/** Wraps a route's content in a spring-based crossfade + slight rise,
 *  used by both Layout (for inner pages) and the standalone routes
 *  (NetflixTitle, Browse, Game) so every route transition is consistent. */
const PageTransition: React.FC<PageTransitionProps> = ({ children }) => (
  <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition}>
    {children}
  </motion.div>
);

export default PageTransition;
