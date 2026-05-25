'use client';

import { useEffect } from 'react';
import { SLIDES } from '@/lib/content/slides';

/**
 * MediaPreloader - Preloads images and videos from adjacent slides
 * Improves perceived performance by loading next/previous slide media in background
 */
export default function MediaPreloader({ currentSlide }) {
  useEffect(() => {
    // Get adjacent slides (previous, current, and next for better preloading)
    const adjacentIndices = [
      currentSlide - 1,
      currentSlide,
      currentSlide + 1,
      currentSlide + 2, // Preload one more ahead
    ].filter(index => index >= 0 && index < SLIDES.length);

    const mediaToPreload = [];

    // Collect all media URLs from adjacent slides
    adjacentIndices.forEach(index => {
      const slide = SLIDES[index];
      if (!slide?.content) return;

      const content = slide.content;

      // Single image
      if (content.image) {
        mediaToPreload.push({ type: 'image', url: content.image });
      }

      // Image array (images field)
      if (Array.isArray(content.images)) {
        content.images.forEach(img => {
          mediaToPreload.push({ type: 'image', url: img });
        });
      }

      // Single video
      if (content.video) {
        mediaToPreload.push({ type: 'video', url: content.video });
      }

      // Video array (videos field)
      if (Array.isArray(content.videos)) {
        content.videos.forEach(vid => {
          mediaToPreload.push({ type: 'video', url: vid });
        });
      }

      // Background image from config
      if (slide.config?.backgroundImage) {
        mediaToPreload.push({ type: 'image', url: slide.config.backgroundImage });
      }

      // Banner images (BeforeAfterSlide)
      if (content.beforeImage) {
        mediaToPreload.push({ type: 'image', url: content.beforeImage });
      }
      if (content.afterImage) {
        mediaToPreload.push({ type: 'image', url: content.afterImage });
      }

      // Logo images
      if (content.titleLogo) {
        mediaToPreload.push({ type: 'image', url: content.titleLogo });
      }

      // CheckerSlide items
      if (Array.isArray(content.items)) {
        content.items.forEach(item => {
          if (item.image) {
            mediaToPreload.push({ type: 'image', url: item.image });
          }
        });
      }

      // LogoGridSlide logos
      if (Array.isArray(content.logos)) {
        content.logos.forEach(logo => {
          if (typeof logo === 'string') {
            mediaToPreload.push({ type: 'image', url: logo });
          } else if (logo?.image) {
            mediaToPreload.push({ type: 'image', url: logo.image });
          }
        });
      }
    });

    // Preload images using link preload for better performance
    const imagePreloadLinks = [];
    mediaToPreload
      .filter(media => media.type === 'image')
      .forEach(media => {
        // Check if preload link already exists
        const existingLink = document.querySelector(`link[rel="preload"][href="${media.url}"]`);
        if (!existingLink) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = media.url;
          // Use fetchpriority for current and next slide
          if (adjacentIndices.indexOf(currentSlide) !== -1 || adjacentIndices.indexOf(currentSlide + 1) !== -1) {
            link.fetchPriority = 'high';
          }
          document.head.appendChild(link);
          imagePreloadLinks.push(link);
        }
      });

    // Preload videos using link preload
    const videoPreloadLinks = [];
    mediaToPreload
      .filter(media => media.type === 'video')
      .forEach(media => {
        // Check if preload link already exists
        const existingLink = document.querySelector(`link[rel="preload"][href="${media.url}"]`);
        if (!existingLink) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'video';
          link.href = media.url;
          document.head.appendChild(link);
          videoPreloadLinks.push(link);
        }
      });

    // Cleanup function - remove old preload links
    return () => {
      imagePreloadLinks.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
      videoPreloadLinks.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [currentSlide]);

  // This component renders nothing
  return null;
}
