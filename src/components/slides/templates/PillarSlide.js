'use client';

import { motion } from 'framer-motion';
import SlideIn from '@/components/animations/SlideIn';
import FadeIn from '@/components/animations/FadeIn';

/**
 * Pillar Slide Template - WOW pillars with animated title
 * Individual WOW pillar presentation
 * Used for: Each of the 6 WOW pillars with details
 */
export default function PillarSlide({ content, config = {} }) {
  const {
    backgroundColor = 'bg-ant-purple',
    textColor = 'text-black',
  } = config;

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${backgroundColor} px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 pb-24 relative overflow-hidden`}
    >
      {/* Decorative background elements */}
      <motion.div
        className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, currentColor 0%, transparent 70%)' }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />

      <div className="max-w-5xl mx-auto w-full text-center relative z-10">
        {/* Animated WOW prefix */}
        <motion.div
          className="mb-2 md:mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <motion.span
            className={`text-6xl md:text-8xl lg:text-9xl font-black ${textColor} inline-block`}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, -2, 2, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: 'easeInOut',
            }}
          >
            WOW
          </motion.span>
        </motion.div>

        {/* Content */}
        <div className="relative">
          <SlideIn direction="up" delay={0.4}>
            <h2 className={`text-6xl md:text-8xl lg:text-9xl font-bold ${textColor} leading-tight mb-6 md:mb-8 lg:mb-12`}>
              {content.title.replace('WOW ', '')}
            </h2>
          </SlideIn>

          {content.subtitle && (
            <FadeIn delay={0.7}>
              <p className={`text-3xl md:text-4xl lg:text-5xl font-medium ${textColor} opacity-80 leading-relaxed max-w-4xl mx-auto`}>
                {content.subtitle}
              </p>
            </FadeIn>
          )}

          {content.points && (
            <div className="mt-8 md:mt-12 lg:mt-16 space-y-4 md:space-y-6">
              {content.points.map((point, index) => (
                <FadeIn key={index} delay={0.9 + index * 0.15}>
                  <motion.div
                    className="flex items-center justify-center gap-3 md:gap-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`text-2xl md:text-3xl ${textColor} opacity-40 font-bold`}>•</div>
                    <div className={`text-xl md:text-2xl lg:text-3xl font-semibold ${textColor}`}>
                      {point}
                    </div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
