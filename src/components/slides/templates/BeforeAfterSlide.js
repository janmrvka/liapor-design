'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import BrandSticker from '@/components/effects/BrandSticker';

/**
 * Before/After Slide Template
 * Displays two images side by side for comparison
 * Used for: Product transformations, AI demonstrations, before/after comparisons
 */
export default function BeforeAfterSlide({ content, config = {} }) {
  const {
    backgroundColor = 'bg-ant-green',
    textColor = 'text-black',
    labelColor = 'text-black',
    layout = 'vertical', // 'vertical' or 'horizontal'
    imageMaxHeight = '25vh', // max height for images
    imagePadding = 'p-4', // padding around images
  } = config;

  const { title, subtitle, beforeImage, afterImage, beforeLabel = 'PŘED', afterLabel = 'PO', sticker } = content;

  const isHorizontal = layout === 'horizontal';

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${backgroundColor} px-4 md:px-8 lg:px-16 pt-4 md:pt-6 lg:pt-8 pb-24 relative overflow-hidden`}
    >
      <div className="max-w-6xl w-full relative z-10">
        {/* Title */}
        {title && (
          <FadeIn delay={0.2}>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-2 md:mb-3 text-center`}>
              {title}
            </h2>
          </FadeIn>
        )}

        {/* Subtitle */}
        {subtitle && (
          <FadeIn delay={0.4}>
            <p className={`text-lg md:text-xl lg:text-2xl ${textColor} opacity-70 mb-4 md:mb-5 lg:mb-6 text-center whitespace-pre-line`}>
              {subtitle}
            </p>
          </FadeIn>
        )}

        {/* Before/After Grid - Horizontal or Vertical Layout */}
        <div className={`grid ${isHorizontal ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'} gap-4 md:gap-5 lg:gap-6 pb-16 ${isHorizontal ? 'max-h-[60vh]' : ''}`}>
          {/* Before Image */}
          <motion.div
            initial={{ opacity: 0, x: isHorizontal ? -40 : 0, y: isHorizontal ? 0 : -20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative h-full"
          >
            <div className={`relative rounded-xl overflow-hidden border-2 ${
              backgroundColor === 'bg-black'
                ? 'border-white/20'
                : 'border-black/20'
            } bg-white shadow-2xl ${isHorizontal ? 'h-full' : ''} flex items-center justify-center`}>
              {/* Label */}
              <div className={`absolute top-4 left-4 z-10 px-4 py-2 rounded-lg ${
                backgroundColor === 'bg-black' ? 'bg-white/90' : 'bg-black/90'
              }`}>
                <span className={`text-sm md:text-base lg:text-lg font-bold ${
                  backgroundColor === 'bg-black' ? 'text-black' : 'text-white'
                }`}>
                  {beforeLabel}
                </span>
              </div>

              {/* Image */}
              <img
                src={beforeImage}
                alt={beforeLabel}
                className={`w-full h-auto ${isHorizontal ? 'max-h-[60vh]' : ''} object-contain ${imagePadding}`}
                style={!isHorizontal ? { maxHeight: imageMaxHeight } : undefined}
              />
            </div>
          </motion.div>

          {/* After Image */}
          <motion.div
            initial={{ opacity: 0, x: isHorizontal ? 40 : 0, y: isHorizontal ? 0 : 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative h-full"
          >
            <div className={`relative rounded-xl overflow-hidden border-2 ${
              backgroundColor === 'bg-black'
                ? 'border-white/20'
                : 'border-black/20'
            } bg-white shadow-2xl ${isHorizontal ? 'h-full' : ''} flex items-center justify-center`}>
              {/* Label */}
              <div className={`absolute top-4 left-4 z-10 px-4 py-2 rounded-lg ${
                backgroundColor === 'bg-black' ? 'bg-white/90' : 'bg-black/90'
              }`}>
                <span className={`text-sm md:text-base lg:text-lg font-bold ${
                  backgroundColor === 'bg-black' ? 'text-black' : 'text-white'
                }`}>
                  {afterLabel}
                </span>
              </div>

              {/* Image */}
              <img
                src={afterImage}
                alt={afterLabel}
                className={`w-full h-auto ${isHorizontal ? 'max-h-[60vh]' : ''} object-contain ${imagePadding}`}
                style={!isHorizontal ? { maxHeight: imageMaxHeight } : undefined}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sticker */}
      {sticker && (
        <BrandSticker
          name={sticker.name}
          text={sticker.text}
          image={sticker.image}
          position={sticker.position}
          rotation={sticker.rotation || 0}
          size={sticker.size || 'auto'}
          shake={sticker.shake || false}
          variant="accent"
        />
      )}
    </div>
  );
}
