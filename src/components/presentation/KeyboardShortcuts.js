'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

/**
 * Keyboard Shortcuts Help - Toggle with Cmd+/ (Ctrl+/)
 */
export default function KeyboardShortcuts() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      // Cmd+/ or Ctrl+/ - Toggle help
      if ((e.metaKey || e.ctrlKey) && e.key === '/') {
        e.preventDefault();
        setIsVisible(prev => !prev);
      }

      // Also hide on Escape
      if (e.key === 'Escape' && isVisible) {
        setIsVisible(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isVisible]);

  const shortcuts = [
    { key: '← →', description: 'Navigace mezi slajdy' },
    { key: '⌘ F', description: 'Fullscreen' },
    { key: '⌘ K', description: 'Speaker notes (poznámky)' },
    { key: '⌘ P', description: 'Live prompt (dev mode)' },
    { key: '⌘ /', description: 'Tato nápověda' },
    { key: 'ESC', description: 'Zavřít overlay' },
  ];

  return (
    <>
      {/* Floating help button */}
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed top-8 right-8 w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="Klávesové zkratky (⌘ /)"
      >
        <span className="text-lg font-bold">?</span>
      </motion.button>

      {/* Help overlay */}
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsVisible(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/95 backdrop-blur-lg border border-white/20 rounded-2xl p-8 z-50"
              style={{ maxWidth: '500px', width: '90%' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Klávesové zkratky
                </h2>
                <button
                  onClick={() => setIsVisible(false)}
                  className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center text-white/60 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Shortcuts list */}
              <div className="space-y-3">
                {shortcuts.map((shortcut, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10"
                  >
                    <span className="text-white/80">{shortcut.description}</span>
                    <kbd className="px-3 py-1.5 bg-white/10 text-white font-mono text-sm rounded border border-white/20 min-w-[60px] text-center">
                      {shortcut.key}
                    </kbd>
                  </motion.div>
                ))}
              </div>

              {/* Footer tip */}
              <div className="mt-6 p-3 bg-ant-green/20 border border-ant-green/40 rounded-lg">
                <div className="text-xs text-ant-green/90 leading-relaxed">
                  💡 <strong>Tip:</strong> Zkratky fungují pouze když není aktivní žádné textové pole
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
