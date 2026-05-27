'use client';

import { useState, useEffect, useRef } from 'react';
import SlideRenderer from './SlideRenderer';
import Navigation from './Navigation';
import SlideMenu from './SlideMenu';
import SpeakerNotes from './SpeakerNotes';
import LivePrompt from './LivePrompt';
import SlideTransition from '@/components/animations/SlideTransition';
import QuickActionsPanel from '@/components/edit/QuickActionsPanel';
import MediaPreloader from './MediaPreloader';
import { SLIDES } from '@/lib/content/slides';
import { useFullscreen } from '@/hooks/useFullscreen';
import { getAgency } from '@/lib/config/client';
import { useEditMode } from '@/contexts/EditModeContext';

/**
 * PresentationContainer - Core orchestrator for the presentation
 * Manages slide state, navigation, and renders current slide
 * Keyboard shortcuts:
 * - Arrow keys: Navigate slides
 * - Cmd+F (Ctrl+F): Fullscreen toggle
 * - Cmd+K (Ctrl+K): Speaker notes toggle
 * - Cmd+P (Ctrl+P): Live prompt toggle (dev mode)
 * - Cmd+/ (Ctrl+/): Keyboard shortcuts help
 * Touch gestures:
 * - Swipe left: Next slide
 * - Swipe right: Previous slide
 */
export default function PresentationContainer() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const totalSlides = SLIDES.length;
  const { updateSlideContent } = useEditMode();

  // Touch handling for swipe navigation
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Enable fullscreen toggle with Cmd+F
  useFullscreen();

  // Initialize slide from URL parameter on mount
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slideParam = params.get('slide');
    if (slideParam !== null) {
      const slideIndex = parseInt(slideParam, 10) - 1;
      if (!isNaN(slideIndex) && slideIndex >= 0 && slideIndex < totalSlides) {
        setCurrentSlide(slideIndex);
      }
    }
  }, []); // Run only on mount

  // Handle Cmd+K and Cmd+P keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Cmd+K or Ctrl+K - Toggle speaker notes
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setShowNotes(prev => !prev);
      }
      // Cmd+P or Ctrl+P - Toggle live prompt
      else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'p') {
        e.preventDefault();
        setShowPrompt(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  // Update URL when slide changes
  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('slide', currentSlide + 1);
    window.history.replaceState(null, '', url.toString());
  }, [currentSlide]);

  // Navigate to specific slide (with bounds checking)
  const goToSlide = (index) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  // Touch event handlers for swipe navigation
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Minimum distance for swipe detection (px)

    // Swipe left (next slide)
    if (distance > minSwipeDistance) {
      goToSlide(currentSlide + 1);
    }
    // Swipe right (previous slide)
    else if (distance < -minSwipeDistance) {
      goToSlide(currentSlide - 1);
    }

    // Reset touch positions
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Get current slide data
  const currentSlideData = SLIDES[currentSlide];

  // Determine logo color based on slide background
  const isDarkBackground = (bg) => {
    const darkBackgrounds = ['bg-black', 'bg-ant-dark-gray', 'bg-ant-gray-900', 'bg-ant-gray-800'];
    return darkBackgrounds.some(dark => bg?.includes(dark));
  };

  const agency = getAgency();
  const backgroundColor = currentSlideData?.config?.backgroundColor || 'bg-white';
  const logoSrc = isDarkBackground(backgroundColor)
    ? agency.logo.dark
    : agency.logo.light;

  return (
    <div
      className="presentation-wrapper"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Keyboard navigation handler */}
      <Navigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNavigate={goToSlide}
      />

      {/* Media Preloader - loads adjacent slides in background */}
      <MediaPreloader currentSlide={currentSlide} />

      {/* Main slide content with transition animation */}
      <SlideTransition slideId={currentSlideData.id}>
        <SlideRenderer slide={currentSlideData} />
      </SlideTransition>

      {/* Slide menu with navigation */}
      <SlideMenu
        currentSlide={currentSlide}
        goToSlide={goToSlide}
      />

      {/* Speaker Notes (toggle with Cmd+K) */}
      <SpeakerNotes
        currentSlide={currentSlide}
        notes={currentSlideData?.notes || ''}
        isVisible={showNotes}
        onToggle={() => setShowNotes(!showNotes)}
      />

      {/* Live Prompt - Development Tool (toggle with Cmd+P) */}
      <LivePrompt
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        isVisible={showPrompt}
        onToggle={() => setShowPrompt(!showPrompt)}
      />

      {/* Quick Actions Panel (Edit Mode) */}
      <QuickActionsPanel
        slideId={currentSlideData?.id}
        slideIndex={currentSlide}
        totalSlides={totalSlides}
        onAction={(action, value) => {
          if (action === 'changeBackground') {
            updateSlideContent(currentSlideData.id, 'config.backgroundColor', value);
          }
          // Other actions will be handled via API
        }}
      />
    </div>
  );
}
