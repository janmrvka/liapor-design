/**
 * Motion configuration and utilities
 * Optimized settings for Framer Motion to improve performance
 */

// Reduced motion preferences
export const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false;

// Default transition settings optimized for performance
export const defaultTransition = {
  type: 'tween',
  ease: 'easeOut',
  duration: 0.3,
};

// Fade animation variants
export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Slide animation variants
export const slideVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Scale animation variants
export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

// Motion config for better performance
export const motionConfig = {
  // Reduce animation complexity on lower-end devices
  skipAnimations: prefersReducedMotion,
  // Use will-change sparingly
  layoutTransition: false,
};

// Optimized motion props for common use cases
export const optimizedMotionProps = {
  // Disable layout animations by default (expensive)
  layout: false,
  // Use GPU-accelerated properties
  style: { willChange: 'transform, opacity' },
};
