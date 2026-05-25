'use client';

import { motion } from 'framer-motion';
import SlideIn from '@/components/animations/SlideIn';
import FadeIn from '@/components/animations/FadeIn';

/**
 * Creative Variants Slide Template
 * Used for: Presenting creative production variants (Varianta 1/2/3)
 * Shows variant number, title, description, pros/cons, packages with prices
 */
export default function CreativeVariantsSlide({ content, config = {} }) {
  const {
    backgroundColor = 'bg-white',
    textColor = 'text-black',
    accentColor = 'text-ant-green',
    accentBg = 'bg-ant-green',
  } = config;

  const accentColorValue = accentColor.includes('ant-green') ? '#5bffc4' :
                           accentColor.includes('ant-blue') ? '#d7edff' :
                           accentColor.includes('ant-pink') ? '#ffe2eb' : '#5bffc4';

  const isDark = backgroundColor?.includes('black') || backgroundColor?.includes('gray-9');

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${backgroundColor} px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 pb-24 relative overflow-hidden`}
    >
      {/* Background blob */}
      <motion.div
        className="absolute -right-32 top-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: accentColorValue }}
        animate={{ x: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-5xl w-full relative z-10">

        {/* Variant number badge */}
        {content.variantNumber && (
          <FadeIn delay={0.1}>
            <div className="mb-4 md:mb-6">
              <span
                className={`inline-block text-xs md:text-sm font-bold uppercase tracking-widest px-3 py-1 rounded-full ${accentBg} text-black`}
              >
                Varianta {content.variantNumber}
              </span>
            </div>
          </FadeIn>
        )}

        {/* Title */}
        <SlideIn direction="up" delay={0.15}>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold ${textColor} mb-3 md:mb-4 leading-tight`}>
            {content.title}
          </h2>
        </SlideIn>

        {/* Description */}
        {content.description && (
          <FadeIn delay={0.3}>
            <p className={`text-base md:text-xl lg:text-2xl ${textColor} opacity-70 mb-6 md:mb-8 max-w-3xl leading-relaxed`}>
              {content.description}
            </p>
          </FadeIn>
        )}

        {/* Pros & Cons */}
        {(content.pros || content.cons) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            {content.pros && (
              <FadeIn delay={0.4}>
                <div className={`rounded-xl md:rounded-2xl p-4 md:p-6 ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                  <p className={`text-xs md:text-sm font-bold uppercase tracking-wider ${textColor} opacity-50 mb-3`}>Výhody</p>
                  <ul className="space-y-2">
                    {content.pros.map((pro, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm md:text-base ${textColor} opacity-80`}>
                        <span className="mt-0.5 flex-shrink-0" style={{ color: accentColorValue }}>✓</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            )}
            {content.cons && (
              <FadeIn delay={0.5}>
                <div className={`rounded-xl md:rounded-2xl p-4 md:p-6 ${isDark ? 'bg-white/5' : 'bg-black/5'}`}>
                  <p className={`text-xs md:text-sm font-bold uppercase tracking-wider ${textColor} opacity-50 mb-3`}>Nevýhody</p>
                  <ul className="space-y-2">
                    {content.cons.map((con, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm md:text-base ${textColor} opacity-80`}>
                        <span className="mt-0.5 flex-shrink-0 opacity-50">–</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            )}
          </div>
        )}

        {/* Packages */}
        {content.packages && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {content.packages.map((pkg, i) => (
              <FadeIn key={i} delay={0.55 + i * 0.1}>
                <motion.div
                  className={`rounded-xl md:rounded-2xl p-4 md:p-6 border-2 relative overflow-hidden`}
                  style={{ borderColor: accentColorValue }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                >
                  {/* Package name */}
                  <div className="flex items-center justify-between mb-2 md:mb-3">
                    <p className={`text-sm md:text-base font-bold uppercase tracking-wide ${textColor} opacity-50`}>
                      {pkg.name}
                    </p>
                    {pkg.recommended && (
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${accentBg} text-black`}>
                        Doporučeno
                      </span>
                    )}
                  </div>
                  {/* Price */}
                  <p className={`text-2xl md:text-3xl lg:text-4xl font-black ${textColor} mb-2 md:mb-3`}>
                    {pkg.price}
                  </p>
                  {/* Items */}
                  {pkg.items && (
                    <ul className="space-y-1">
                      {pkg.items.map((item, j) => (
                        <li key={j} className={`text-xs md:text-sm ${textColor} opacity-70 flex items-start gap-1.5`}>
                          <span className="flex-shrink-0">·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </FadeIn>
            ))}
          </div>
        )}

        {/* Note */}
        {content.note && (
          <FadeIn delay={0.9}>
            <p className={`text-xs md:text-sm ${textColor} opacity-40 mt-4 md:mt-6`}>
              {content.note}
            </p>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
