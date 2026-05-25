'use client';

import { motion } from 'framer-motion';

/**
 * StaggerChildren - Staggers animation of child elements
 * Each child appears with a delay after the previous one
 */
export default function StaggerChildren({
  children,
  staggerDelay = 0.1,
  childVariant = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  },
}) {
  const containerVariants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={containerVariants}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={childVariant}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={childVariant}>{children}</motion.div>
      )}
    </motion.div>
  );
}
