'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

/**
 * Speaker Notes Component
 * Toggle with Cmd+K (Ctrl+K) - show/hide presenter notes
 */
export default function SpeakerNotes({ currentSlide, notes, isVisible, onToggle }) {
  const [localNotes, setLocalNotes] = useState('');

  useEffect(() => {
    // Load notes from localStorage for this slide
    const savedNotes = localStorage.getItem(`slide-notes-${currentSlide}`);
    setLocalNotes(savedNotes || notes || '');
  }, [currentSlide, notes]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setLocalNotes(newValue);
    // Auto-save to localStorage
    localStorage.setItem(`slide-notes-${currentSlide}`, newValue);
  };

  const handleClear = () => {
    if (confirm('Smazat poznámky k tomuto slajdu?')) {
      setLocalNotes('');
      localStorage.removeItem(`slide-notes-${currentSlide}`);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/20 z-50"
          style={{ height: '35vh' }}
        >
          <div className="h-full flex flex-col p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-bold text-white">
                  Poznámky ke slajdu {currentSlide + 1}
                </h3>
                <kbd className="px-2 py-1 text-xs bg-white/10 text-white/60 rounded border border-white/20">
                  ⌘ K
                </kbd>
                <span className="text-sm text-white/40">pro zavření</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={handleClear}
                  className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm"
                >
                  Smazat
                </button>
                <button
                  onClick={onToggle}
                  className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Notes textarea */}
            <textarea
              value={localNotes}
              onChange={handleChange}
              placeholder="Zde napiš poznámky k tomuto slajdu... Co chceš říkat, klíčové body, časování, atd."
              className="flex-1 w-full bg-white/5 text-white text-lg p-4 rounded-lg border border-white/10 focus:border-ant-green focus:outline-none resize-none font-mono leading-relaxed"
              spellCheck="false"
            />

            {/* Tips */}
            <div className="mt-3 text-xs text-white/40">
              💡 Poznámky se automaticky ukládají při psaní
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
