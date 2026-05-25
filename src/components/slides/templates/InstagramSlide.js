'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import SlideIn from '@/components/animations/SlideIn';
import BrandSticker from '@/components/effects/BrandSticker';
import EditableText from '@/components/edit/EditableText';

/**
 * Instagram Slide Template
 * Displays an embedded Instagram profile feed
 * Used for: Social media presence, Instagram showcase
 */
export default function InstagramSlide({ slide, content, config = {} }) {
  const {
    backgroundColor = 'bg-white',
    textColor = 'text-black',
    accentColor = 'text-ant-green',
  } = config;

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
      setIsLoaded(true);
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // Extract username from Instagram URL
  const getUsername = (url) => {
    const match = url.match(/instagram\.com\/([^\/]+)/);
    return match ? match[1] : '';
  };

  const username = content.instagramUrl ? getUsername(content.instagramUrl) : '';

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${backgroundColor} px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 pb-24 relative overflow-hidden`}>
      {/* Animated background gradient */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: 'linear-gradient(135deg, #833AB4, #FD1D1D, #F77737)' }}
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

      <div className="max-w-6xl w-full relative z-10">
        {/* Title */}
        {content.title && (
          <SlideIn direction="up" delay={0.1}>
            <EditableText
              slideId={slide?.id}
              path="content.title"
              value={content.title}
              as="h2"
              className={`text-2xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-2 md:mb-3 lg:mb-4 text-center`}
            >
              {content.title}
            </EditableText>
          </SlideIn>
        )}

        {/* Subtitle */}
        {content.subtitle && (
          <SlideIn direction="up" delay={0.2}>
            <EditableText
              slideId={slide?.id}
              path="content.subtitle"
              value={content.subtitle}
              as="p"
              className={`text-lg md:text-xl lg:text-2xl ${textColor} opacity-70 mb-6 md:mb-8 lg:mb-10 text-center max-w-3xl mx-auto`}
            >
              {content.subtitle}
            </EditableText>
          </SlideIn>
        )}

        {/* Instagram Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="w-full max-w-xl mx-auto">
            {/* Instagram profile link with visual styling - conditional */}
            {!content.hideUsername && (
              <motion.a
                href={content.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-6 md:mb-8"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`${accentColor} text-center text-xl md:text-2xl lg:text-3xl font-bold flex items-center justify-center gap-3`}>
                  <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @{username}
                </div>
              </motion.a>
            )}

            {/* Embedded Instagram feed iframe with proper scroll support */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-auto" style={{ height: '640px' }}>
              <iframe
                src={`${content.instagramUrl}embed/`}
                className="w-full h-full border-0"
                allowTransparency="true"
                title="Instagram Profile"
              />

              {/* Loading overlay */}
              {!isLoaded && (
                <div className="absolute inset-0 bg-white flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-12 h-12 border-4 border-gray-200 border-t-black rounded-full mx-auto mb-4"
                    />
                    <p className="text-gray-600">Načítám Instagram profil...</p>
                  </div>
                </div>
              )}
            </div>

            {/* Call to action */}
            {content.ctaText && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center mt-6 md:mt-8"
              >
                <a
                  href={content.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block px-6 py-3 ${accentColor} bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition-colors`}
                >
                  {content.ctaText}
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Brand sticker */}
      {!content.hideBrandSticker && (
        <BrandSticker
          name="SOCIAL"
          variant="watermark"
          position="top-right"
          rotation={-8}
        />
      )}
    </div>
  );
}
