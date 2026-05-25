'use client';

import { useState, useEffect } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { SLIDES } from '@/lib/content/slides';

function SortableSlide({ slide, index, onDelete }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: slide.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  // Get slide title
  const getTitle = () => {
    if (slide.content.title) return slide.content.title;
    if (slide.content.statement) return slide.content.statement;
    return slide.id;
  };

  // Get background color for preview
  const getBgColor = () => {
    const bg = slide.config?.backgroundColor || 'bg-white';
    if (bg.includes('black')) return '#000000';
    if (bg.includes('ant-green')) return '#5bffc4';
    if (bg.includes('ant-blue')) return '#d7edff';
    if (bg.includes('ant-pink')) return '#ffe2eb';
    if (bg.includes('ant-purple')) return '#dad4ff';
    if (bg.includes('ant-yellow')) return '#fffd92';
    if (bg.includes('ant-brown')) return '#ffe4c1';
    return '#ffffff';
  };

  // Get text color
  const getTextColor = () => {
    const text = slide.config?.textColor || 'text-white';
    return text.includes('black') ? '#000000' : '#ffffff';
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-white border-2 border-gray-200 rounded-lg p-3 mb-2 hover:border-blue-400 hover:shadow-lg transition-all"
    >
      <div className="flex items-center gap-3" {...attributes}>
        <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-600 text-sm">
          {index + 1}
        </div>

        {/* Mini preview */}
        <div
          className="flex-shrink-0 w-20 h-12 rounded border border-gray-300 flex items-center justify-center text-xs font-bold overflow-hidden"
          style={{
            backgroundColor: getBgColor(),
            color: getTextColor()
          }}
        >
          <div className="truncate px-1 text-center leading-tight">
            {getTitle().substring(0, 20)}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="font-bold text-gray-800 truncate">{getTitle()}</div>
          <div className="text-xs text-gray-500 truncate">
            {slide.template} • {slide.id}
          </div>
        </div>

        <div className="flex-shrink-0 flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(slide.id);
            }}
            className="w-7 h-7 flex items-center justify-center rounded-md text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
            title="Smazat slide"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
          <div {...listeners} className="cursor-move p-1">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(SLIDES);
  }, []);
  const [hasChanges, setHasChanges] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        const newItems = arrayMove(items, oldIndex, newIndex);
        setHasChanges(true);
        return newItems;
      });
    }
  }

  const handleExport = async () => {
    try {
      // Send the new order to the API
      const response = await fetch('/api/update-slides', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ slides: items }),
      });

      if (!response.ok) {
        throw new Error('Failed to update slides');
      }

      const result = await response.json();
      alert('✅ Pořadí slidů bylo úspěšně uloženo!\n\nStránka se nyní obnoví.');

      // Reload to get fresh data
      window.location.reload();
    } catch (error) {
      console.error('Error updating slides:', error);
      alert('❌ Chyba při ukládání: ' + error.message);
    }
  };

  const handleCopyJSON = () => {
    const json = JSON.stringify(items, null, 2);
    navigator.clipboard.writeText(json);
    alert('JSON zkopírován do schránky!');
  };

  const handleDelete = (id) => {
    if (confirm(`Smazat slide "${id}"?`)) {
      setItems((prev) => prev.filter((s) => s.id !== id));
      setHasChanges(true);
    }
  };

  const handleReset = () => {
    if (confirm('Opravdu chceš vrátit původní pořadí?')) {
      setItems(SLIDES);
      setHasChanges(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Správa pořadí slidů
          </h1>
          <p className="text-gray-600">
            Přetáhni slidy pro změnu pořadí, pak klikni na Uložit.
          </p>
        </div>

        {/* Actions */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex flex-wrap gap-3">
          <button
            onClick={handleExport}
            disabled={!hasChanges}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              hasChanges
                ? 'bg-blue-500 text-white hover:bg-blue-600'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            💾 Uložit nové pořadí
          </button>

          <button
            onClick={handleCopyJSON}
            className="px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-all"
          >
            📋 Zkopírovat JSON
          </button>

          <button
            onClick={handleReset}
            disabled={!hasChanges}
            className={`px-4 py-2 rounded-lg font-semibold transition-all ${
              hasChanges
                ? 'bg-red-500 text-white hover:bg-red-600'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            ↺ Vrátit původní
          </button>

          {hasChanges && (
            <div className="ml-auto flex items-center gap-2 text-orange-600 font-semibold">
              <span className="w-2 h-2 bg-orange-600 rounded-full animate-pulse"></span>
              Neuložené změny
            </div>
          )}
        </div>

        {/* Slide count */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="text-sm text-blue-800">
            Celkem slidů: <span className="font-bold">{items.length}</span>
          </div>
        </div>

        {/* Sortable list */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={items.map(item => item.id)}
                strategy={verticalListSortingStrategy}
              >
                {items.map((slide, index) => (
                  <SortableSlide key={slide.id} slide={slide} index={index} onDelete={handleDelete} />
                ))}
              </SortableContext>
            </DndContext>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h3 className="font-bold text-yellow-800 mb-2">📝 Jak použít:</h3>
          <ol className="list-decimal list-inside text-sm text-yellow-800 space-y-1">
            <li>Přetáhni slidy do požadovaného pořadí</li>
            <li>Klikni na "💾 Uložit nové pořadí"</li>
            <li>Soubor <code className="bg-yellow-100 px-1 rounded">src/lib/content/slides.js</code> se automaticky přepíše</li>
            <li>Stránka se obnoví a změny se projeví okamžitě</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
