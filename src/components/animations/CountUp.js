'use client';

import { useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

/**
 * CountUp - Animated number counter
 * Animates from 0 to target value with spring physics
 * Supports various formats: plain numbers, percentages, currency, etc.
 */
export default function CountUp({
  value,
  duration = 2000,
  className = '',
  delay = 0,
}) {
  // Parse the value to extract number and suffix/prefix
  const parseValue = (val) => {
    if (typeof val === 'number') {
      return { number: val, prefix: '', suffix: '' };
    }

    const str = String(val);

    // Match patterns like "XX%", "XX mil. Kč", "XX projektů", etc.
    const match = str.match(/^(.*?)(\d+(?:[.,]\d+)?)(.*?)$/);

    if (match) {
      const number = parseFloat(match[2].replace(',', '.'));
      return {
        number: isNaN(number) ? 0 : number,
        prefix: match[1].trim(),
        suffix: match[3].trim(),
      };
    }

    return { number: 0, prefix: '', suffix: str };
  };

  const { number, prefix, suffix } = parseValue(value);

  // Create spring animation
  const spring = useSpring(0, {
    duration,
    bounce: 0,
  });

  // Transform to rounded integer or decimal based on original format
  const hasDecimal = String(value).includes('.') || String(value).includes(',');
  const displayValue = useTransform(spring, (latest) => {
    if (hasDecimal) {
      return latest.toFixed(1);
    }
    return Math.round(latest).toString();
  });

  // Start animation after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      spring.set(number);
    }, delay);

    return () => clearTimeout(timer);
  }, [number, delay, spring]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000, duration: 0.3 }}
    >
      {prefix && <span>{prefix} </span>}
      <motion.span>{displayValue}</motion.span>
      {suffix && <span> {suffix}</span>}
    </motion.span>
  );
}
