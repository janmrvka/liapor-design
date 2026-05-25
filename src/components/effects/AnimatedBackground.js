'use client';

import { motion } from 'framer-motion';

/**
 * AnimatedBackground - Animated gradient backgrounds
 * Creates dynamic, moving gradient effects for slides
 * Multiple variants for different sections and moods
 */
export default function AnimatedBackground({
  variant = 'green',
  className = '',
}) {
  // Define gradient animations for different variants
  const variants = {
    green: {
      animate: {
        background: [
          'radial-gradient(circle at 20% 50%, rgba(91, 255, 196, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
          'radial-gradient(circle at 80% 50%, rgba(91, 255, 196, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
          'radial-gradient(circle at 50% 80%, rgba(91, 255, 196, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
          'radial-gradient(circle at 20% 50%, rgba(91, 255, 196, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
        ],
      },
    },
    blue: {
      animate: {
        background: [
          'radial-gradient(circle at 30% 40%, rgba(215, 237, 255, 0.2) 0%, rgba(0, 0, 0, 0) 50%)',
          'radial-gradient(circle at 70% 60%, rgba(215, 237, 255, 0.2) 0%, rgba(0, 0, 0, 0) 50%)',
          'radial-gradient(circle at 30% 40%, rgba(215, 237, 255, 0.2) 0%, rgba(0, 0, 0, 0) 50%)',
        ],
      },
    },
    purple: {
      animate: {
        background: [
          'radial-gradient(circle at 40% 50%, rgba(218, 212, 255, 0.2) 0%, rgba(0, 0, 0, 0) 50%)',
          'radial-gradient(circle at 60% 50%, rgba(218, 212, 255, 0.2) 0%, rgba(0, 0, 0, 0) 50%)',
          'radial-gradient(circle at 40% 50%, rgba(218, 212, 255, 0.2) 0%, rgba(0, 0, 0, 0) 50%)',
        ],
      },
    },
    yellow: {
      animate: {
        background: [
          'radial-gradient(circle at 50% 30%, rgba(255, 253, 146, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
          'radial-gradient(circle at 50% 70%, rgba(255, 253, 146, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
          'radial-gradient(circle at 50% 30%, rgba(255, 253, 146, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
        ],
      },
    },
    pink: {
      animate: {
        background: [
          'radial-gradient(circle at 60% 40%, rgba(255, 226, 235, 0.2) 0%, rgba(0, 0, 0, 0) 50%)',
          'radial-gradient(circle at 40% 60%, rgba(255, 226, 235, 0.2) 0%, rgba(0, 0, 0, 0) 50%)',
          'radial-gradient(circle at 60% 40%, rgba(255, 226, 235, 0.2) 0%, rgba(0, 0, 0, 0) 50%)',
        ],
      },
    },
    brown: {
      animate: {
        background: [
          'radial-gradient(circle at 35% 45%, rgba(255, 228, 193, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
          'radial-gradient(circle at 65% 55%, rgba(255, 228, 193, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
          'radial-gradient(circle at 35% 45%, rgba(255, 228, 193, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
        ],
      },
    },
    multi: {
      animate: {
        background: [
          'radial-gradient(circle at 20% 30%, rgba(91, 255, 196, 0.1) 0%, rgba(0, 0, 0, 0) 40%), radial-gradient(circle at 80% 70%, rgba(215, 237, 255, 0.1) 0%, rgba(0, 0, 0, 0) 40%)',
          'radial-gradient(circle at 80% 30%, rgba(255, 226, 235, 0.1) 0%, rgba(0, 0, 0, 0) 40%), radial-gradient(circle at 20% 70%, rgba(218, 212, 255, 0.1) 0%, rgba(0, 0, 0, 0) 40%)',
          'radial-gradient(circle at 20% 30%, rgba(91, 255, 196, 0.1) 0%, rgba(0, 0, 0, 0) 40%), radial-gradient(circle at 80% 70%, rgba(215, 237, 255, 0.1) 0%, rgba(0, 0, 0, 0) 40%)',
        ],
      },
    },
  };

  const selectedVariant = variants[variant] || variants.green;

  return (
    <motion.div
      className={`absolute inset-0 -z-10 ${className}`}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        ...selectedVariant.animate,
      }}
      transition={{
        opacity: { duration: 0.5 },
        background: {
          duration: 12,
          repeat: Infinity,
          ease: 'linear',
        },
      }}
    />
  );
}
