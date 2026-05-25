'use client';

import FadeIn from '@/components/animations/FadeIn';

/**
 * SlidoSlide - Embeds Slido Q&A for live audience questions
 * Responsive: Mobile-first design with adaptive spacing and iframe height
 */
export default function SlidoSlide({ content, config = {} }) {
  const {
    backgroundColor = 'bg-white',
    textColor = 'text-black',
  } = config;

  const { eventCode, slidoUrl, title = 'Dotazy' } = content;

  // Use provided URL or construct from event code
  const embedUrl = slidoUrl || `https://app.sli.do/event/${eventCode}/live/questions`;

  return (
    <div
      className={`min-h-screen flex flex-col ${backgroundColor} px-4 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 pb-24 relative`}
    >
      <div className="relative z-10 flex flex-col h-full max-w-7xl mx-auto w-full">
        {/* Title - responsive */}
        {title && (
          <FadeIn delay={0.2}>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-4 md:mb-6 lg:mb-8`}>
              {title}
            </h2>
          </FadeIn>
        )}

        {/* Slido iframe - responsive height */}
        <FadeIn delay={0.4} className="flex-1 min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh]">
          <iframe
            src={embedUrl}
            className="w-full h-full border-0 rounded-lg"
            style={{
              minHeight: '60vh',
            }}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="Slido Q&A"
          />
        </FadeIn>
      </div>
    </div>
  );
}
