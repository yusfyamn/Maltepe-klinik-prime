// Animation System - Premium Dental Clinic
// Framer Motion animation variants for consistent animations

import { Variants, Transition } from 'framer-motion';
import { timing, easing } from './design-tokens';

// Standard transition configuration
const smoothTransition: Transition = {
  duration: timing.normal,
  ease: easing.smooth as [number, number, number, number],
};

const fastTransition: Transition = {
  duration: timing.fast,
  ease: easing.smooth as [number, number, number, number],
};

const slowTransition: Transition = {
  duration: timing.slow,
  ease: easing.smooth as [number, number, number, number],
};

// Fade In - Simple opacity animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: smoothTransition,
  },
};

// Fade In Up - Opacity + upward movement
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: smoothTransition,
  },
};

// Fade In Down - Opacity + downward movement
export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: -20,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: smoothTransition,
  },
};

// Fade In Left - Opacity + left to right movement
export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -30,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: smoothTransition,
  },
};

// Fade In Right - Opacity + right to left movement
export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 30,
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: smoothTransition,
  },
};

// Scale In - Opacity + scale animation
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: fastTransition,
  },
};

// Stagger Container - For animating children with delays
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: timing.stagger,
      delayChildren: 0.1,
    },
  },
};

// Stagger Item - Child variant for stagger container
export const staggerItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: smoothTransition,
  },
};

// Hero Animation Sequence - Coordinated delays for hero content
export const heroSequence = {
  tag: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: timing.normal, delay: 0.3, ease: easing.smooth as [number, number, number, number] },
    },
  } as Variants,
  title: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: timing.slow, delay: 0.4, ease: easing.smooth as [number, number, number, number] },
    },
  } as Variants,
  subtitle: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: timing.normal, delay: 0.6, ease: easing.smooth as [number, number, number, number] },
    },
  } as Variants,
  cta: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: timing.normal, delay: 0.8, ease: easing.smooth as [number, number, number, number] },
    },
  } as Variants,
};

// Viewport configuration for scroll-triggered animations
// Optimize: Daha erken trigger için margin azaltıldı
export const viewportConfig = {
  once: true,
  margin: "-50px", // -100px yerine -50px - animasyonlar daha erken başlar
  amount: 0.2, // Element'in %20'si görününce tetikle
} as const;

// Helper function to create custom delay variants
export const createDelayedVariant = (baseVariant: Variants, delay: number): Variants => {
  return {
    hidden: baseVariant.hidden,
    visible: {
      ...baseVariant.visible,
      transition: {
        ...(typeof baseVariant.visible === 'object' && 'transition' in baseVariant.visible 
          ? baseVariant.visible.transition 
          : {}),
        delay,
      },
    },
  };
};

// Helper function to get stagger delay for index
export const getStaggerDelay = (index: number, baseDelay: number = timing.stagger): number => {
  return index * baseDelay;
};

// ===========================================
// LIGHT-SASS MENU ANIMATIONS (Mobile Navbar)
// ===========================================

// Menu slide-in from right with smooth easing
export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
} as const;

// Individual link slide animation with stagger
export const linkSlide = {
  initial: { x: 80 },
  enter: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
  exit: (i: number) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
} as const;

// SVG curve path animation
export const getCurveVariants = () => {
  if (typeof window === 'undefined') {
    return {
      initial: { d: "" },
      enter: { d: "" },
      exit: { d: "" },
    } as any;
  }

  const height = window.innerHeight;
  const initialPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${height / 2} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${height / 2} 100 0`;

  return {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as any },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as any },
    },
  } as any;
};
