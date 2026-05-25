'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import FadeIn from '@/components/animations/FadeIn';

/**
 * Video Gallery Slide Template
 * Displays multiple videos that play in parallel with staggered start
 * Used for: Video showcases, product demonstrations, case studies
 */
export default function VideoGallerySlide({ content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    textColor = 'text-white',
    muted = true,
  } = config;

  const { title, subtitle, videos, links } = content;
  const videoRefs = useRef([]);

  // Auto-play videos with 3 second stagger, all loop independently
  useEffect(() => {
    if (!videos || videos.length === 0) return;

    const timeouts = [];

    // Start each video with 3 second delay from the previous one
    videos.forEach((_, index) => {
      const delay = index * 3000; // 3 seconds between each video start
      const timeout = setTimeout(() => {
        if (videoRefs.current[index]) {
          videoRefs.current[index].play().catch(err => console.log('Play error:', err));
        }
      }, delay);
      timeouts.push(timeout);
    });

    // Cleanup timeouts on unmount
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [videos]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${backgroundColor} px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 pb-24`}
    >
      <div className="max-w-7xl w-full">
        {/* Title */}
        {title && (
          <FadeIn delay={0.2}>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-8 md:mb-12 lg:mb-16 text-center`}>
              {title}
            </h2>
          </FadeIn>
        )}

        {/* Subtitle */}
        {subtitle && (
          <FadeIn delay={0.4}>
            <p className={`text-lg md:text-xl lg:text-2xl ${textColor} opacity-80 mb-8 md:mb-10 lg:mb-12 text-center whitespace-pre-line`}>
              {subtitle}
            </p>
          </FadeIn>
        )}

        {/* Video Grid */}
        <div className="flex justify-center gap-3 md:gap-4 pb-8">
          {videos?.map((video, index) => {
            const handleClick = () => {
              if (links && links[index]) {
                window.open(links[index], '_blank', 'noopener,noreferrer');
              }
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 0.6 + index * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={handleClick}
                className={`relative aspect-[9/16] max-h-[60vh] w-full max-w-[280px] md:max-w-[320px] rounded-xl md:rounded-2xl overflow-hidden bg-black/20 border-2 border-white/10 ${links && links[index] ? 'cursor-pointer hover:border-white/30 transition-all duration-200' : ''}`}
              >
                {/* Video element - loop enabled for continuous playback */}
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video}
                  loop={true}
                  muted={muted}
                  playsInline
                  preload="metadata"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
