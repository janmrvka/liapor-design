'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import SlideIn from '@/components/animations/SlideIn';

// Color map for gradient overlays
const BG_COLORS = {
  'bg-black': '#000000',
  'bg-white': '#ffffff',
  'bg-ant-brown': '#ffe4c1',
  'bg-ant-purple': '#dad4ff',
  'bg-ant-yellow': '#fffd92',
  'bg-ant-pink': '#ffe2eb',
  'bg-ant-blue': '#d7edff',
  'bg-ant-green': '#5bffc4',
};

/**
 * Video Slide Template - YouTube video embed with autoplay
 * Features: Auto-crop to fill, vignette overlay, smooth animations
 */
export default function VideoSlide({ content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    textColor = 'text-white',
    layout = 'split',
    videoPosition = 'right',
    videoFit = 'height', // 'height' = fill height (crop sides), 'width' = fill width (crop top/bottom)
  } = config;

  const { videoId, video, title, subtitle, description } = content;
  const bgColor = BG_COLORS[backgroundColor] || '#000000';
  const isVideoLeft = videoPosition === 'left';

  // Determine if it's a local video file or YouTube
  const isLocalVideo = video && (video.startsWith('/') || video.startsWith('./'));

  // YouTube embed URL - with or without sound based on config
  const muted = config.muted !== false; // default muted=true unless explicitly set to false
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${muted ? 1 : 0}&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&showinfo=0&playsinline=1`
    : null;

  // Contain layout - video fits inside without cropping, centered with black bars
  if (layout === 'contain') {
    if (isLocalVideo) {
      return (
        <div className={`min-h-screen relative overflow-hidden ${backgroundColor} flex items-center justify-center`}>
          <motion.div
            className="relative w-full h-full flex flex-col items-center justify-center p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Title and subtitle above video */}
            {(title || subtitle) && (
              <div className="mb-6 text-center">
                {title && (
                  <FadeIn delay={0.2}>
                    <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${textColor} mb-3`}>
                      {title}
                    </h2>
                  </FadeIn>
                )}
                {subtitle && (
                  <FadeIn delay={0.4}>
                    <p className={`text-xl md:text-2xl lg:text-3xl ${textColor} opacity-80`}>
                      {subtitle}
                    </p>
                  </FadeIn>
                )}
              </div>
            )}

            {/* Local video element */}
            <video
              src={video}
              autoPlay
              loop
              muted={muted}
              playsInline
              preload="metadata"
              loading="lazy"
              className="max-w-full max-h-[70vh] object-contain"
              style={{
                border: 'none',
              }}
            />
          </motion.div>
        </div>
      );
    }
    // YouTube video
    return (
      <div className={`min-h-screen relative overflow-hidden ${backgroundColor} flex items-center justify-center`}>
        <motion.div
          className="relative w-full h-full flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <iframe
            src={embedUrl}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-screen"
            style={{
              border: 'none',
              maxWidth: '177.78vh', // 16:9 aspect ratio
              maxHeight: '56.25vw', // 16:9 aspect ratio
            }}
          />
        </motion.div>
      </div>
    );
  }

  // Full-screen video with overlay
  if (layout === 'full') {
    return (
      <div className={`min-h-screen relative overflow-hidden ${backgroundColor}`}>
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <iframe
            src={embedUrl}
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              border: 'none',
              pointerEvents: 'none',
              width: '300%',
              height: '300%',
              minWidth: '100%',
              minHeight: '100%',
            }}
          />
          {/* Cinematic vignette */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
            }}
          />
        </motion.div>

        {(title || subtitle || description) && (
          <div className="relative z-10 min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 bg-gradient-to-t from-black/60 via-transparent to-black/30">
            <div className="max-w-4xl w-full text-center">
              {title && (
                <SlideIn direction="up" delay={0.3}>
                  <h2 className={`text-5xl md:text-7xl lg:text-hero font-bold ${textColor} mb-4 md:mb-6 lg:mb-8 leading-tight`}>
                    {title}
                  </h2>
                </SlideIn>
              )}
              {subtitle && (
                <FadeIn delay={0.6}>
                  <p className={`text-2xl md:text-3xl lg:text-4xl ${textColor} opacity-90 font-medium mb-4 md:mb-6`}>
                    {subtitle}
                  </p>
                </FadeIn>
              )}
              {description && (
                <FadeIn delay={0.9}>
                  <p className={`text-lg md:text-xl lg:text-2xl ${textColor} opacity-70 leading-relaxed whitespace-pre-line`}>
                    {description}
                  </p>
                </FadeIn>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Split layout - video on one side, content on the other
  if (layout === 'split') {
    return (
      <div className={`min-h-screen grid grid-cols-1 lg:grid-cols-2 ${backgroundColor} overflow-hidden`}>
        {/* Video side */}
        <motion.div
          className={`relative h-64 md:h-96 lg:h-auto overflow-hidden ${isVideoLeft ? 'lg:order-1' : 'lg:order-2'}`}
          initial={{ x: isVideoLeft ? -100 : 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Video iframe - scaled to cover */}
          <div className="absolute inset-0">
            <iframe
              src={embedUrl}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                border: 'none',
                pointerEvents: 'none',
                ...(videoFit === 'width'
                  ? { width: '100%', height: '300%', minWidth: '100%' } // portrait video: fill width, crop heavily top/bottom
                  : { width: '177.78vh', height: '100vh', minWidth: '100%' }), // landscape video: fill height, crop sides
              }}
            />
          </div>

          {/* Subtle vignette */}
          <div
            className="absolute inset-0 pointer-events-none z-[5]"
            style={{
              background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.2) 100%)',
            }}
          />

          {/* Edge gradient */}
          <div
            className={`hidden lg:block absolute inset-y-0 w-24 z-10 ${isVideoLeft ? 'right-0' : 'left-0'}`}
            style={{
              background: isVideoLeft
                ? `linear-gradient(to left, ${bgColor}, transparent)`
                : `linear-gradient(to right, ${bgColor}, transparent)`,
            }}
          />
        </motion.div>

        {/* Content side */}
        <div className={`flex items-center justify-center px-6 md:px-10 lg:px-16 py-10 md:py-14 lg:py-20 ${isVideoLeft ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="max-w-xl w-full">
            {title && (
              <SlideIn direction="up" delay={0.3}>
                <h2 className={`text-4xl md:text-6xl lg:text-7xl font-bold ${textColor} mb-4 md:mb-6 lg:mb-8 leading-tight`}>
                  {title}
                </h2>
              </SlideIn>
            )}
            {subtitle && (
              <FadeIn delay={0.6}>
                <p className={`text-2xl md:text-3xl lg:text-4xl ${textColor} opacity-80 font-medium mb-4 md:mb-6 leading-tight`}>
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
