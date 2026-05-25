'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import { pillarIconMap } from '@/components/visuals/PillarIcons';

/**
 * Pillar Grid Slide Template - Enhanced with icons
 * Overview of all 6 WOW pillars in a grid layout with visual icons
 * Used for: Introduction to pillars before diving into details
 * Responsive: 1 column on mobile, 2 on tablet, 3 on desktop
 */
export default function PillarGridSlide({ content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    title = '6 pilířů WOW kultury',
  } = config;

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${backgroundColor} px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 pb-24 relative overflow-hidden`}
    >
      {/* Animated background grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className="flex flex-col items-center relative z-10 w-full max-w-6xl">
        {title && (
          <FadeIn delay={0.1}>
            <div className="text-center mb-8 md:mb-10 lg:mb-12">
              <motion.div
                className="w-16 md:w-20 lg:w-24 h-0.5 md:h-1 bg-ant-green mx-auto mb-4 md:mb-5 lg:mb-6 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{title}</h2>
            </div>
          </FadeIn>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 w-full">
        {content.pillars.map((pillar, index) => {
          const IconComponent = pillarIconMap[pillar.title];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.4 + index * 0.1,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="relative group"
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute -inset-1 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                style={{ background: pillar.color }}
              />

              {/* Card */}
              <div
                className="relative aspect-square rounded-xl md:rounded-2xl flex flex-col items-center justify-center p-6 md:p-7 lg:p-8 cursor-pointer will-change-transform overflow-hidden"
                style={{ backgroundColor: pillar.color }}
              >
                {/* Decorative circle in background */}
                <motion.div
                  className="absolute -right-6 md:-right-7 lg:-right-8 -bottom-6 md:-bottom-7 lg:-bottom-8 w-24 md:w-28 lg:w-32 h-24 md:h-28 lg:h-32 rounded-full bg-black opacity-5"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />

                {/* Icon - responsive size */}
                {IconComponent && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="mb-3 md:mb-4"
                  >
                    <IconComponent className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 text-black opacity-80" />
                  </motion.div>
                )}

                {/* Title - responsive text */}
                <h3 className="text-2xl md:text-2xl lg:text-3xl font-bold text-black text-center leading-tight relative z-10">
                  {pillar.title}
                </h3>
              </div>
            </motion.div>
          );
        })}
        </div>
      </div>
    </div>
  );
}
