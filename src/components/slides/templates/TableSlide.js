'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';

export default function TableSlide({ content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    textColor = 'text-white',
  } = config;

  const { title, subtitle, columns, rows, footer } = content;

  return (
    <div className={`min-h-screen flex flex-col justify-center px-8 md:px-16 py-10 ${backgroundColor}`}>
      {title && (
        <FadeIn delay={0.1}>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${textColor} mb-2`}>
            {title}
          </h2>
        </FadeIn>
      )}
      {subtitle && (
        <FadeIn delay={0.2}>
          <p className={`text-lg md:text-xl ${textColor} opacity-60 mb-6`}>
            {subtitle}
          </p>
        </FadeIn>
      )}

      <FadeIn delay={0.3}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm md:text-base" style={{ tableLayout: 'fixed' }}>
            <colgroup>
              <col style={{ width: '3%' }} />
              <col style={{ width: '40%' }} />
              <col style={{ width: '42%' }} />
              <col style={{ width: '15%' }} />
            </colgroup>
            <thead>
              <tr>
                {columns.map((col, i) => (
                  <th
                    key={i}
                    className={`text-left py-2 px-2 border-b border-white/20 ${textColor} opacity-50 font-medium uppercase tracking-wider text-xs`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <motion.tr
                  key={ri}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + ri * 0.04, duration: 0.3 }}
                  className="border-b border-white/10 hover:bg-white/5 transition-colors"
                >
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`py-2 px-2 ${textColor} truncate ${ci === 0 ? 'font-semibold text-ant-green' : ci === row.length - 1 ? 'text-right font-medium opacity-80' : 'opacity-70'}`}
                    >
                      {cell}
                    </td>
                  ))}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </FadeIn>

      {footer && (
        <FadeIn delay={0.8}>
          <p className={`mt-6 text-lg md:text-xl font-bold ${textColor} border-t border-white/20 pt-4`}>
            → {footer}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
