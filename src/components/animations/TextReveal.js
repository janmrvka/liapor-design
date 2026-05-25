'use client';

import { motion } from 'framer-motion';

/**
 * TextReveal - Word-by-word reveal animation
 * Splits text into words and animates each with staggered delay
 * Creates dramatic entry effect for hero titles and key statements
 * Preserves newlines by splitting into lines first
 */
export default function TextReveal({
  children,
  delay = 0,
  staggerDelay = 0.08,
  duration = 0.6,
  className = '',
}) {
  const text = typeof children === 'string' ? children : '';

  // Split by newlines first, then by spaces within each line
  const lines = text.split('\n');
  let wordIndex = 0;

  return (
    <span className={className}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex}>
          {line.split(' ').map((word, idx) => {
            const currentWordIndex = wordIndex++;
            return (
              <span key={idx} className="inline-block">
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: delay + currentWordIndex * staggerDelay,
                    duration,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {word}
                </motion.span>
                {idx < line.split(' ').length - 1 && <span>&nbsp;</span>}
              </span>
            );
          })}
          {/* Add line break after each line except the last */}
          {lineIndex < lines.length - 1 && <br />}
        </span>
      ))}
    </span>
  );
}
