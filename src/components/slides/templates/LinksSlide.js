'use client';

import { motion } from 'framer-motion';
import SlideIn from '@/components/animations/SlideIn';
import FadeIn from '@/components/animations/FadeIn';

/**
 * Links Slide Template
 * Displays a title and a set of clickable button links
 */
export default function LinksSlide({ content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    textColor = 'text-white',
    accentColor = 'text-ant-green',
  } = config;

  const accentColorValue = accentColor.includes('ant-green') ? '#5bffc4' :
                           accentColor.includes('ant-blue') ? '#d7edff' :
                           accentColor.includes('ant-pink') ? '#ffe2eb' : '#5bffc4';

  const isLight = backgroundColor.includes('ant-green') || backgroundColor.includes('ant-blue') || backgroundColor.includes('ant-pink') || backgroundColor.includes('white');
  const borderColor = isLight ? '#000000' : accentColorValue;
  const iconBg = isLight ? '#000000' : accentColorValue;
  const iconColor = isLight ? (accentColor.includes('ant-green') ? '#5bffc4' : '#ffffff') : '#000000';

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${backgroundColor} px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 relative overflow-hidden`}
    >
      {/* Background blob */}
      <motion.div
        className="absolute -left-32 top-1/3 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: accentColorValue }}
        animate={{ x: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-3xl w-full relative z-10">
        <SlideIn direction="up" delay={0.1}>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-bold ${textColor} mb-3 md:mb-4 text-center`}>
            {content.title}
          </h2>
        </SlideIn>

        {content.subtitle && (
          <FadeIn delay={0.25}>
            <p className={`text-base md:text-xl ${textColor} opacity-60 text-center mb-6 md:mb-8`}>
              {content.subtitle}
            </p>
          </FadeIn>
        )}

        {content.note && (
          <FadeIn delay={0.35}>
            <p className={`text-sm md:text-base ${textColor} opacity-40 text-center mb-8 md:mb-12 italic`}>
              {content.note}
            </p>
          </FadeIn>
        )}

        <div className="flex flex-col gap-4 md:gap-5">
          {content.links.map((item, i) => (
            <FadeIn key={i} delay={0.4 + i * 0.12}>
              <motion.a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-xl md:rounded-2xl px-6 md:px-8 py-5 md:py-6 border-2 transition-all"
                style={{ borderColor }}
                whileHover={{ scale: 1.02, backgroundColor: `${borderColor}10` }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  <p className={`text-lg md:text-2xl font-bold ${textColor}`}>{item.label}</p>
                  {item.description && (
                    <p className={`text-sm md:text-base ${textColor} opacity-50 mt-0.5`}>{item.description}</p>
                  )}
                </div>
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: iconBg }}
                >
                  <svg className="w-5 h-5" style={{ color: iconColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </motion.a>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
