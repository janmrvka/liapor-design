// Animation variants for Framer Motion
export const ANIMATIONS = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  slideInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  slideInRight: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

// Easing curves
export const EASINGS = {
  smooth: [0.22, 1, 0.36, 1], // Custom easeOutExpo
  bouncy: [0.68, -0.55, 0.265, 1.55], // Back easing
  spring: { type: 'spring', stiffness: 100, damping: 15 },
};

// Brand colors (matching Tailwind config)
export const COLORS = {
  primary: {
    green: '#5bffc4',
    black: '#000000',
    lightGray: '#e7e8e9',
    darkGray: '#aeb1b7',
  },
  secondary: {
    brown: '#ffe4c1',
    purple: '#dad4ff',
    yellow: '#fffd92',
    pink: '#ffe2eb',
    blue: '#d7edff',
  },
  grays: {
    900: '#161616',
    800: '#2d2d2d',
    700: '#4d4d4d',
    600: '#6d6d6d',
    500: '#8d8d8d',
    400: '#aeb1b7',
    300: '#c7c8c9',
    200: '#e7e8e9',
    100: '#f5f5f5',
    50: '#fafafa',
  },
};

// Keyboard navigation keys
export const KEYBOARD_KEYS = {
  next: ['ArrowRight', 'ArrowDown', ' ', 'PageDown'],
  prev: ['ArrowLeft', 'ArrowUp', 'PageUp'],
  first: ['Home'],
  last: ['End'],
};
