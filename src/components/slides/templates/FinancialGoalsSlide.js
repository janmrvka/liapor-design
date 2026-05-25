'use client';

import { motion } from 'framer-motion';
import SlideIn from '@/components/animations/SlideIn';
import CountUp from '@/components/animations/CountUp';

/**
 * Financial Goals Slide Template - Apple Rings matching NumbersSlide design
 * Same layout and style as NumbersSlide, but with Apple Watch rings visualization
 */
export default function FinancialGoalsSlide({ content, config = {} }) {
  const {
    backgroundColor = 'bg-white',
    textColor = 'text-black',
    accentColor = 'text-ant-green',
  } = config;

  // Extract accent color for dynamic styling
  const accentColorValue = accentColor.includes('ant-green') ? '#5bffc4' :
                           accentColor.includes('ant-blue') ? '#d7edff' :
                           accentColor.includes('ant-pink') ? '#ffe2eb' : '#5bffc4';

  // Use dark blobs on green background for better contrast
  const blobColor = backgroundColor.includes('green') ? '#000000' : accentColorValue;

  // Determine grid columns based on number of items (same as NumbersSlide)
  const itemCount = content.goals.length;
  const gridCols = itemCount === 2 ? 'md:grid-cols-2' : itemCount === 3 ? 'md:grid-cols-3' : 'md:grid-cols-1';

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${backgroundColor} px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 pb-24 relative overflow-hidden`}
    >
      {/* Animated background gradient blobs */}
      <motion.div
        className="absolute -left-32 top-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: blobColor }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -right-32 bottom-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: blobColor }}
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-6xl w-full relative z-10">
        {/* Title - SAME AS NUMBERSLIDE */}
        <SlideIn direction="up" delay={0.1}>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold ${textColor} mb-8 md:mb-12 lg:mb-20 text-center`}>
            {content.title}
          </h2>
        </SlideIn>

        {/* Grid - SAME AS NUMBERSLIDE */}
        <div className={`grid grid-cols-1 ${gridCols} gap-6 md:gap-10 lg:gap-16 ${itemCount === 2 ? 'max-w-4xl mx-auto' : ''}`}>
          {content.goals.map((goal, index) => {
            // Calculate percentage
            const target = parseFloat(goal.target) || 100;
            const actual = parseFloat(goal.actual) || 0;
            const percentage = Math.min((actual / target) * 100, 100);

            // Ring color - red for incomplete, black for achieved
            const ringColor = percentage >= 100 ? '#000000' : '#ef4444';
            const ringOpacity = percentage >= 100 ? 0.8 : 0.7; // Full opacity for achieved, slightly less for incomplete

            // SVG circle calculations
            const radius = 115; // Larger ring so it doesn't overlap numbers
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percentage / 100) * circumference;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex flex-col items-center"
              >
                {/* Apple Ring - positioned above number like progress circle */}
                <div className="relative mb-6 flex justify-center">
                  {/* Ring SVG */}
                  <svg className="w-64 h-64 -rotate-90" viewBox="0 0 260 260">
                    {/* Background ring */}
                    <circle
                      cx="130"
                      cy="130"
                      r={radius}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      className="opacity-10"
                      style={{ color: textColor === 'text-black' ? '#000' : '#fff' }}
                    />

                    {/* Progress ring */}
                    <motion.circle
                      cx="130"
                      cy="130"
                      r={radius}
                      fill="none"
                      stroke={ringColor}
                      strokeWidth="14"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeOpacity={ringOpacity}
                      initial={{ strokeDashoffset: circumference }}
                      animate={{ strokeDashoffset: offset }}
                      transition={{
                        delay: 0.5 + index * 0.15,
                        duration: 2,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                      style={{
                        filter: `drop-shadow(0 0 8px ${ringColor}20)`
                      }}
                    />
                  </svg>

                  {/* Number or checkmark in center of ring */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`text-display font-bold ${accentColor} leading-none relative z-10`}>
                      {goal.showCheckmark ? (
                        <span className="text-8xl">✓</span>
                      ) : (
                        <>
                          <CountUp
                            value={goal.actual}
                            duration={2000}
                            delay={(0.5 + index * 0.15) * 1000}
                          />
                          {!goal.hideUnit && <span className="text-4xl">M</span>}
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Label - SAME AS NUMBERSLIDE */}
                <div className={`text-lg md:text-xl lg:text-2xl ${textColor} font-semibold text-center mb-2 md:mb-3 relative z-10`}>
                  {goal.label}
                </div>

                {/* Note - SAME AS NUMBERSLIDE */}
                {goal.note && (
                  <div className={`text-sm md:text-base lg:text-lg ${textColor} opacity-60 text-center leading-tight relative z-10`}>
                    {goal.note}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
