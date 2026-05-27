'use client';

import { motion } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';

export default function TableSlide({ content, config = {} }) {
  const {
    backgroundColor = 'bg-black',
    textColor = 'text-white',
  } = config;

  const { title, subtitle, columns, rows, footer, link } = content;

  // Column widths by count
  const colWidths = {
    3: ['25%', '25%', '50%'],
    4: ['3%', '40%', '42%', '15%'],
  };
  const widths = colWidths[columns?.length] || null;

  return (
    <div className={`min-h-screen flex flex-col justify-center px-16 md:px-24 py-10 ${backgroundColor}`}>
      {title && (
        <FadeIn delay={0.1}>
          <h2 className={`text-5xl md:text-7xl lg:text-8xl font-bold ${textColor} mb-4`}>
            {title}
          </h2>
          <div className="w-16 md:w-24 lg:w-32 h-0.5 md:h-1 bg-ant-green mb-6 md:mb-8 rounded-full" />
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
          <table className="w-full border-collapse text-base md:text-lg" style={{ tableLayout: 'fixed' }}>
            {widths && (
              <colgroup>
                {widths.map((w, i) => <col key={i} style={{ width: w }} />)}
              </colgroup>
            )}
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
                      className={`py-2 px-2 ${textColor} ${ci === 0 ? 'font-semibold text-ant-green' : ci === row.length - 1 ? 'font-medium opacity-80' : 'opacity-70'}`}
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

      {link && (
        <FadeIn delay={1}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-ant-green text-sm md:text-base font-medium hover:opacity-70 transition-opacity"
          >
            ↗ {link.label}
          </a>
        </FadeIn>
      )}
    </div>
  );
}
