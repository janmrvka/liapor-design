'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import SlideIn from '@/components/animations/SlideIn';

/**
 * Bar Chart Slide Template
 * Display data as an animated bar chart
 * Used for: Monthly revenue, comparative data, time series
 */
export default function BarChartSlide({ content, config = {} }) {
  const {
    backgroundColor = 'bg-white',
    textColor = 'text-black',
    accentColor = '#5bffc4',
  } = config;

  const { title, subtitle, data, insights } = content;

  // Check if data exists
  if (!data || !Array.isArray(data) || data.length === 0) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${backgroundColor}`}>
        <p className={textColor}>No data available for chart</p>
      </div>
    );
  }

  // Find max value for scaling
  const maxValue = Math.max(...data.map(item => item.value));
  const maxIndex = data.findIndex(item => item.value === maxValue);

  // Format currency
  const formatCurrency = (value) => {
    if (value >= 1000000) {
      return `${(value / 1000000).toFixed(1).replace('.0', '')}M Kč`;
    } else if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}k Kč`;
    }
    return `${value} Kč`;
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${backgroundColor} px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 pb-24 relative overflow-hidden`}>
      <div className="max-w-6xl w-full relative z-10 flex flex-col items-center justify-center mx-auto" style={{ marginTop: 'calc(-10vh - 40px)' }}>
        {/* Title */}
        <SlideIn direction="up" delay={0.1}>
          <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-3 md:mb-4 lg:mb-6 text-center`}>
            {title}
          </h2>
        </SlideIn>

        {/* Subtitle */}
        {subtitle && (
          <SlideIn direction="up" delay={0.2}>
            <p className={`text-lg md:text-xl lg:text-2xl ${textColor} opacity-80 font-medium text-center mb-6 md:mb-8 lg:mb-10 max-w-4xl mx-auto`}>
              {subtitle}
            </p>
          </SlideIn>
        )}

        {/* Bar Chart */}
        <div className="max-w-5xl mx-auto w-full">
          <div className="flex items-end justify-center gap-3 md:gap-6 lg:gap-8 h-48 md:h-60 lg:h-72 relative">
            {data.map((item, index) => {
              const barHeight = (item.value / maxValue) * 100;
              const barColor = item.color || accentColor;
              const isPeakSeason = index === maxIndex;

              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center h-full justify-end gap-0"
                  style={{ width: '80px', flex: '0 0 80px' }}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {/* Season emoji icon */}
                  {item.emoji && (
                    <motion.div
                      className="text-xl md:text-2xl mb-1"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        delay: 0.7 + index * 0.1,
                        duration: 0.3,
                      }}
                    >
                      {item.emoji}
                    </motion.div>
                  )}

                  {/* Value label above bar */}
                  <motion.div
                    className={`text-xs md:text-sm lg:text-base font-bold ${textColor} text-center whitespace-nowrap flex-shrink-0 mb-2`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      duration: 0.4,
                    }}
                  >
                    {formatCurrency(item.value)}
                  </motion.div>

                  {/* Bar - using absolute positioning to animate height properly */}
                  <div className="w-full flex-1 relative -mt-1">
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 rounded-t-lg shadow-lg overflow-hidden"
                      style={{
                        backgroundColor: barColor,
                      }}
                      initial={{
                        height: '0%',
                      }}
                      animate={{
                        height: `${barHeight}%`,
                      }}
                      transition={{
                        delay: 0.5 + index * 0.1,
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                    {/* Glow effect - enhanced for peak season */}
                    <motion.div
                      className="absolute inset-0 rounded-t-lg blur-xl opacity-40"
                      style={{ backgroundColor: barColor }}
                      animate={{
                        opacity: isPeakSeason ? [0.4, 0.8, 0.4] : [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: isPeakSeason ? 1.5 : 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                  </motion.div>
                  </div>

                  {/* Month label below bar */}
                  <motion.div
                    className={`text-xs md:text-sm font-semibold ${textColor} mt-3 md:mt-4 text-center leading-tight whitespace-nowrap flex-shrink-0`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{
                      delay: 0.8 + index * 0.1,
                      duration: 0.4,
                    }}
                  >
                    {item.label}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* X-axis line */}
          <motion.div
            className={`w-full h-0.5 ${textColor} opacity-20 mt-0`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
            }}
          />

          {/* Quick Facts */}
          {insights && insights.length > 0 && (
            <motion.div
              className="mt-10 md:mt-12 lg:mt-14 flex flex-wrap justify-center gap-4 md:gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.8,
                duration: 0.6,
              }}
            >
              {insights.map((insight, idx) => (
                <motion.div
                  key={idx}
                  className="bg-ant-green/20 backdrop-blur-sm px-6 md:px-8 lg:px-10 py-3 md:py-4 lg:py-5 rounded-xl md:rounded-2xl border-2 border-ant-green/40 shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1.8 + idx * 0.15,
                    duration: 0.4,
                  }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'rgba(91, 255, 196, 0.6)',
                    transition: { duration: 0.2 },
                  }}
                >
                  <p className={`text-base md:text-lg lg:text-xl ${textColor} font-bold text-center`}>
                    {insight}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
