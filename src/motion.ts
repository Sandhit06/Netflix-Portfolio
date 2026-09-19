// motion.ts
// Shared Framer Motion primitives implementing the fluid-interface
// principles from SKILL.md: critically-damped springs by default,
// bounce reserved for momentum-driven gestures, and one consistent
// set of curves reused across the whole app instead of ad-hoc
// per-component @keyframes.
import { Transition, Variants } from 'framer-motion';

/** Default UI spring — critically damped (no overshoot), response ~0.4s. */
export const springSmooth: Transition = {
  type: 'spring',
  bounce: 0,
  duration: 0.4,
};

/** Snappier spring for small, frequent interactions (buttons, chips, hovers). */
export const springSnappy: Transition = {
  type: 'spring',
  bounce: 0,
  duration: 0.3,
};

/** Momentum spring — only for gesture-driven elements (drag release, flicks). */
export const springMomentum: Transition = {
  type: 'spring',
  bounce: 0.2,
  duration: 0.4,
};

/** Drawer/sheet spring, matching Apple's shipped damping/response for sheets. */
export const springSheet: Transition = {
  type: 'spring',
  bounce: 0.25,
  duration: 0.3,
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: springSmooth },
};

export const fadeSlideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: springSmooth },
};

/** Builds a stagger-container variant so children animate in sequence. */
export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

/** Whole-page crossfade used by the route transition wrapper. */
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: springSmooth },
  exit: { opacity: 0, y: -12, transition: { ...springSmooth, duration: 0.25 } },
};

/** Hover/tap presets for glass cards — lift + scale, spring-based. */
export const cardHover = {
  whileHover: { y: -6, scale: 1.02, transition: springSnappy },
  whileTap: { scale: 0.98, transition: springSnappy },
};

/** Press feedback for buttons/icons converted to motion components. */
export const buttonTap = {
  whileTap: { scale: 0.97, transition: springSnappy },
};
