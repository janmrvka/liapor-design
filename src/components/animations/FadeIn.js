'use client';

import { motion } from 'framer-motion';
import { ANIMATIONS } from '@/lib/constants';

/**
 * FadeIn - Simple fade-in animation
 * Used for subtle element appearances
 */
export default function FadeIn({ children, delay = 0, duration = 0.6 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ...ANIMATIONS.fadeIn.transition,
        delay,
        duration,
      }}
    >
      {children}
    </motion.div>
  );
}
