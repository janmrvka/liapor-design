'use client';

import { motion } from 'framer-motion';
import SlideIn from '@/components/animations/SlideIn';
import BrandSticker from '@/components/effects/BrandSticker';
import EditableText from '@/components/edit/EditableText';

/**
 * Statement Slide Template - Enhanced with visual elements
 * Text-focused slide with powerful statement and dynamic visual accents
 * Used for: Key messages, insights, learnings
 */
export default function StatementSlide({ slide, content, config = {} }) {
  const {
    backgroundColor = 'bg-white',
    textColor = 'text-black',
  } = config;

  // Determine if background is dark
  const isDark = backgroundColor?.includes('black') || backgroundColor?.includes('gray');

  // Smart sticker selection based on content
  const isClosingSlide = content.statement?.toLowerCase().includes('budeme žít') ||
                          content.statement?.toLowerCase().includes('směr máme');
  const stickerName = isClosingSlide ? 'GO' : 'WOW';

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${backgroundColor} px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 pb-24 relative overflow-hidden`}
    >
      {/* Animated geometric shapes in background */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border-4 rounded-lg"
        style={{ borderColor: 'currentColor' }}
        className={`${textColor} opacity-10`}
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-48 h-48 rounded-full"
        style={{ background: `radial-gradient(circle, currentColor 0%, transparent 70%)` }}
        className={`${textColor} opacity-10`}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-5xl w-full relative z-10">
        {/* Large quote mark - hide on mobile */}
        <motion.div
          className={`hidden md:block text-[120px] md:text-[150px] lg:text-[200px] ${textColor} opacity-5 absolute -top-12 md:-top-16 lg:-top-20 -left-6 md:-left-10 lg:-left-12 leading-none font-serif`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          "
        </motion.div>

        <SlideIn direction="up" delay={0.2}>
          <EditableText
            slideId={slide?.id}
            path="content.statement"
            value={content.statement}
            as="p"
            multiline={true}
            className={`text-3xl md:text-5xl lg:text-statement font-semibold ${textColor} leading-tight relative`}
          >
            {/* Split by lines and animate each */}
            {content.statement.split('\n').map((line, index) => (
              <motion.span
                key={index}
                className="block"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.4 + index * 0.2,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {line}
              </motion.span>
            ))}
          </EditableText>
        </SlideIn>

        {/* Subtitle */}
        {content.subtitle && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-6 md:mt-8 lg:mt-10"
          >
            <EditableText
              slideId={slide?.id}
              path="content.subtitle"
              value={content.subtitle}
              as="p"
              className={`text-xl md:text-3xl lg:text-4xl ${textColor} opacity-70 font-medium`}
            >
              {content.subtitle}
            </EditableText>
          </motion.div>
        )}

        {/* Description */}
        {content.description && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-4 md:mt-6 lg:mt-8"
          >
            <EditableText
              slideId={slide?.id}
              path="content.description"
              value={content.description}
              as="p"
              multiline={true}
              className={`text-lg md:text-xl lg:text-2xl ${textColor} opacity-60 leading-relaxed`}
            >
              {content.description}
            </EditableText>
          </motion.div>
        )}
      </div>

      {/* Footer - for offer validity */}
      {content.footer && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 md:bottom-12 left-0 right-0 text-center z-10"
        >
          <p className={`text-sm md:text-base lg:text-lg ${textColor} opacity-50`}>
            {content.footer}
          </p>
        </motion.div>
      )}

      {/* Brand sticker watermark - context-aware */}
      <BrandSticker
        name={stickerName}
        variant={isClosingSlide ? 'accent' : 'watermark'}
        position="bottom-right"
        rotation={isClosingSlide ? 8 : -8}
        size={isClosingSlide ? 'lg' : 'auto'}
      />
    </div>
  );
}
