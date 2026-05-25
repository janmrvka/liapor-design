'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import Image from 'next/image';
import EditableText from '@/components/edit/EditableText';

/**
 * Image Gallery Slide Template
 * Displays multiple images in a grid layout
 * Used for: Banner showcases, case studies, creative work
 */
export default function ImageGallerySlide({ slide, content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    textColor = 'text-white',
    layout = 'grid', // 'grid' | 'flex' (flex = horizontal row like VideoGallerySlide)
    columns = 3,
    aspectRatio = 'auto', // 'auto' | '16/9' | '4/3' | 'square'
    objectFit = 'contain', // 'contain' | 'cover'
    fullHeight = false, // Enable full-height mode for maximum image size
    imageScale = 1, // scale for images (1 = 100%, 1.3 = 130%)
    gap = '3', // gap between images (Tailwind spacing: '1', '2', '3', '4', etc.)
    marginTop = '0px', // margin top for image grid
    titleFontSize = null, // custom font size for title (e.g., '3.75rem')
    titleMarginTop = null, // margin top for title (e.g., '30px')
  } = config;

  const { title, subtitle, description, images } = content;

  // Responsive columns based on screen size
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Aspect ratio classes
  const aspectRatioClass = {
    'auto': 'aspect-auto',
    '16/9': 'aspect-[16/9]',
    '4/3': 'aspect-[4/3]',
    'square': 'aspect-square',
  }[aspectRatio] || 'aspect-auto';

  if (fullHeight) {
    // Full-height mode: maximize image space
    return (
      <div
        className={`min-h-screen flex flex-col ${backgroundColor} px-4 md:px-6 pt-8 pb-40`}
      >
        <div className="w-full max-w-[98vw] mx-auto flex flex-col flex-1">
          {/* Compact Header */}
          <div className="flex-shrink-0 mb-4" style={titleMarginTop ? { marginTop: titleMarginTop } : {}}>
            {title && (
              <FadeIn delay={0.2}>
                <EditableText
                  slideId={slide?.id}
                  path="content.title"
                  value={title}
                  as="h2"
                  className={`text-2xl md:text-3xl font-bold ${textColor} mb-1 text-center`}
                  style={titleFontSize ? { fontSize: titleFontSize } : {}}
                >
                  {title}
                </EditableText>
              </FadeIn>
            )}
            {subtitle && (
              <FadeIn delay={0.3}>
                <EditableText
                  slideId={slide?.id}
                  path="content.subtitle"
                  value={subtitle}
                  as="p"
                  className={`text-sm md:text-base ${textColor} opacity-70 text-center whitespace-pre-line`}
                >
                  {subtitle}
                </EditableText>
              </FadeIn>
            )}
          </div>

          {/* Full-Height Image Grid */}
          <div
            className="grid flex-1"
            style={{
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
              gap: `${parseInt(gap) * 0.25}rem`,
              transform: `scale(${imageScale})`,
              transformOrigin: 'center center',
              marginTop: marginTop,
            }}
          >
            {images?.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 0.4 + index * 0.1,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative w-full h-full overflow-hidden flex items-center justify-center"
                style={{ minHeight: '400px', padding: '2px' }}
              >
                <img
                  src={image}
                  alt={`Banner ${index + 1}`}
                  className={`w-full h-full object-${objectFit}`}
                  loading="eager"
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Standard mode
  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${backgroundColor} px-4 md:px-8 py-4 md:py-8 pb-20`}
    >
      <div className="max-w-[95vw] w-full">
        {/* Title */}
        {title && (
          <FadeIn delay={0.2}>
            <EditableText
              slideId={slide?.id}
              path="content.title"
              value={title}
              as="h2"
              className={`text-2xl md:text-3xl lg:text-4xl font-bold ${textColor} mb-2 text-center`}
            >
              {title}
            </EditableText>
          </FadeIn>
        )}

        {/* Subtitle */}
        {subtitle && (
          <FadeIn delay={0.3}>
            <EditableText
              slideId={slide?.id}
              path="content.subtitle"
              value={subtitle}
              as="p"
              className={`text-base md:text-lg lg:text-xl ${textColor} opacity-80 mb-2 text-center whitespace-pre-line`}
            >
              {subtitle}
            </EditableText>
          </FadeIn>
        )}

        {/* Description */}
        {description && (
          <FadeIn delay={0.4}>
            <EditableText
              slideId={slide?.id}
              path="content.description"
              value={description}
              as="p"
              className={`text-sm md:text-base ${textColor} opacity-70 mb-4 md:mb-6 text-center max-w-3xl mx-auto whitespace-pre-line`}
            >
              {description}
            </EditableText>
          </FadeIn>
        )}

        {/* Image Grid or Flex Row */}
        <div
          className={layout === 'flex' ? 'flex justify-center pb-8' : 'grid grid-cols-1'}
          style={
            layout === 'flex'
              ? { gap: `${parseInt(gap) * 0.25}rem`, marginTop }
              : {
                  gridTemplateColumns: isMobile ? '1fr' : `repeat(${columns}, minmax(0, 1fr))`,
                  gap: `${parseInt(gap) * 0.25}rem`,
                  transform: `scale(${imageScale})`,
                  marginTop,
                }
          }
        >
          {images?.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.5 + index * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={
                layout === 'flex'
                  ? `relative w-auto rounded-xl md:rounded-2xl overflow-hidden bg-black/20 border-2 border-white/10`
                  : `relative ${aspectRatioClass} w-full`
              }
              style={
                layout === 'flex'
                  ? { padding: '2px', transform: `scale(${imageScale})` }
                  : {
                      minHeight: aspectRatio === 'auto' ? '300px' : undefined,
                      padding: '2px'
                    }
              }
            >
              <img
                src={image}
                alt={`Banner ${index + 1}`}
                className={`w-full h-full object-${objectFit}`}
                loading="eager"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
