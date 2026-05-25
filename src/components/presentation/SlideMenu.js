'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SLIDES } from '@/lib/content/slides';

/**
 * Slide Menu - Quick navigation with slide thumbnails
 * Shows visual previews of all slides for easy navigation
 */
export default function SlideMenu({ currentSlide, goToSlide }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSlideClick = (index) => {
    goToSlide(index);
    setIsOpen(false);
  };

  // Get thumbnail path for slide
  const getThumbnailPath = (index) => {
    return `/thumbnails/slide-${index}.png`;
  };

  return (
    <>
      {/* Menu button at bottom left */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-8 z-50
                   bg-black/20 hover:bg-black/40 backdrop-blur-sm
                   text-white px-4 py-2 rounded-full
                   transition-all duration-200
                   border border-white/10 hover:border-white/30
                   flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        <span className="text-sm font-medium">
          {currentSlide + 1} / {SLIDES.length}
        </span>
      </motion.button>

      {/* Slide menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Menu panel - wider for thumbnails */}
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -500, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-[500px] bg-black/90 backdrop-blur-md z-50
                         border-r border-white/10 overflow-y-auto"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-white">Slidy</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Slide grid with thumbnails */}
                <div className="space-y-3">
                  {SLIDES.map((slide, index) => {
                    const isActive = index === currentSlide;
                    const slideTitle = slide.content?.title || slide.content?.statement || `Slide ${index + 1}`;

                    return (
                      <motion.button
                        key={slide.id}
                        onClick={() => handleSlideClick(index)}
                        className={`w-full text-left rounded-lg transition-all overflow-hidden
                                   ${isActive
                                     ? 'ring-2 ring-ant-green'
                                     : 'hover:ring-2 hover:ring-white/30'
                                   }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex gap-3">
                          {/* Thumbnail */}
                          <div
                            className="w-32 h-20 flex-shrink-0 rounded overflow-hidden relative bg-black"
                          >
                            {/* Slide number overlay */}
                            <div className="absolute top-1 left-1 bg-black/60 text-white text-xs px-2 py-0.5 rounded z-10">
                              {index + 1}
                            </div>
                            {/* Screenshot thumbnail */}
                            <img
                              src={getThumbnailPath(index)}
                              alt={slideTitle}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Slide info */}
                          <div className={`flex-1 py-2 pr-2 ${isActive ? 'bg-ant-green/10' : 'bg-white/5'} rounded-r`}>
                            <p className={`font-medium text-sm line-clamp-2
                                         ${isActive ? 'text-ant-green' : 'text-white'}`}>
                              {slideTitle}
                            </p>
                            {slide.content?.subtitle && (
                              <p className={`text-xs mt-1 line-clamp-1
                                           ${isActive ? 'text-white/80' : 'text-white/60'}`}>
                                {slide.content.subtitle}
                              </p>
                            )}
                          </div>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
