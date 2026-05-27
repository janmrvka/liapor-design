'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import TextReveal from '@/components/animations/TextReveal';
import EditableText from '@/components/edit/EditableText';

/**
 * Checker Slide Template
 * For slides with title, subtitle, question items, and a closing statement
 * Used for: WOW checker, validation criteria, simple tests
 */
export default function CheckerSlide({ slide, content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    textColor = 'text-white',
    accentColor = 'text-ant-green',
    accentLine = false,
    itemLayout = 'list',
  } = config;

  const { title, subtitle, items, footer, highlightFooter, links, featuredLink } = content;

  const isDark = backgroundColor?.includes('black');

  return (
    <div className={`min-h-screen flex items-center justify-center ${backgroundColor} px-4 md:px-8 lg:px-16 py-6 md:py-8 lg:py-10 pb-16 relative overflow-hidden`}>
      {/* Subtle background accent */}
      <motion.div
        className={`absolute right-1/4 top-1/4 w-64 h-64 rounded-full opacity-5`}
        style={{
          background: `radial-gradient(circle, ${isDark ? '#5bffc4' : '#000'} 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="text-center max-w-5xl w-full relative z-10">
        {/* Title */}
        {title && (
          <EditableText
            slideId={slide?.id}
            path="content.title"
            value={title}
            as="h1"
            className={`text-5xl md:text-7xl lg:text-8xl font-bold ${textColor} mb-2 md:mb-4 lg:mb-6 whitespace-pre-line`}
          >
            <TextReveal delay={0.2} staggerDelay={0.1}>
              {title}
            </TextReveal>
          </EditableText>
        )}

        {/* Accent line below title */}
        {accentLine && (
          <div className={`w-16 md:w-24 lg:w-32 h-0.5 md:h-1 ${isDark ? 'bg-ant-green' : 'bg-black'} mx-auto mt-4 mb-6 md:mb-8 lg:mb-10 rounded-full`} />
        )}

        {/* Subtitle */}
        {subtitle && (
          <FadeIn delay={0.5}>
            <EditableText
              slideId={slide?.id}
              path="content.subtitle"
              value={subtitle}
              as="p"
              className={`text-xl md:text-3xl lg:text-4xl ${textColor} opacity-80 mb-6 md:mb-10 lg:mb-14 whitespace-pre-line`}
            >
              {subtitle}
            </EditableText>
          </FadeIn>
        )}

        {/* Items/Questions */}
        {items && items.length > 0 && itemLayout === 'grid' ? (
          <div className={`grid ${items.length === 3 ? 'grid-cols-3' : items.length === 6 ? 'grid-cols-3' : items.length === 4 ? 'grid-cols-2' : 'grid-cols-2'} gap-4 md:gap-6 mb-4 md:mb-6 lg:mb-8 items-stretch`}>
            {items.map((item, index) => (
              <FadeIn key={index} delay={0.7 + index * 0.15} className="h-full">
                <div className={`border ${isDark ? 'border-white/20' : 'border-black/20'} rounded-xl p-5 md:p-7 text-left h-full`}>
                  {item.includes(' — ') ? (
                    <>
                      <p className={`text-xl md:text-2xl lg:text-3xl font-bold ${textColor} mb-2`}>{item.split(' — ')[0]}</p>
                      <p className={`text-lg md:text-xl lg:text-2xl ${textColor} opacity-75 font-medium`}>{item.split(' — ').slice(1).join(' — ')}</p>
                    </>
                  ) : (
                    <p className={`text-xl md:text-2xl lg:text-3xl font-semibold ${textColor}`}>{item}</p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        ) : items && items.length > 0 && (
          <div className="space-y-6 md:space-y-8 mb-4 md:mb-6 lg:mb-8">
            {items.map((item, index) => (
              <FadeIn key={index} delay={0.7 + index * 0.15}>
                <p className={`text-xl md:text-3xl lg:text-4xl font-semibold`}>
                  {item.includes(' — ') ? (
                    <>
                      <span className={textColor}>{item.split(' — ')[0]}</span>
                      <span className={`${textColor} opacity-55`}> — {item.split(' — ').slice(1).join(' — ')}</span>
                    </>
                  ) : (
                    <span className={textColor}>{item}</span>
                  )}
                </p>
              </FadeIn>
            ))}
          </div>
        )}

        {/* Featured link */}
        {featuredLink && (
          <FadeIn delay={1.1}>
            <a
              href={featuredLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 mt-4 mb-3 px-6 py-3 rounded-xl border-2 ${isDark ? 'border-ant-green text-ant-green' : 'border-black text-black'} text-xl md:text-2xl font-bold hover:opacity-70 transition-opacity`}
            >
              ↗ {featuredLink.label}
            </a>
          </FadeIn>
        )}

        {/* Links */}
        {links && links.length > 0 && (
          <FadeIn delay={1.2}>
            <div className="flex flex-wrap justify-center gap-4 mt-4 mb-4">
              {links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-ant-green text-base md:text-lg font-medium hover:opacity-70 transition-opacity"
                >
                  ↗ {link.label}
                </a>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Footer/Closing statement */}
        {footer && (
          <FadeIn delay={1.4}>
            {highlightFooter ? (
              <motion.div
                className="relative inline-block mt-2 md:mt-3 lg:mt-4 mb-6 md:mb-10 lg:mb-14"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                <motion.div
                  className={`absolute inset-0 rounded-xl border ${isDark ? 'border-ant-green' : 'border-black'}`}
                  animate={{
                    boxShadow: isDark
                      ? ['0 0 15px rgba(91,255,196,0.2)', '0 0 30px rgba(91,255,196,0.4)', '0 0 15px rgba(91,255,196,0.2)']
                      : ['0 0 15px rgba(0,0,0,0.2)', '0 0 30px rgba(0,0,0,0.4)', '0 0 15px rgba(0,0,0,0.2)'],
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <p className={`relative text-lg md:text-xl lg:text-2xl font-semibold px-4 md:px-5 lg:px-8 py-2 md:py-3 lg:py-4 ${textColor} rounded-xl`}>
                  {footer}
                </p>
              </motion.div>
            ) : (
              <motion.p
                className={`text-xl md:text-2xl lg:text-3xl ${textColor} font-bold`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                {footer}
              </motion.p>
            )}
          </FadeIn>
        )}
      </div>
    </div>
  );
}
