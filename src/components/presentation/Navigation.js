import { useKeyboardNavigation } from '@/hooks/useKeyboardNavigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Navigation component with subtle arrow buttons and keyboard support
 */
export default function Navigation({ currentSlide, totalSlides, onNavigate }) {
  useKeyboardNavigation(currentSlide, totalSlides, onNavigate);

  const canGoPrev = currentSlide > 0;
  const canGoNext = currentSlide < totalSlides - 1;

  return (
    <>
      {/* Previous button - left side */}
      {canGoPrev && (
        <button
          onClick={() => onNavigate(currentSlide - 1)}
          className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-50
                     bg-black/20 hover:bg-black/40 backdrop-blur-sm
                     text-white p-3 md:p-4 rounded-full
                     transition-all duration-200 hover:scale-110
                     border border-white/10 hover:border-white/30
                     group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8 group-hover:-translate-x-0.5 transition-transform" />
        </button>
      )}

      {/* Next button - right side */}
      {canGoNext && (
        <button
          onClick={() => onNavigate(currentSlide + 1)}
          className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50
                     bg-black/20 hover:bg-black/40 backdrop-blur-sm
                     text-white p-3 md:p-4 rounded-full
                     transition-all duration-200 hover:scale-110
                     border border-white/10 hover:border-white/30
                     group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-0.5 transition-transform" />
        </button>
      )}
    </>
  );
}
