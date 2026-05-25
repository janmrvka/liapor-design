'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEditMode } from '@/contexts/EditModeContext';

export default function EditModeIndicator() {
  const { isEditMode, setIsEditMode, hasChanges, saveChanges, isSaving } = useEditMode();

  return (
    <AnimatePresence>
      {isEditMode && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 z-[9999] flex flex-col gap-2"
        >
          {/* Edit mode indicator */}
          <div className="bg-ant-green text-black px-4 py-2 rounded-lg shadow-lg font-bold flex items-center gap-2">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
            EDIT MODE
            <button
              onClick={() => setIsEditMode(false)}
              className="ml-2 hover:bg-black/10 rounded px-2 transition-colors"
            >
              ✕
            </button>
          </div>

          {/* Save button */}
          {hasChanges && (
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={saveChanges}
              disabled={isSaving}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? '💾 Ukládám...' : '💾 Uložit změny'}
            </motion.button>
          )}

          {/* Instructions */}
          <div className="bg-black/80 text-white text-xs px-3 py-2 rounded-lg shadow-lg backdrop-blur-sm">
            <div className="font-bold mb-1">Klávesové zkratky:</div>
            <div>• <kbd className="bg-white/20 px-1 rounded">Ctrl/Cmd+E</kbd> = Zapnout/Vypnout</div>
            <div>• <kbd className="bg-white/20 px-1 rounded">Klikni na text</kbd> = Editovat</div>
            <div>• <kbd className="bg-white/20 px-1 rounded">Enter</kbd> = Uložit</div>
            <div>• <kbd className="bg-white/20 px-1 rounded">Esc</kbd> = Zrušit</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
