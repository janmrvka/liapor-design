/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx}',
    './src/components/**/*.{js,jsx}',
    './src/app/**/*.{js,jsx}',
    './src/lib/**/*.{js,jsx}',
  ],
  safelist: [
    // Background colors used in slide configs
    'bg-ant-brown',
    'bg-ant-purple',
    'bg-ant-yellow',
    'bg-ant-pink',
    'bg-ant-blue',
    'bg-ant-green',
    'bg-ant-dark-gray',
    'bg-black',
    'bg-white',
    // Text colors used in slide configs
    'text-black',
    'text-white',
    'text-ant-green',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'ant-green': '#5bffc4',
        'ant-black': '#000000',
        'ant-light-gray': '#e7e8e9',
        'ant-dark-gray': '#aeb1b7',

        // Secondary colors
        'ant-brown': '#ffe4c1',
        'ant-purple': '#dad4ff',
        'ant-yellow': '#fffd92',
        'ant-pink': '#ffe2eb',
        'ant-blue': '#d7edff',

        // Gray palette (extended)
        'ant-gray-900': '#161616',
        'ant-gray-800': '#2d2d2d',
        'ant-gray-700': '#4d4d4d',
        'ant-gray-600': '#6d6d6d',
        'ant-gray-500': '#8d8d8d',
        'ant-gray-400': '#aeb1b7',
        'ant-gray-300': '#c7c8c9',
        'ant-gray-200': '#e7e8e9',
        'ant-gray-100': '#f5f5f5',
        'ant-gray-50': '#fafafa',
      },
      fontFamily: {
        sans: ['Aktiv Grotesk Ex', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        // Presentation-specific sizes
        'hero': ['140px', { lineHeight: '0.85', fontWeight: '700' }],
        'display': ['100px', { lineHeight: '0.9', fontWeight: '700' }],
        'statement': ['64px', { lineHeight: '1.1', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
