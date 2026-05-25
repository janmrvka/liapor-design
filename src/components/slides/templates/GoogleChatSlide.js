'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';

/**
 * Typewriter effect component - simulates real-time typing
 */
function TypewriterText({ text, delay = 0, speed = 30 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsTyping(true);
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setIsTyping(false);
          // Hide cursor after typing is done
          setTimeout(() => setShowCursor(false), 1000);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, delay, speed]);

  return (
    <span>
      {displayedText}
      {showCursor && (
        <motion.span
          className="inline-block w-0.5 h-5 bg-white/70 ml-0.5 align-middle"
          animate={{ opacity: isTyping ? 1 : [1, 0] }}
          transition={{ duration: 0.5, repeat: isTyping ? 0 : Infinity }}
        />
      )}
    </span>
  );
}

/**
 * Google Chat Slide Template
 * Simulates a Google Chat conversation to demonstrate WOW moments sharing
 * Features realistic typing animation
 */
export default function GoogleChatSlide({ content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    textColor = 'text-white',
    layout = 'full', // 'full' or 'split'
  } = config;

  const {
    spaceName = 'WOW Checker',
    messages = [],
    pinnedQuestions = [],
    footer,
    typingEffect = true,
    title,
    subtitle,
  } = content;

  // Split layout - main title on left, chat preview on right
  if (layout === 'split') {
    return (
      <div className={`min-h-screen grid grid-cols-1 lg:grid-cols-2 ${backgroundColor} overflow-hidden`}>
        {/* Main content side */}
        <div className="flex items-center justify-center px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
          <div className="max-w-xl w-full text-center lg:text-left">
            {title && (
              <FadeIn delay={0.2}>
                <h1 className={`text-5xl md:text-7xl lg:text-8xl font-black ${textColor} mb-6 md:mb-8`}>
                  {title}
                </h1>
              </FadeIn>
            )}
            {subtitle && (
              <FadeIn delay={0.5}>
                <p className={`text-xl md:text-2xl lg:text-3xl ${textColor} opacity-70 font-medium`}>
                  {subtitle}
                </p>
              </FadeIn>
            )}
            {/* Pinned Questions below subtitle */}
            {pinnedQuestions && pinnedQuestions.length > 0 && (
              <FadeIn delay={0.8}>
                <div className="mt-8 md:mt-12 flex flex-wrap gap-3 justify-center lg:justify-start">
                  {pinnedQuestions.map((question, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.15, type: 'spring' }}
                      className="bg-ant-green/20 border border-ant-green/40 rounded-full px-4 md:px-5 py-2 md:py-2.5"
                    >
                      <span className="text-ant-green text-sm md:text-base font-medium">{question}</span>
                    </motion.div>
                  ))}
                </div>
              </FadeIn>
            )}
          </div>
        </div>

        {/* Chat preview side - decorative */}
        <div className="hidden lg:flex items-center justify-center px-8 py-12 relative">
          {/* Background glow */}
          <motion.div
            className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
            style={{ background: '#5bffc4' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Mini chat window - scaled down preview */}
          <motion.div
            className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full max-w-md"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Chat Header */}
            <div className="bg-[#2d2d2d] px-4 py-3 flex items-center gap-3 border-b border-white/10">
              <div className="w-8 h-8 rounded-lg bg-ant-green flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-sm truncate">{spaceName}</h3>
                <p className="text-white/50 text-xs">Google Chat • (ant)</p>
              </div>
            </div>

            {/* Chat Messages - simplified preview */}
            <div className="px-4 py-4 space-y-3 min-h-[200px]">
              {messages.slice(0, 1).map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex gap-2"
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-xs"
                    style={{ backgroundColor: message.avatarColor || '#8b5cf6' }}
                  >
                    {message.initials || 'U'}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-white font-medium text-xs">{message.author}</span>
                      <span className="text-white/40 text-xs">{message.time}</span>
                    </div>
                    <div className="text-white/80 text-xs leading-relaxed whitespace-pre-line line-clamp-6">
                      {typingEffect ? (
                        <TypewriterText text={message.text} delay={1000} speed={20} />
                      ) : (
                        message.text
                      )}
                    </div>
                    {/* Reactions */}
                    {message.reactions && message.reactions.length > 0 && (
                      <div className="flex gap-1.5 mt-2">
                        {message.reactions.map((reaction, rIndex) => (
                          <motion.div
                            key={rIndex}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: typingEffect ? 6 + rIndex * 0.1 : 1.5 + rIndex * 0.1, type: 'spring' }}
                            className="bg-white/10 rounded-full px-1.5 py-0.5 flex items-center gap-0.5 text-xs"
                          >
                            <span>{reaction.emoji}</span>
                            <span className="text-white/60 text-xs">{reaction.count}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Message Input */}
            <div className="px-4 py-3 border-t border-white/10">
              <div className="bg-[#2d2d2d] rounded-full px-3 py-2 flex items-center gap-2">
                <span className="text-white/40 text-xs flex-1">Sdílet WOW moment...</span>
                <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Full layout (original)
  return (
    <div className={`min-h-screen flex items-center justify-center ${backgroundColor} px-4 md:px-8 lg:px-16 py-8 md:py-12 lg:py-16 pb-24 relative overflow-hidden`}>
      {/* Background glow effect */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ background: '#5bffc4' }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="w-full max-w-5xl relative z-10">
        {/* Google Chat Window */}
        <FadeIn delay={0.2}>
          <motion.div
            className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Chat Header */}
            <div className="bg-[#2d2d2d] px-4 md:px-6 py-3 md:py-4 flex items-center gap-3 border-b border-white/10">
              {/* Space Icon */}
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-ant-green flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 md:w-6 md:h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              {/* Space Name */}
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-base md:text-lg truncate">{spaceName}</h3>
                <p className="text-white/50 text-xs md:text-sm">Google Chat • (ant)</p>
              </div>
              {/* Header Icons */}
              <div className="flex gap-2 text-white/40">
                <div className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Chat Messages Area */}
            <div className="px-4 md:px-6 py-4 md:py-6 space-y-4 md:space-y-6 min-h-[300px] md:min-h-[400px]">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                  className="flex gap-3"
                >
                  {/* Avatar */}
                  <div
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm md:text-base"
                    style={{ backgroundColor: message.avatarColor || '#8b5cf6' }}
                  >
                    {message.initials || 'U'}
                  </div>
                  {/* Message Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-white font-medium text-sm md:text-base">{message.author}</span>
                      <span className="text-white/40 text-xs">{message.time}</span>
                    </div>
                    <div className="text-white/90 text-sm md:text-base leading-relaxed whitespace-pre-line">
                      {typingEffect ? (
                        <TypewriterText
                          text={message.text}
                          delay={600 + index * 200}
                          speed={25}
                        />
                      ) : (
                        message.text
                      )}
                    </div>
                    {/* Reactions - appear after typing is done */}
                    {message.reactions && message.reactions.length > 0 && (
                      <div className="flex gap-2 mt-2">
                        {message.reactions.map((reaction, rIndex) => (
                          <motion.div
                            key={rIndex}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                              delay: typingEffect
                                ? 0.6 + (message.text.length * 0.025) + 0.5 + rIndex * 0.15
                                : 0.8 + index * 0.3 + rIndex * 0.1,
                              type: 'spring',
                              stiffness: 400,
                              damping: 15
                            }}
                            className="bg-white/10 rounded-full px-2 py-1 flex items-center gap-1 text-sm"
                          >
                            <span>{reaction.emoji}</span>
                            <span className="text-white/60 text-xs">{reaction.count}</span>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Pinned Questions / WOW Checker criteria - inside chat window */}
            {pinnedQuestions && pinnedQuestions.length > 0 && (
              <FadeIn delay={typingEffect ? 8 : 1.2}>
                <div className="px-4 md:px-6 py-3 md:py-4 border-t border-white/10">
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {pinnedQuestions.map((question, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (typingEffect ? 8.2 : 1.4) + index * 0.15, type: 'spring' }}
                        className="bg-ant-green/20 border border-ant-green/40 rounded-full px-3 md:px-4 py-1.5 md:py-2"
                      >
                        <span className="text-ant-green text-xs md:text-sm font-medium">{question}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Message Input (fake) with footer text */}
            <div className="px-4 md:px-6 py-3 md:py-4 border-t border-white/10">
              <div className="bg-[#2d2d2d] rounded-full px-4 py-2 md:py-3 flex items-center gap-3">
                <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white/40 text-sm md:text-base flex-1">{footer || 'Sdílet svůj WOW moment...'}</span>
                <svg className="w-5 h-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </div>
  );
}
