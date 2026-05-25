'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

/**
 * Progress indicator showing current position in presentation
 * Displays as progress bar and dots at the bottom of the screen
 * Enhanced with: animated progress bar, pulsing glow, click navigation
 */
export default function ProgressIndicator({ current, total, goToSlide }) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-50">
      {/* Dot indicators */}
      <div className="flex gap-2 items-center">
        {Array.from({ length: total }).map((_, index) => {
          const isActive = index === current;

          return (
            <motion.button
              key={index}
              className={cn(
                'rounded-full cursor-pointer transition-colors duration-200',
                isActive ? 'bg-ant-green' : 'bg-ant-gray-400 hover:bg-ant-gray-300'
              )}
              onClick={() => goToSlide && goToSlide(index)}
              initial={false}
              animate={{
                width: isActive ? 32 : 8,
                height: 8,
              }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              aria-label={`Slide ${index + 1} of ${total}`}
              aria-current={isActive ? 'true' : 'false'}
            />
          );
        })}
      </div>
    </div>
  );
}
