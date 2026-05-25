'use client';

import { motion } from 'framer-motion';
import { EASINGS } from '@/lib/constants';

/**
 * ScaleIn - Scale-in animation with optional bounce
 * Used for emphasizing important elements
 */
export default function ScaleIn({
  children,
  delay = 0,
  scale = 0.8,
  duration = 0.5,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: scale,
      }}
      animate={{
        opacity: 1,
        scale: 1,
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
