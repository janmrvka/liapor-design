'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import SlideIn from '@/components/animations/SlideIn';
import CountUp from '@/components/animations/CountUp';
import BrandSticker from '@/components/effects/BrandSticker';
import EditableText from '@/components/edit/EditableText';

/**
 * Numbers Slide Template - Enhanced with visual elements
 * Display key financial or statistical data with WOW effect
 * Used for: Financial results, metrics, achievements
 * Enhanced with: CountUp animations, progress bars, gradient backgrounds
 */
export default function NumbersSlide({ slide, content, config = {} }) {
  const videoRef = useRef(null);

  const {
    backgroundColor = 'bg-white',
    textColor = 'text-black',
    accentColor = 'text-ant-green',
    hideProgress = false,
    compactNumbers = false,
  } = config;

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  // Extract accent color for dynamic styling
  const accentColorValue = accentColor.includes('ant-green') ? '#5bffc4' :
                           accentColor.includes('ant-blue') ? '#d7edff' :
                           accentColor.includes('ant-pink') ? '#ffe2eb' : '#5bffc4';

  // Determine grid columns based on number of items
  const itemCount = content.numbers.length;
  const gridCols = itemCount === 2 ? 'md:grid-cols-2' : itemCount === 3 ? 'md:grid-cols-3' : 'md:grid-cols-1';

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${backgroundColor} px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 pb-24 relative overflow-hidden`}
    >
      {/* Animated background gradient blobs */}
      <motion.div
        className="absolute -left-32 top-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: accentColorValue }}
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -right-32 bottom-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: accentColorValue }}
        animate={{
          x: [0, -50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-6xl w-full relative z-10">
        <SlideIn direction="up" delay={0.1}>
          <EditableText
            slideId={slide?.id}
            path="content.title"
            value={content.title}
            as="h2"
            className={`text-2xl md:text-4xl lg:text-6xl font-bold ${textColor} mb-4 md:mb-6 lg:mb-8 text-center`}
          >
            {content.title}
          </EditableText>
        </SlideIn>

        {content.subtitle && (
          <SlideIn direction="up" delay={0.2}>
            <EditableText
              slideId={slide?.id}
              path="content.subtitle"
              value={content.subtitle}
              as="p"
              className={`text-xl md:text-2xl lg:text-3xl ${textColor} opacity-80 font-medium text-center mb-6 md:mb-10 lg:mb-14 max-w-4xl mx-auto`}
            >
              {content.subtitle}
            </EditableText>
          </SlideIn>
        )}

        {/* Layout with preview image/video - dominant media left, stats right */}
        {(content.previewImage || content.previewVideo) ? (
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr,1fr] gap-6 md:gap-8 lg:gap-10 items-center pb-16">
            {/* Large dominant preview media on the left - clickable if previewLink provided */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
              className="w-full relative"
            >
              {content.previewVideo ? (
                // Video preview - click to play/pause
                <video
                  ref={videoRef}
                  src={content.previewVideo}
                  autoPlay
                  loop
                  playsInline
                  onClick={handleVideoClick}
                  className="w-full h-auto max-h-[60vh] object-contain rounded-2xl shadow-2xl border-2 border-black/10 cursor-pointer hover:border-black/20 transition-all"
                />

              ) : (
                // Image preview
                content.previewLink ? (
                  <a
                    href={content.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group cursor-pointer relative"
                  >
                    <img
                      src={content.previewImage}
                      alt="Preview"
                      className="w-full h-auto max-h-[60vh] object-contain rounded-2xl shadow-2xl border-2 border-black/10 group-hover:border-black/20 transition-all"
                    />
                    {/* Play icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center group-hover:bg-black/80 transition-all group-hover:scale-110">
                        <svg className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                ) : (
                  <img
                    src={content.previewImage}
                    alt="Preview"
                    className="w-full h-auto max-h-[60vh] object-contain rounded-2xl shadow-2xl border-2 border-black/10"
                  />
                )
              )}
            </motion.div>

            {/* Stat cards on the right */}
            <div className="grid grid-cols-1 gap-4 md:gap-5">
              {content.numbers.map((item, index) => {
                const progress = item.progress !== undefined ? item.progress : 100;
                const progressColor = item.progressColor || accentColorValue;

                const cardContent = (
                  <>
                    {/* The number */}
                    <div className="relative z-10 text-center mb-2 md:mb-3">
                      <div className={`text-3xl md:text-4xl lg:text-5xl font-black ${accentColor} leading-none tracking-tight`}>
                        {String(item.value).includes('tis.') || String(item.value).includes('Kč') ? (
                          <motion.span
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                          >
                            {item.value}
                          </motion.span>
                        ) : (
                          <CountUp value={item.value} duration={2000} delay={(0.5 + index * 0.15) * 1000} />
                        )}
                      </div>
                    </div>

                    {/* Progress bar */}
                    {!hideProgress && (
                      <div className="relative z-10 mb-2 md:mb-3">
                        <div className="h-1.5 md:h-2 bg-black/10 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ background: progressColor }}
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{
                              delay: 0.5 + index * 0.15,
                              duration: 1.5,
                              ease: [0.22, 1, 0.36, 1],
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Label */}
                    <div className={`text-base md:text-lg lg:text-xl ${textColor} font-bold text-center mb-1 relative z-10`}>
                      {item.label}
                    </div>

                    {/* Note */}
                    {item.note && (
                      <div className={`text-xs md:text-sm ${textColor} opacity-60 text-center leading-tight relative z-10`}>
                        {item.note}
                      </div>
                    )}

                    {/* Link indicator */}
                    {item.link && (
                      <div className="absolute bottom-2 right-2 opacity-40 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                      </div>
                    )}
                  </>
                );

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    className="relative"
                  >
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm border border-black/10 hover:border-black/20 transition-all overflow-hidden cursor-pointer group"
                      >
                        {cardContent}
                      </a>
                    ) : (
                      <div className="relative p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm border border-black/10 hover:border-black/20 transition-all overflow-hidden">
                        {cardContent}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        ) : (
          // Original layout without preview image
          <div className={`grid grid-cols-1 ${gridCols} gap-4 md:gap-8 lg:gap-10 ${itemCount === 2 ? 'max-w-4xl mx-auto' : ''} items-stretch`}>
          {content.numbers.map((item, index) => {
            const progress = item.progress !== undefined ? item.progress : 100;
            const progressColor = item.progressColor || accentColorValue;

            const cardContent = (
              <>
                {/* Glow effect behind the number */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full blur-3xl opacity-30"
                  style={{ background: progressColor }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />

                {/* The number - fixed height */}
                <div className="relative z-10 text-center mb-4 md:mb-5 px-2 h-12 md:h-14 lg:h-16 flex items-center justify-center">
                  <div className={`${compactNumbers ? 'text-3xl md:text-4xl lg:text-5xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-black ${accentColor} leading-none tracking-tight`}
                    style={{ wordBreak: 'keep-all' }}
                  >
                    {/\d/.test(String(item.value)) && !String(item.value).includes('tis.') && !String(item.value).includes('Kč') ? (
                      <CountUp value={item.value} duration={2000} delay={(0.5 + index * 0.15) * 1000} />
                    ) : (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.15, duration: 0.5 }}
                      >
                        {item.value}
                      </motion.span>
                    )}
                  </div>
                </div>

                {/* Progress bar - always rendered with fixed height */}
                <div className="relative z-10 mb-4 md:mb-5 h-2 md:h-3">
                  {!hideProgress ? (
                    <div className="h-full bg-black/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: progressColor }}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{
                          delay: 0.5 + index * 0.15,
                          duration: 1.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  ) : (
                    <div className="h-full bg-black/10 rounded-full" />
                  )}
                </div>

                {/* Label - fixed minimum height */}
                <div className={`text-lg md:text-xl lg:text-2xl ${textColor} font-bold text-center mb-1 md:mb-2 relative z-10 min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center`}>
                  {item.label}
                </div>

                {/* Note - flexible height */}
                {item.note && (
                  <div className={`text-sm md:text-base lg:text-lg ${textColor} opacity-60 text-center leading-tight relative z-10`}>
                    {item.note}
                  </div>
                )}

                {/* Link indicator for clickable cards */}
                {item.link && (
                  <div className="absolute bottom-3 right-3 opacity-40 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </div>
                )}
              </>
            );

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                className="relative flex"
              >
                {/* Card - with optional link */}
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex flex-col justify-center relative p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm border border-black/10 hover:border-black/20 transition-all overflow-hidden cursor-pointer group"
                  >
                    {cardContent}
                  </a>
                ) : (
                  <div className="flex-1 flex flex-col justify-center relative p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/60 to-white/40 backdrop-blur-sm border border-black/10 hover:border-black/20 transition-all overflow-hidden">
                    {cardContent}
                  </div>
                )}
              </motion.div>
            );
          })}
          </div>
        )}
      </div>

      {/* Footer - for additional info */}
      {content.footer && !content.footerWarning && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 md:bottom-12 left-0 right-0 text-center z-10 px-4"
        >
          <p className={`text-sm md:text-base lg:text-lg ${textColor} opacity-50 whitespace-pre-line`}>
            {content.footer}
          </p>
        </motion.div>
      )}

      {/* Footer Warning - bold, high-visibility alert */}
      {content.footerWarning && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-6 md:bottom-10 left-4 right-4 z-10"
        >
          <div className="max-w-4xl mx-auto border-2 border-yellow-400 rounded-xl md:rounded-2xl px-6 md:px-10 py-4 md:py-5 bg-yellow-400/10 backdrop-blur-sm flex items-center justify-center gap-3">
            <span className="text-2xl md:text-3xl flex-shrink-0">⚠️</span>
            <p className="text-base md:text-xl lg:text-2xl font-bold text-yellow-400 leading-snug text-center">
              {content.footerWarning}
            </p>
          </div>
        </motion.div>
      )}

      {/* Brand sticker accent - celebrating success (conditional) */}
      {!content.hideBrandSticker && (
        <BrandSticker
          name="YES"
          variant="watermark"
          position="top-right"
          rotation={12}
        />
      )}
    </div>
  );
}
