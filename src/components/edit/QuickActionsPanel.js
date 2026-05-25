'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEditMode } from '@/contexts/EditModeContext';
import { useState } from 'react';

export default function QuickActionsPanel({ slideId, slideIndex, totalSlides, onAction }) {
  const { isEditMode } = useEditMode();
  const [isOpen, setIsOpen] = useState(false);

  if (!isEditMode) return null;

  const actions = [
    {
      icon: '🎨',
      label: 'Změnit barvu pozadí',
      action: 'changeBackground',
      colors: [
        { name: 'Černá', value: 'bg-black' },
        { name: 'Zelená', value: 'bg-ant-green' },
        { name: 'Modrá', value: 'bg-ant-blue' },
        { name: 'Růžová', value: 'bg-ant-pink' },
        { name: 'Fialová', value: 'bg-ant-purple' },
        { name: 'Žlutá', value: 'bg-ant-yellow' },
        { name: 'Bílá', value: 'bg-white' },
      ]
    },
  ];

  return (
    <div className="fixed bottom-4 left-4 z-[9998]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mb-3 bg-black/90 backdrop-blur-sm text-white rounded-lg shadow-xl p-4 min-w-[250px]"
          >
            <div className="font-bold mb-3 flex items-center justify-between">
              Rychlé akce
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/10 rounded px-2 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Background color picker */}
            <div className="mb-3">
              <div className="text-sm mb-2">🎨 Barva pozadí:</div>
              <div className="grid grid-cols-4 gap-2">
                {actions[0].colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => onAction?.('changeBackground', color.value)}
                    className={`h-8 rounded border-2 border-white/20 hover:border-white transition-colors ${color.value}`}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="border-t border-white/20 my-3" />

            {/* Slide actions */}
            <div className="space-y-2">
              <button
                onClick={() => onAction?.('duplicateSlide')}
                className="w-full text-left px-3 py-2 hover:bg-white/10 rounded transition-colors flex items-center gap-2"
              >
                <span>📋</span> Duplikovat slide
              </button>

              {slideIndex > 0 && (
                <button
                  onClick={() => onAction?.('moveUp')}
                  className="w-full text-left px-3 py-2 hover:bg-white/10 rounded transition-colors flex items-center gap-2"
                >
                  <span>⬆️</span> Přesunout nahoru
                </button>
              )}

              {slideIndex < totalSlides - 1 && (
                <button
                  onClick={() => onAction?.('moveDown')}
                  className="w-full text-left px-3 py-2 hover:bg-white/10 rounded transition-colors flex items-center gap-2"
                >
                  <span>⬇️</span> Přesunout dolů
                </button>
              )}

              <button
                onClick={() => {
                  if (confirm('Opravdu chceš smazat tento slide?')) {
                    onAction?.('deleteSlide');
                  }
                }}
                className="w-full text-left px-3 py-2 hover:bg-red-500/20 rounded transition-colors flex items-center gap-2 text-red-400"
              >
                <span>🗑️</span> Smazat slide
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-ant-green text-black px-4 py-2 rounded-lg shadow-lg font-bold hover:bg-ant-green/90 transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ⚡ Rychlé akce
      </motion.button>
    </div>
  );
}
