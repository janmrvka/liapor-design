'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import BrandSticker from '@/components/effects/BrandSticker';

/**
 * ContactWowSlide - WOW closing slide with animated elements
 * Features: Animated logo reveal, floating particles, gradient pulse, brand stickers
 */
export default function ContactWowSlide({ content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    textColor = 'text-white',
    accentColor = 'text-ant-green',
  } = config;

  const { title, subtitle, contactEmail, contactPhone, website } = content;

  // Floating particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 6 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div
      className={`min-h-screen ${backgroundColor} px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 pb-24 relative overflow-hidden flex items-center justify-center`}
    >
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(91, 255, 196, 0.3) 0%, transparent 70%)' }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(218, 212, 255, 0.25) 0%, transparent 70%)' }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(255, 226, 235, 0.15) 0%, transparent 60%)' }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-ant-green"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl">
        {/* Title with dramatic reveal */}
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold ${textColor} mb-6 md:mb-8`}>
              {title}
            </h1>
          </motion.div>
        )}

        {/* Subtitle / Website - no parallax to avoid overlapping issues */}
        {(subtitle || website) && (
          <FadeIn delay={1.2}>
            <p className={`text-2xl md:text-3xl lg:text-4xl ${accentColor} font-semibold`}>
              {subtitle || website}
            </p>
          </FadeIn>
        )}

        {/* Contact details */}
        {(contactEmail || contactPhone) && (
          <FadeIn delay={1.5}>
            <div className={`mt-8 md:mt-12 ${textColor} opacity-70 text-lg md:text-xl space-y-2`}>
              {contactEmail && <p>{contactEmail}</p>}
              {contactPhone && <p>{contactPhone}</p>}
            </div>
          </FadeIn>
        )}
      </div>

      {/* Brand sticker - only top right, bottom left would overlap logo */}
      <BrandSticker
        name="YES"
        variant="accent"
        position="top-right"
        rotation={15}
        size="md"
      />

      {/* Animated ring decoration */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-ant-green/20 pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full border border-ant-green/10 pointer-events-none"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.2, 0.1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}
