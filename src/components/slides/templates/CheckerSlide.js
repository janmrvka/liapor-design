'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import TextReveal from '@/components/animations/TextReveal';
import EditableText from '@/components/edit/EditableText';

/**
 * Checker Slide Template
 * For slides with title, subtitle, question items, and a closing statement
 * Used for: WOW checker, validation criteria, simple tests
 */
export default function CheckerSlide({ slide, content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    textColor = 'text-white',
    accentColor = 'text-ant-green',
  } = config;

  const { title, subtitle, items, footer, highlightFooter } = content;

  const isDark = backgroundColor?.includes('black');

  return (
    <div className={`min-h-screen flex items-center justify-center ${backgroundColor} px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 pb-24 relative overflow-hidden`}>
      {/* Subtle background accent */}
      <motion.div
        className={`absolute right-1/4 top-1/4 w-64 h-64 rounded-full opacity-5`}
        style={{
          background: `radial-gradient(circle, ${isDark ? '#5bffc4' : '#000'} 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="text-center max-w-5xl w-full relative z-10">
        {/* Title */}
        {title && (
          <EditableText
            slideId={slide?.id}
            path="content.title"
            value={title}
            as="h1"
            className={`text-3xl md:text-5xl lg:text-6xl font-bold ${textColor} mb-2 md:mb-4 lg:mb-6`}
          >
            <TextReveal delay={0.2} staggerDelay={0.1}>
              {title}
            </TextReveal>
          </EditableText>
        )}

        {/* Subtitle */}
        {subtitle && (
          <FadeIn delay={0.5}>
            <EditableText
              slideId={slide?.id}
              path="content.subtitle"
              value={subtitle}
              as="p"
              className={`text-xl md:text-3xl lg:text-4xl ${textColor} opacity-70 mb-6 md:mb-10 lg:mb-14`}
            >
              {subtitle}
            </EditableText>
          </FadeIn>
        )}

        {/* Items/Questions */}
        {items && items.length > 0 && (
          <div className="space-y-2 md:space-y-3 mb-4 md:mb-6 lg:mb-8">
            {items.map((item, index) => (
              <FadeIn key={index} delay={0.7 + index * 0.15}>
                <p className={`text-xl md:text-3xl lg:text-4xl ${accentColor} font-semibold`}>
                  {item}
                </p>
              </FadeIn>
            ))}
          </div>
        )}

        {/* Footer/Closing statement */}
        {footer && (
          <FadeIn delay={1.4}>
            {highlightFooter ? (
              <motion.div
                className="relative inline-block mt-2 md:mt-3 lg:mt-4 mb-6 md:mb-10 lg:mb-14"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-xl border-3 border-black"
                  animate={{
                    boxShadow: [
                      '0 0 15px rgba(0,0,0,0.3)',
                      '0 0 30px rgba(0,0,0,0.5)',
                      '0 0 15px rgba(0,0,0,0.3)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <p className="relative text-lg md:text-xl lg:text-2xl font-black px-4 md:px-5 lg:px-8 py-2 md:py-3 lg:py-4 text-black bg-white rounded-xl">
                  {footer}
                </p>
              </motion.div>
            ) : (
              <motion.p
                className={`text-xl md:text-2xl lg:text-3xl ${textColor} font-bold`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                {footer}
              </motion.p>
            )}
          </FadeIn>
        )}
      </div>
    </div>
  );
}
