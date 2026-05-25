'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const EditModeContext = createContext();

export function EditModeProvider({ children }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [pendingChanges, setPendingChanges] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  // Toggle edit mode with Ctrl/Cmd + E
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        setIsEditMode(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Update slide content
  const updateSlideContent = (slideId, path, value) => {
    setPendingChanges(prev => ({
      ...prev,
      [slideId]: {
        ...prev[slideId],
        [path]: value
      }
    }));
  };

  // Save all changes
  const saveChanges = async () => {
    if (Object.keys(pendingChanges).length === 0) return;

    setIsSaving(true);
    try {
      const response = await fetch('/api/update-slide-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ changes: pendingChanges }),
      });

      if (!response.ok) throw new Error('Failed to save changes');

      setPendingChanges({});
      window.location.reload();
    } catch (error) {
      console.error('Error saving:', error);
      alert('❌ Chyba při ukládání: ' + error.message);
    } finally {
      setIsSaving(false);
    }
  };

  const hasChanges = Object.keys(pendingChanges).length > 0;

  return (
    <EditModeContext.Provider value={{
      isEditMode,
      setIsEditMode,
      pendingChanges,
      updateSlideContent,
      saveChanges,
      isSaving,
      hasChanges,
    }}>
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode() {
  const context = useContext(EditModeContext);
  if (!context) {
    throw new Error('useEditMode must be used within EditModeProvider');
  }
  return context;
}
