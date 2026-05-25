'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';

/**
 * Logo Grid Slide Template
 * Displays client/reference logos in a grid layout
 * Used for: Client references, partner logos, certifications
 */
export default function LogoGridSlide({ content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    textColor = 'text-white',
    largeLogos = false,
  } = config;

  const { title, subtitle, logos } = content;

  // Logo max height based on largeLogos config
  const logoMaxHeight = largeLogos ? '11rem' : '8rem'; // 44/4 = 11rem, 32/4 = 8rem

  return (
    <div
      className={`min-h-screen flex flex-col items-center ${backgroundColor} px-4 md:px-8 lg:px-16 pt-4 md:pt-6 lg:pt-8 pb-48 relative overflow-hidden`}
      style={{ justifyContent: 'safe center' }}
    >
      {/* Subtle background pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-6xl w-full text-center relative z-10">
        {/* Title */}
        {title && (
          <FadeIn delay={0.2}>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-2 md:mb-3`}>
              {title}
            </h2>
          </FadeIn>
        )}

        {/* Subtitle */}
        {subtitle && (
          <FadeIn delay={0.4}>
            <p className={`text-lg md:text-xl lg:text-2xl ${textColor} opacity-70 mb-4 md:mb-5 lg:mb-6`}>
              {subtitle}
            </p>
          </FadeIn>
        )}

        {/* Logo Grid */}
        <div className={`grid ${logos?.length > 0 && logos[0].description ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-2 md:grid-cols-4'} gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto`} style={{ maxHeight: 'calc(100vh - 280px)' }}>
          {logos?.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: 0.6 + index * 0.2,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              {logo.description ? (
                // Card with description - full card layout
                <div className={`relative p-4 md:p-5 lg:p-6 rounded-xl border-2 ${
                  backgroundColor === 'bg-black'
                    ? 'border-white/10 hover:border-white/30 bg-white/5'
                    : 'border-black/10 hover:border-black/30 bg-black/5'
                } transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl`}>

                  {/* Logo */}
                  <div className="flex items-center justify-center mb-3 md:mb-4 h-14 md:h-16 lg:h-20">
                    {logo.image ? (
                      <img
                        src={logo.image}
                        alt={logo.name}
                        className={`max-h-full w-auto object-contain ${logo.noInvert ? 'opacity-100' : 'opacity-90'} group-hover:opacity-100 transition-all duration-300 ${logo.noInvert ? '' : 'filter brightness-0 invert'}`}
                        loading="eager"
                      />
                    ) : (
                      <span className={`text-xl md:text-2xl lg:text-3xl font-bold ${textColor} opacity-90 group-hover:opacity-100 transition-opacity`}>
                        {logo.name}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <div className="relative">
                    {/* Accent line */}
                    <div className={`w-10 h-0.5 mb-3 ${
                      backgroundColor === 'bg-black' ? 'bg-ant-green' : 'bg-black'
                    } rounded-full`} />

                    <p className={`${textColor} text-sm md:text-base lg:text-lg font-medium leading-relaxed whitespace-pre-line`}>
                      {logo.description}
                    </p>
                  </div>

                  {/* Decorative corner accent */}
                  <div className={`absolute top-0 right-0 w-12 h-12 ${
                    backgroundColor === 'bg-black' ? 'bg-ant-green/10' : 'bg-black/10'
                  } rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              ) : (
                // Simple logo - centered
                <div className="flex items-center justify-center h-full p-4">
                  {logo.image ? (
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className={`w-auto object-contain ${logo.noInvert ? 'opacity-100' : 'opacity-80'} group-hover:opacity-100 transition-all duration-300 ${logo.noInvert ? '' : 'filter brightness-0 invert'}`}
                      style={{
                        maxHeight: logoMaxHeight,
                        ...(logo.scale ? { transform: `scale(${logo.scale})` } : {}),
                      }}
                      loading="eager"
                    />
                  ) : (
                    <span className={`text-2xl md:text-3xl lg:text-4xl font-bold ${textColor} opacity-80 group-hover:opacity-100 transition-opacity`}>
                      {logo.name}
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
