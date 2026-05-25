'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { EASINGS } from '@/lib/constants';

/**
 * SlideTransition - Page-level transition wrapper
 * Wraps entire slides with smooth entry/exit animations
 * Enhanced with 3D perspective transform for dramatic effect
 */
export default function SlideTransition({ children, slideId }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={slideId}
        initial={{
          opacity: 0,
          x: 100,
          rotateY: 15,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          x: 0,
          rotateY: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          x: -100,
          rotateY: -15,
          scale: 0.95,
        }}
        transition={{
          duration: 0.6,
          ease: EASINGS.smooth,
        }}
        style={{
          transformStyle: 'preserve-3d',
          perspective: 1000,
          position: 'relative',
          zIndex: 0,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
