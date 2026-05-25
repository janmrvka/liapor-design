'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import SlideIn from '@/components/animations/SlideIn';
import BrandSticker from '@/components/effects/BrandSticker';

/**
 * Image Slide Template - Visual storytelling with photos
 * Supports multiple layouts: full-screen, split, overlay
 * Used for: Visual impact, storytelling, context setting
 */
export default function ImageSlide({ content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    textColor = 'text-white',
    layout = 'split', // 'full', 'split', 'overlay'
    imagePosition = 'right', // 'left', 'right' for split layout
    overlayOpacity = 0.6, // for overlay layout
    imageContain = false, // use object-contain instead of object-cover
    imageScale = 1.15, // scale for overlay layout images
    imageOffsetY = -32, // vertical offset in px (negative = up, positive = down)
  } = config;

  const { image, title, titleLogo, subtitle, description, stickers } = content;

  // Text on top, image below layout
  if (layout === 'overlay' && overlayOpacity === 0) {
    return (
      <div className={`min-h-screen flex flex-col ${backgroundColor} px-4 md:px-8 lg:px-16 py-4 md:py-6 lg:py-8`}>
        {/* Title and subtitle at the top */}
        <div className="text-center mb-4 md:mb-6">
          {title && (
            <FadeIn delay={0.2}>
              <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-3 md:mb-4`}>
                {title}
              </h2>
            </FadeIn>
          )}
          {subtitle && (
            <FadeIn delay={0.4}>
              <p className={`text-lg md:text-xl lg:text-2xl ${textColor} opacity-80`}>
                {subtitle}
              </p>
            </FadeIn>
          )}
        </div>

        {/* Image below - max width, contained */}
        <motion.div
          className="flex-1 flex items-start justify-center overflow-hidden relative"
          style={{ marginTop: `${imageOffsetY}px` }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <div className="relative max-w-full max-h-[80vh]" style={{ transform: `scale(${imageScale})` }}>
            <img
              src={image}
              alt={title || 'Slide image'}
              className="max-w-full max-h-[80vh] w-auto object-contain"
              loading="eager"
              style={{
                clipPath: 'inset(2px 5px 5px 2px)',
              }}
            />
          </div>
        </motion.div>

        {/* Stickers */}
        {stickers && stickers.map((sticker, i) => (
          <BrandSticker
            key={i}
            name={sticker.name}
            text={sticker.text}
            image={sticker.image}
            position={sticker.position}
            rotation={sticker.rotation || 0}
            size={sticker.size || 'auto'}
            shake={sticker.shake || false}
            variant="accent"
          />
        ))}
      </div>
    );
  }

  // Full-screen image with overlay text
  if (layout === 'full' || layout === 'overlay') {
    // Optional continuous animation
    const imageAnimation = content.animateImage ? {
      rotate: [0, 360],
      transition: {
        duration: 60,
        repeat: Infinity,
        ease: 'linear'
      }
    } : {};

    return (
      <div className={`min-h-screen relative overflow-hidden ${backgroundColor}`}>
        {/* Background image */}
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1, ...imageAnimation }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <img
            src={image}
            alt={title || 'Slide image'}
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Dark overlay for better text readability */}
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
        </motion.div>

        {/* Content overlay */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16">
          <div className="max-w-4xl w-full text-center">
            {titleLogo ? (
              <SlideIn direction="up" delay={0.3}>
                <div className="flex items-center justify-center bg-white rounded-2xl px-8 py-5 mb-4 md:mb-6 lg:mb-8 mx-auto w-fit">
                  <img
                    src={titleLogo}
                    alt={title || 'Logo'}
                    className="w-[320px] h-auto"
                  />
                </div>
              </SlideIn>
            ) : title && (
              <SlideIn direction="up" delay={0.3}>
                <h2 className={`text-5xl md:text-7xl lg:text-hero font-bold ${textColor} mb-4 md:mb-6 lg:mb-8 leading-tight`}>
                  {title}
                </h2>
              </SlideIn>
            )}
            {subtitle && (
              <FadeIn delay={0.6}>
                <p className={`text-2xl md:text-3xl lg:text-4xl ${textColor} font-medium mb-4 md:mb-6`}>
                  {subtitle}
                </p>
              </FadeIn>
            )}
            {description && (
              <FadeIn delay={0.9}>
                <p className={`text-xl md:text-2xl lg:text-3xl ${textColor} opacity-70 leading-relaxed whitespace-pre-line`}>
                  {description}
                </p>
              </FadeIn>
            )}
          </div>
        </div>

        {/* Stickers */}
        {stickers && stickers.map((sticker, i) => (
          <BrandSticker
            key={i}
            name={sticker.name}
            text={sticker.text}
            image={sticker.image}
            position={sticker.position}
            rotation={sticker.rotation || 0}
            size={sticker.size || 'auto'}
            shake={sticker.shake || false}
            variant="accent"
          />
        ))}
      </div>
    );
  }

  // Split layout - image on one side, content on the other
  if (layout === 'split') {
    const isImageLeft = imagePosition === 'left';

    return (
      <div className={`min-h-screen grid grid-cols-1 lg:grid-cols-2 ${backgroundColor} overflow-hidden`}>
        {/* Image side */}
        <motion.div
          className={`relative h-64 md:h-96 lg:h-auto overflow-hidden ${isImageLeft ? 'lg:order-1' : 'lg:order-2'} ${imageContain ? 'py-8 lg:py-12' : ''}`}
          initial={{ x: isImageLeft ? -100 : 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Image with absolute positioning to not affect grid height */}
          <img
            src={image}
            alt={title || 'Slide image'}
            className={`${imageContain ? 'absolute inset-x-0 top-8 bottom-8 lg:top-12 lg:bottom-12' : 'absolute inset-0'} w-full h-full ${imageContain ? 'object-contain' : 'object-cover'}`}
            loading="eager"
          />
          {/* Subtle gradient overlay at the edge - only on desktop */}
          <div
            className={`hidden lg:block absolute inset-y-0 w-32 ${isImageLeft ? 'right-0' : 'left-0'} z-10`}
            style={{
              background: isImageLeft
                ? `linear-gradient(to left, ${backgroundColor === 'bg-black' ? '#000' : backgroundColor.includes('brown') ? '#ffe4c1' : backgroundColor.includes('purple') ? '#dad4ff' : backgroundColor.includes('yellow') ? '#fffd92' : backgroundColor.includes('pink') ? '#ffe2eb' : backgroundColor.includes('blue') ? '#d7edff' : backgroundColor.includes('green') ? '#5bffc4' : '#fff'}, transparent)`
                : `linear-gradient(to right, ${backgroundColor === 'bg-black' ? '#000' : backgroundColor.includes('brown') ? '#ffe4c1' : backgroundColor.includes('purple') ? '#dad4ff' : backgroundColor.includes('yellow') ? '#fffd92' : backgroundColor.includes('pink') ? '#ffe2eb' : backgroundColor.includes('blue') ? '#d7edff' : backgroundColor.includes('green') ? '#5bffc4' : '#fff'}, transparent)`
            }}
          />
        </motion.div>

        {/* Content side - grid ensures full height, items-center centers vertically */}
        <div
          className={`flex items-center justify-center px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 ${isImageLeft ? 'lg:order-2' : 'lg:order-1'}`}
        >
          <div className="max-w-2xl w-full">
            {title && (
              <SlideIn direction="up" delay={0.3}>
                <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold ${textColor} mb-4 md:mb-6 lg:mb-8 leading-tight`}>
                  {title}
                </h2>
              </SlideIn>
            )}
            {subtitle && (
              <FadeIn delay={0.6}>
                <p className={`text-xl md:text-2xl lg:text-3xl ${textColor} opacity-80 font-medium mb-4 md:mb-6 leading-tight`}>
                  {subtitle}
                </p>
              </FadeIn>
            )}
            {description && (
              <FadeIn delay={0.9}>
                <p className={`text-2xl md:text-3xl lg:text-4xl ${textColor} font-semibold leading-relaxed whitespace-pre-line`}>
                  {description}
                </p>
              </FadeIn>
            )}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
