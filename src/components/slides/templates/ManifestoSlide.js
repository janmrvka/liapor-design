'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import BrandSticker from '@/components/effects/BrandSticker';
import EditableText from '@/components/edit/EditableText';

/**
 * Manifesto Slide Template - Enhanced with visual elements
 * Minimalist, powerful statement with decorative accents
 * Used for: Key messages, insights, section headers
 */
export default function ManifestoSlide({ slide, content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    textColor = 'text-white',
    backgroundImage = null,
  } = config;

  // Determine if background is dark for accent colors
  const isDark = backgroundColor?.includes('black') || backgroundColor?.includes('gray');
  const accentOpacity = isDark ? 0.15 : 0.1;

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${backgroundColor} px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 pb-24 relative overflow-hidden`}
    >
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover object-top"
          />
          {/* Dark overlay for better text readability */}
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: 0.7 }}
          />
        </div>
      )}
      {/* Decorative quote mark or accent shape */}
      <motion.div
        className="hidden md:block absolute left-4 md:left-8 lg:left-16 top-16 md:top-24 lg:top-32 opacity-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: accentOpacity, x: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <svg width="60" height="60" viewBox="0 0 120 120" fill="none" className="md:w-24 md:h-24 lg:w-32 lg:h-32">
          <path
            d="M20 80C20 64 28 52 44 44C36 44 28 40 28 28C28 16 36 8 48 8C64 8 72 20 72 36C72 60 52 80 20 80Z"
            fill="currentColor"
            className={textColor}
          />
        </svg>
      </motion.div>

      {/* Background geometric shapes - positioned behind content */}
      <motion.div
        className={`absolute right-1/4 top-1/4 w-64 h-64 rounded-full ${textColor} opacity-5 z-0`}
        style={{
          background: `radial-gradient(circle, currentColor 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className={`absolute left-1/4 bottom-1/4 w-96 h-96 rounded-full ${textColor} opacity-5 z-0`}
        style={{
          background: `conic-gradient(from 0deg, transparent 0%, currentColor 50%, transparent 100%)`,
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="max-w-6xl w-full text-center relative z-10" style={{ marginTop: '-5vh', marginLeft: '0', marginRight: '0' }}>
        {/* Decorative line above statement */}
        <motion.div
          className={`w-16 md:w-24 lg:w-32 h-0.5 md:h-1 ${isDark ? 'bg-ant-green' : 'bg-black'} mx-auto mb-6 md:mb-8 lg:mb-12 rounded-full`}
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 128, opacity: 0.6 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
        />

        {/* Main statement with enhanced typography */}
        <FadeIn delay={0.4} duration={1.2}>
          <EditableText
            slideId={slide?.id}
            path="content.statement"
            value={content.statement}
            as="p"
            multiline={true}
            className={`text-3xl md:text-5xl lg:text-statement font-semibold ${textColor} leading-relaxed mb-4 md:mb-6 lg:mb-10 relative whitespace-pre-line`}
          >
            {content.statement}
          </EditableText>
        </FadeIn>

        {content.subtitle && (
          <>
            {/* Decorative line before subtitle */}
            <motion.div
              className={`w-16 md:w-20 lg:w-24 h-0.5 ${textColor} opacity-30 mx-auto mb-4 md:mb-6 lg:mb-8 rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            />

            {/* Check if subtitle contains newlines - render as bullet list */}
            {content.subtitle.includes('\n') ? (
              <div className="max-w-3xl mx-auto space-y-2 md:space-y-3">
                {content.subtitle.split('\n').filter(line => line.trim()).map((line, index) => (
                  <FadeIn key={index} delay={1.0 + index * 0.15} duration={0.8}>
                    <EditableText
                      slideId={slide?.id}
                      path="content.subtitle"
                      value={content.subtitle}
                      as="p"
                      multiline={true}
                      className={`text-xl md:text-3xl lg:text-4xl ${textColor} opacity-80 font-medium leading-tight text-center`}
                    >
                      {line}
                    </EditableText>
                  </FadeIn>
                ))}
              </div>
            ) : (
              // Fallback: single line subtitle (centered text)
              <FadeIn delay={1.0} duration={1}>
                <EditableText
                  slideId={slide?.id}
                  path="content.subtitle"
                  value={content.subtitle}
                  as="p"
                  className={`text-xl md:text-3xl lg:text-4xl ${textColor} opacity-70 font-medium tracking-wide`}
                >
                  {content.subtitle}
                </EditableText>
              </FadeIn>
            )}
          </>
        )}
      </div>

      {/* Bottom right accent dot */}
      <motion.div
        className={`absolute bottom-16 right-16 w-4 h-4 rounded-full ${isDark ? 'bg-ant-green' : 'bg-black'}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      />

      {/* Brand sticker - configurable from content */}
      {content.sticker && (
        <BrandSticker
          name={content.sticker.name}
          variant="accent"
          position={content.sticker.position || 'bottom-right'}
          rotation={content.sticker.rotation || 0}
          size="md"
        />
      )}
    </div>
  );
}
