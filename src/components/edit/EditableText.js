'use client';

import { useState, useRef, useEffect } from 'react';
import { useEditMode } from '@/contexts/EditModeContext';

export default function EditableText({
  slideId,
  path,
  value,
  className = '',
  as: Component = 'div',
  multiline = false,
  children
}) {
  const { isEditMode, updateSlideContent } = useEditMode();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      if (multiline) {
        inputRef.current.select();
      } else {
        inputRef.current.setSelectionRange(0, inputRef.current.value.length);
      }
    }
  }, [isEditing, multiline]);

  const handleClick = (e) => {
    if (isEditMode && !isEditing) {
      e.preventDefault();
      e.stopPropagation();
      setIsEditing(true);
    }
  };

  const handleBlur = () => {
    if (editValue !== value) {
      updateSlideContent(slideId, path, editValue);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (!multiline && e.key === 'Enter') {
      e.preventDefault();
      handleBlur();
    }
    if (e.key === 'Escape') {
      setEditValue(value);
      setIsEditing(false);
    }
  };

  if (!isEditMode) {
    return <Component className={className}>{children || value}</Component>;
  }

  if (isEditing) {
    if (multiline) {
      return (
        <textarea
          ref={inputRef}
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className={`${className} bg-white/10 border-2 border-ant-green rounded px-2 py-1 outline-none resize-none`}
          rows={editValue.split('\n').length || 3}
          style={{ width: '100%' }}
        />
      );
    }

    return (
      <input
        ref={inputRef}
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={`${className} bg-white/10 border-2 border-ant-green rounded px-2 py-1 outline-none`}
        style={{ width: '100%' }}
      />
    );
  }

  return (
    <Component
      onClick={handleClick}
      className={`${className} ${isEditMode ? 'cursor-pointer hover:bg-white/10 hover:outline hover:outline-2 hover:outline-ant-green/50 rounded transition-all' : ''}`}
    >
      {children || value}
    </Component>
  );
}
