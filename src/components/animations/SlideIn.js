'use client';

import { motion } from 'framer-motion';
import { EASINGS } from '@/lib/constants';

/**
 * SlideIn - Slide-in animation from different directions
 * Supports: up, down, left, right
 */
export default function SlideIn({
  children,
  direction = 'up',
  delay = 0,
  distance = 60,
  duration = 0.7,
}) {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
      }}
      transition={{
        duration,
        delay,
        ease: EASINGS.smooth,
      }}
    >
      {children}
    </motion.div>
  );
}
