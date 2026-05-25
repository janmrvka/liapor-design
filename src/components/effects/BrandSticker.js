'use client';

import { motion } from 'framer-motion';

/**
 * BrandSticker - Professional brand sticker component
 * Supports configurable positioning, rotation, opacity, and animations
 *
 * Usage:
 * <BrandSticker
 *   name="WOW"
 *   variant="watermark"
 *   position="bottom-right"
 * />
 */
export default function BrandSticker({
  name,
  text, // custom text sticker (e.g. "(WOW) je naše proč")
  image, // custom image path (e.g. "/images/wow je naše proč.png")
  variant = 'watermark', // 'watermark' | 'accent'
  position = 'bottom-right', // 'bottom-right' | 'top-left' | 'top-right' | 'bottom-left' | 'center'
  rotation = 0, // degrees, can be negative
  size = 'auto', // 'sm' | 'md' | 'lg' | 'xl' | 'auto'
  shake = false, // periodic shake effect
  className = '',
}) {
  // Full opacity for brand stickers (per brand manual)
  const opacity = 1;

  // Size mapping (width in pixels)
  const sizeMap = {
    sm: 120,
    md: 180,
    lg: 280,
    xl: 266,
    auto: variant === 'watermark' ? 160 : 240,
  };

  // Position mapping
  const positionMap = {
    'bottom-right': 'bottom-16 right-16',
    'top-left': 'top-16 left-16',
    'top-right': 'top-16 right-16',
    'bottom-left': 'bottom-16 left-16',
    'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  };

  const width = sizeMap[size];
  const positionClasses = positionMap[position];

  // Shake animation keyframes
  const shakeAnimation = shake ? {
    rotate: [rotation, rotation - 3, rotation + 3, rotation - 2, rotation + 2, rotation],
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 3,
      ease: 'easeInOut',
    },
  } : {};

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: rotation - 20 }}
      animate={{ opacity, scale: 1, rotate: rotation, ...shakeAnimation }}
      transition={{
        duration: 1.2,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`absolute ${positionClasses} pointer-events-none select-none hidden md:block ${className}`}
      style={{
        width: `${width}px`,
        filter: variant === 'watermark' ? 'blur(0.5px)' : 'none',
        zIndex: variant === 'watermark' ? 0 : 10,
      }}
    >
      {text ? (
        <div
          className="bg-black text-white font-bold text-center px-6 py-4 rounded-sm leading-tight"
          style={{ fontSize: width > 300 ? '1.5rem' : '1.1rem' }}
        >
          {text}
        </div>
      ) : (
        <img
          src={image || `/stickers/PNG/${name}.png`}
          alt=""
          className="w-full h-auto"
          draggable={false}
        />
      )}
    </motion.div>
  );
}
