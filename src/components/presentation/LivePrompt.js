'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

/**
 * Live Prompt Component - Development Tool
 * Auto-saves prompts per slide, supports image uploads
 * Export all slides at once with images
 */
export default function LivePrompt({ currentSlide, totalSlides, isVisible, onToggle }) {
  const [slidePrompts, setSlidePrompts] = useState({}); // { slideNumber: { prompt, images: [{name, data}] } }
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [currentImages, setCurrentImages] = useState([]);
  const previousSlideRef = useRef(currentSlide);
  const fileInputRef = useRef(null);

  // Load prompt for current slide
  useEffect(() => {
    const slideData = slidePrompts[currentSlide + 1];
    if (slideData) {
      setCurrentPrompt(slideData.prompt || '');
      setCurrentImages(slideData.images || []);
    } else {
      setCurrentPrompt('');
      setCurrentImages([]);
    }
  }, [currentSlide, slidePrompts]);

  // Auto-save when leaving slide
  useEffect(() => {
    const prevSlide = previousSlideRef.current;

    if (prevSlide !== currentSlide && isVisible) {
      // Save previous slide's prompt
      if (currentPrompt.trim() || currentImages.length > 0) {
        saveCurrentSlide(prevSlide + 1);
      }
    }

    previousSlideRef.current = currentSlide;
  }, [currentSlide]);

  const saveCurrentSlide = (slideNum) => {
    if (currentPrompt.trim() || currentImages.length > 0) {
      setSlidePrompts(prev => ({
        ...prev,
        [slideNum]: {
          prompt: currentPrompt.trim(),
          images: currentImages,
          timestamp: new Date().toLocaleTimeString('cs-CZ'),
        }
      }));
    }
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);

    for (const file of files) {
      if (!file.type.startsWith('image/')) {
        alert(`${file.name} není obrázek!`);
        continue;
      }

      // Read file as base64
      const reader = new FileReader();
      reader.onload = (event) => {
        setCurrentImages(prev => [...prev, {
          name: file.name,
          data: event.target.result,
          size: file.size,
        }]);
      };
      reader.readAsDataURL(file);
    }

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const removeImage = (index) => {
    setCurrentImages(prev => prev.filter((_, i) => i !== index));
  };

  const clearCurrentSlide = () => {
    if (confirm('Smazat prompt a obrázky pro tento slajd?')) {
      setCurrentPrompt('');
      setCurrentImages([]);
      const newPrompts = { ...slidePrompts };
      delete newPrompts[currentSlide + 1];
      setSlidePrompts(newPrompts);
    }
  };

  const clearAllSlides = () => {
    if (confirm('Smazat VŠECHNY prompty ze VŠECH slajdů?')) {
      setSlidePrompts({});
      setCurrentPrompt('');
      setCurrentImages([]);
    }
  };

  const exportAllSlides = () => {
    // Save current slide first
    saveCurrentSlide(currentSlide + 1);

    const slideCount = Object.keys(slidePrompts).length;
    if (slideCount === 0) {
      alert('Žádné prompty k exportu!');
      return;
    }

    // Generate markdown
    const now = new Date();
    const dateStr = now.toLocaleDateString('cs-CZ');
    const timeStr = now.toLocaleTimeString('cs-CZ');

    let markdown = `# Změny v (ant) prezentaci\n\n`;
    markdown += `**Exportováno:** ${dateStr} v ${timeStr}\n`;
    markdown += `**Celkem slidů se změnami:** ${slideCount}\n`;
    markdown += `**Celkový počet slidů:** ${totalSlides}\n\n`;
    markdown += `---\n\n`;

    // Sort slide numbers
    const sortedSlideNums = Object.keys(slidePrompts)
      .map(Number)
      .sort((a, b) => a - b);

    sortedSlideNums.forEach(slideNum => {
      const slideData = slidePrompts[slideNum];
      markdown += `## Slide ${slideNum}\n\n`;

      if (slideData.timestamp) {
        markdown += `**[${slideData.timestamp}]**\n\n`;
      }

      markdown += `${slideData.prompt}\n\n`;

      if (slideData.images && slideData.images.length > 0) {
        markdown += `### Přiložené obrázky (${slideData.images.length}):\n\n`;
        slideData.images.forEach((img, idx) => {
          markdown += `**${idx + 1}. ${img.name}**\n`;
          markdown += `![${img.name}](${img.data})\n\n`;
        });
      }

      markdown += `---\n\n`;
    });

    // Summary
    const totalImages = sortedSlideNums.reduce((sum, slideNum) => {
      return sum + (slidePrompts[slideNum].images?.length || 0);
    }, 0);

    markdown += `\n## Souhrn\n\n`;
    markdown += `- **Celkem změn:** ${slideCount} slidů\n`;
    markdown += `- **Dotčené slidy:** ${sortedSlideNums.join(', ')}\n`;
    markdown += `- **Celkem obrázků:** ${totalImages}\n\n`;
    markdown += `---\n\n`;
    markdown += `*Vygenerováno pomocí Live Prompt v (ant) prezentaci*\n`;

    // Create and download file
    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ant-presentation-changes-${dateStr.replace(/\./g, '-')}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    alert(`✅ Exportováno!\n\n${slideCount} slidů se změnami\n${totalImages} obrázků\n\nSoubor: ant-presentation-changes-${dateStr.replace(/\./g, '-')}.md`);
  };

  const getTotalStats = () => {
    const slideCount = Object.keys(slidePrompts).length;
    const imageCount = Object.values(slidePrompts).reduce((sum, data) => {
      return sum + (data.images?.length || 0);
    }, 0);
    return { slideCount, imageCount };
  };

  const stats = getTotalStats();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          className="fixed top-0 right-0 bottom-0 bg-black/95 backdrop-blur-lg border-l border-white/20 z-50"
          style={{ width: '550px' }}
        >
          <div className="h-full flex flex-col p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Live Prompt
                </h3>
                <div className="flex items-center gap-2">
                  <kbd className="px-2 py-1 text-xs bg-white/10 text-white/60 rounded border border-white/20">
                    ⌘ P
                  </kbd>
                  <span className="text-xs text-white/40">pro zavření</span>
                </div>
              </div>
              <button
                onClick={onToggle}
                className="px-3 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors text-sm"
              >
                ✕
              </button>
            </div>

            {/* Stats banner */}
            {stats.slideCount > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 bg-ant-green/20 border border-ant-green/40 rounded-lg"
              >
                <div className="flex items-center justify-between text-ant-green">
                  <div className="flex items-center gap-4">
                    <div>
                      <div className="text-xs opacity-80">Slidů se změnami</div>
                      <div className="text-2xl font-bold">{stats.slideCount}</div>
                    </div>
                    {stats.imageCount > 0 && (
                      <div>
                        <div className="text-xs opacity-80">Obrázků</div>
                        <div className="text-2xl font-bold">{stats.imageCount}</div>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={exportAllSlides}
                    className="px-4 py-2 bg-ant-green text-black font-bold rounded-lg hover:bg-ant-green/80 transition-colors text-sm"
                  >
                    📄 Stáhnout vše
                  </button>
                </div>
              </motion.div>
            )}

            {/* Current slide info */}
            <div className="mb-4 p-3 bg-white/5 border border-white/20 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-white/60 mb-1">Aktuální slajd</div>
                  <div className="text-lg font-bold text-white">#{currentSlide + 1}</div>
                </div>
                {(currentPrompt || currentImages.length > 0) && (
                  <button
                    onClick={clearCurrentSlide}
                    className="text-xs px-2 py-1 bg-red-500/20 text-red-400 border border-red-500/40 rounded hover:bg-red-500/30 transition-colors"
                  >
                    Smazat
                  </button>
                )}
              </div>
            </div>

            {/* Prompt textarea */}
            <div className="mb-4">
              <label className="text-xs text-white/60 mb-2 block">
                Co chceš změnit na tomto slajdu:
              </label>
              <textarea
                value={currentPrompt}
                onChange={(e) => setCurrentPrompt(e.target.value)}
                placeholder="Napiš změny pro tento slajd...&#10;&#10;Např: 'Změň barvu na modrou' nebo 'Přidej fotku týmu vlevo'"
                className="w-full h-32 bg-white/5 text-white text-sm p-3 rounded-lg border border-white/10 focus:border-ant-green focus:outline-none resize-none"
                spellCheck="false"
              />
              <div className="text-xs text-white/40 mt-1">
                💡 Automaticky se uloží když přepneš na jiný slajd
              </div>
            </div>

            {/* Image upload */}
            <div className="mb-4">
              <label className="text-xs text-white/60 mb-2 block">
                Přiložené obrázky (volitelné):
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full px-4 py-3 bg-white/5 border-2 border-dashed border-white/20 rounded-lg hover:bg-white/10 hover:border-ant-green/40 transition-colors text-white/60 hover:text-ant-green flex items-center justify-center gap-2"
              >
                <span className="text-xl">📎</span>
                <span className="text-sm font-medium">Nahrát obrázky</span>
              </button>
            </div>

            {/* Image previews */}
            {currentImages.length > 0 && (
              <div className="mb-4 space-y-2">
                {currentImages.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-2 p-2 bg-white/5 rounded-lg border border-white/10"
                  >
                    <img
                      src={img.data}
                      alt={img.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-white/80 truncate">{img.name}</div>
                      <div className="text-xs text-white/40">
                        {(img.size / 1024).toFixed(0)} KB
                      </div>
                    </div>
                    <button
                      onClick={() => removeImage(index)}
                      className="px-2 py-1 text-xs bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors"
                    >
                      ✕
                    </button>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Overview of all slides */}
            <div className="flex-1 overflow-hidden flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-white/80">
                  Přehled všech slidů ({stats.slideCount}/{totalSlides})
                </h4>
                {stats.slideCount > 0 && (
                  <button
                    onClick={clearAllSlides}
                    className="text-xs px-2 py-1 bg-white/10 text-white/60 rounded hover:bg-white/20 transition-colors"
                  >
                    Smazat vše
                  </button>
                )}
              </div>

              <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                {Object.keys(slidePrompts).length === 0 ? (
                  <div className="text-center py-8 text-white/30 text-sm">
                    Zatím žádné prompty
                  </div>
                ) : (
                  Object.keys(slidePrompts)
                    .map(Number)
                    .sort((a, b) => a - b)
                    .map(slideNum => {
                      const data = slidePrompts[slideNum];
                      const isCurrentSlide = slideNum === currentSlide + 1;

                      return (
                        <motion.div
                          key={slideNum}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={`p-3 rounded-lg border transition-colors ${
                            isCurrentSlide
                              ? 'bg-ant-green/10 border-ant-green/40'
                              : 'bg-white/5 border-white/10'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <span className={`text-xs font-mono font-bold ${
                              isCurrentSlide ? 'text-ant-green' : 'text-white/60'
                            }`}>
                              Slide {slideNum}
                              {isCurrentSlide && ' (aktuální)'}
                            </span>
                            {data.images && data.images.length > 0 && (
                              <span className="text-xs text-white/40">
                                📎 {data.images.length}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-white/70 leading-relaxed line-clamp-2">
                            {data.prompt}
                          </div>
                        </motion.div>
                      );
                    })
                )}
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
              <div className="text-xs text-white/60 leading-relaxed">
                <div className="font-semibold mb-2 text-white/80">📝 Jak to použít:</div>
                <ol className="list-decimal list-inside space-y-1 ml-2">
                  <li>Procházej slajdy šipkami ← →</li>
                  <li>Ke každému napiš změny</li>
                  <li>Volitelně přilož obrázky 📎</li>
                  <li>Prompty se automaticky ukládají</li>
                  <li>Klikni "📄 Stáhnout vše"</li>
                  <li>Nahraj soubor Claude → Hotovo! ✨</li>
                </ol>
              </div>
            </div>
          </div>

          <style jsx>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(255, 255, 255, 0.05);
              border-radius: 3px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(255, 255, 255, 0.2);
              border-radius: 3px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: rgba(255, 255, 255, 0.3);
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
