'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import TextReveal from '@/components/animations/TextReveal';
import FadeIn from '@/components/animations/FadeIn';
import AnimatedBackground from '@/components/effects/AnimatedBackground';
import BrandSticker from '@/components/effects/BrandSticker';
import EditableText from '@/components/edit/EditableText';

/**
 * Hero Slide Template
 * Full-screen statement slide with large, centered text
 * Used for: Intro, vision statements, major section dividers
 * Enhanced with: TextReveal animation, mouse parallax, animated backgrounds
 */
export default function HeroSlide({ slide, content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    textColor = 'text-white',
    accentColor = 'text-ant-green',
    backgroundVariant = 'green',
    backgroundImage = null,
    backgroundImageScale = 1,
  } = config;

  // Mouse parallax effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate position relative to center, normalized to range
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Check if backgroundColor is a hex color or Tailwind class
  const isCustomColor = backgroundColor?.startsWith('#');
  const bgStyle = isCustomColor ? { backgroundColor } : {};
  const bgClass = isCustomColor ? '' : backgroundColor;

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${bgClass} px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 pb-24 relative overflow-hidden`}
      style={bgStyle}
    >
      {/* Background image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover opacity-100"
            style={{ transform: `scale(${backgroundImageScale})` }}
            loading="eager"
          />
        </div>
      )}

      {/* Semi-transparent overlay over entire slide */}
      {backgroundImage && (
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-[1]" />
      )}

      {/* Animated background gradient */}
      <AnimatedBackground variant={backgroundVariant} />

      <div className="text-center max-w-6xl w-full relative z-10">
        {content.title && (
            <motion.div
              style={{
                x: mousePosition.x,
                y: mousePosition.y,
              }}
              transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            >
              <EditableText
                slideId={slide?.id}
                path="content.title"
                value={content.title}
                as="h1"
                multiline={true}
                className={`${config.compactTitle ? 'text-3xl md:text-5xl lg:text-6xl' : 'text-5xl md:text-7xl lg:text-hero'} font-bold ${textColor} leading-[0.9] lg:leading-[0.85] mb-4 md:mb-6 lg:mb-8 whitespace-pre-line`}
              >
                <TextReveal delay={0.2} staggerDelay={0.08}>
                  {content.title}
                </TextReveal>
              </EditableText>
            </motion.div>
          )}
          {content.subtitle && (
            <motion.div
              style={{
                x: mousePosition.x * 0.5,
                y: mousePosition.y * 0.5,
              }}
              transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            >
              <FadeIn delay={0.8}>
                <EditableText
                  slideId={slide?.id}
                  path="content.subtitle"
                  value={content.subtitle}
                  as="p"
                  className={`${content.emphasizeSubtitle ? 'text-3xl md:text-5xl lg:text-7xl font-bold' : 'text-xl md:text-3xl lg:text-4xl font-medium'} ${accentColor} mt-4 md:mt-6 lg:mt-8`}
                >
                  {content.subtitle}
                </EditableText>
              </FadeIn>
            </motion.div>
          )}

          {/* Banner copy box - styled like advertising copy */}
          {content.bannerCopy && (
            <FadeIn delay={1.0}>
              <motion.div
                className="mt-8 md:mt-10 lg:mt-12 mx-auto max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                <div className="bg-white/80 backdrop-blur-md border-2 border-black/20 rounded-2xl px-8 py-6 md:px-10 md:py-8 shadow-xl">
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-black text-center whitespace-pre-line leading-relaxed">
                    {content.bannerCopy}
                  </p>
                </div>
              </motion.div>
            </FadeIn>
          )}

        {content.image && (
          <FadeIn delay={1.0}>
            <motion.div
              className="mt-8 md:mt-10 lg:mt-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
            >
              <img
                src={content.image}
                alt={content.title || 'Slide image'}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </motion.div>
          </FadeIn>
        )}
        {/* Multiple CTAs support */}
        {content.ctas && content.ctas.length > 0 && (
          <FadeIn delay={content.image ? 1.4 : 1.0}>
            <div className="mt-8 md:mt-10 lg:mt-12 flex flex-wrap justify-center gap-6 md:gap-8">
              {content.ctas.map((cta, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center"
                >
                  <a
                    href={cta.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-block px-6 md:px-8 py-3 md:py-4 text-base md:text-lg lg:text-xl font-bold ${accentColor} bg-black/10 hover:bg-black/20 rounded-full transition-colors border-2 ${accentColor.replace('text-', 'border-')}`}
                  >
                    {cta.text}
                  </a>
                  {cta.subtext && (
                    <p className={`mt-2 text-sm md:text-base ${textColor} opacity-70 text-center max-w-[200px]`}>
                      {cta.subtext}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </FadeIn>
        )}
        {/* Single CTA fallback */}
        {!content.ctas && content.cta && (
          <FadeIn delay={content.image ? 1.4 : 1.0}>
            <motion.div
              className="mt-8 md:mt-10 lg:mt-12"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href={content.cta.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block px-8 py-4 text-lg md:text-xl lg:text-2xl font-bold ${accentColor} bg-black/10 hover:bg-black/20 rounded-full transition-colors border-2 ${accentColor.replace('text-', 'border-')}`}
              >
                {content.cta.text}
              </a>
            </motion.div>
          </FadeIn>
        )}
      </div>

      {/* Sticker */}
      {content.sticker && (
        <BrandSticker
          name={content.sticker.name}
          text={content.sticker.text}
          image={content.sticker.image}
          position={content.sticker.position}
          rotation={content.sticker.rotation || 0}
          size={content.sticker.size || 'auto'}
          shake={content.sticker.shake || false}
          variant="accent"
        />
      )}
    </div>
  );
}
