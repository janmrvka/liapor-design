import { useEffect } from 'react';
import { KEYBOARD_KEYS } from '@/lib/constants';

/**
 * Hook for keyboard navigation between slides
 * @param {number} currentSlide - Current slide index
 * @param {number} totalSlides - Total number of slides
 * @param {function} onNavigate - Callback to navigate to specific slide
 */
export function useKeyboardNavigation(currentSlide, totalSlides, onNavigate) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore navigation when typing in input/textarea
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      // Check if key is a navigation key
      const isNavigationKey = [
        ...KEYBOARD_KEYS.next,
        ...KEYBOARD_KEYS.prev,
        ...KEYBOARD_KEYS.first,
        ...KEYBOARD_KEYS.last,
      ].includes(e.key);

      // Prevent default for navigation keys
      if (isNavigationKey) {
        e.preventDefault();
      }

      // Next slide
      if (KEYBOARD_KEYS.next.includes(e.key)) {
        if (currentSlide < totalSlides - 1) {
          onNavigate(currentSlide + 1);
        }
      }

      // Previous slide
      if (KEYBOARD_KEYS.prev.includes(e.key)) {
        if (currentSlide > 0) {
          onNavigate(currentSlide - 1);
        }
      }

      // First slide
      if (KEYBOARD_KEYS.first.includes(e.key)) {
        onNavigate(0);
      }

      // Last slide
      if (KEYBOARD_KEYS.last.includes(e.key)) {
        onNavigate(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSlide, totalSlides, onNavigate]);
}
