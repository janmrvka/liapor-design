import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind classes with clsx and tailwind-merge
 * Useful for conditional class names and avoiding conflicts
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Check if slide index is valid
 */
export function isValidSlideIndex(index, totalSlides) {
  return index >= 0 && index < totalSlides;
}

/**
 * Clamp value between min and max
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
