'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';

/**
 * CoverSlide - Opening slide with (ant) logo and Slido QR code
 */
export default function CoverSlide({ content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    textColor = 'text-white',
    accentColor = 'text-ant-green',
  } = config;

  const { title, subtitle, slidoCode, slidoUrl, clientLogo } = content;

  // Determine logo color based on background
  const isDarkBackground = backgroundColor?.includes('bg-black') ||
                          backgroundColor?.includes('bg-ant-dark-gray') ||
                          backgroundColor?.includes('bg-ant-gray-900');
  const logoSrc = clientLogo
    ? clientLogo
    : isDarkBackground
      ? '/logo/ant-logo-green.svg'
      : '/logo/ant-logo-black.svg';

  return (
    <div
      className={`min-h-screen ${backgroundColor} px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 pb-24 relative overflow-hidden`}
    >
      {/* Desktop: Grid layout with main content left, QR right */}
      <div className="hidden md:grid grid-cols-2 min-h-screen items-center">
        {/* Main content - left side */}
        <div className="relative z-10 flex flex-col items-start gap-8 lg:gap-12 pl-8 lg:pl-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <img
              src={logoSrc}
              alt="(ant)"
              className="h-20 lg:h-28 w-auto"
            />
          </motion.div>

          {/* Subtitle */}
          {subtitle && (
            <FadeIn delay={0.8}>
              <p className={`text-4xl lg:text-6xl ${accentColor} font-semibold leading-tight text-left`}>
                {subtitle}
              </p>
            </FadeIn>
          )}
        </div>

        {/* QR Code - right side */}
        {slidoCode && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-col items-center justify-center"
          >
            {/* QR Code using public API */}
            <div className="mb-4 lg:mb-6">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(slidoUrl)}`}
                alt="Slido QR Code"
                className="w-72 lg:w-96 h-72 lg:h-96 bg-white p-4 rounded-2xl shadow-2xl"
              />
            </div>

            {/* Slido instructions */}
            <div className={`${textColor} opacity-70 text-center`}>
              <p className="text-lg lg:text-xl font-mono mb-1">slido.com</p>
              <p className={`text-3xl lg:text-4xl font-bold ${accentColor}`}>{slidoCode}</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Mobile: Centered stacked layout (no QR) */}
      <div className="md:hidden min-h-screen flex flex-col items-center justify-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <img
            src={logoSrc}
            alt="ANT"
            className="h-16 w-auto mb-8"
          />
        </motion.div>

        {/* Subtitle */}
        {subtitle && (
          <FadeIn delay={0.8}>
            <p className={`text-3xl ${accentColor} font-semibold leading-tight text-center`}>
              {subtitle}
            </p>
          </FadeIn>
        )}
      </div>

      {/* Animated background element */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #5bffc4 0%, transparent 70%)' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.08, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
