import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './sanity/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-brand-blue/10',
    'bg-brand-purple/10',
    'bg-brand-cyan/10',
    'text-brand-blue',
    'text-brand-purple',
    'text-brand-cyan',
    'shadow-glow-blue',
    'shadow-glow-purple',
    'shadow-glow-cyan',
    'hover:shadow-glow-blue',
    'hover:shadow-glow-purple',
    'hover:shadow-glow-cyan',
    'border-brand-blue',
    'border-brand-purple',
    'border-brand-cyan',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563FF',
          purple: '#7C3AED',
          cyan: '#06B6D4',
        },
        navy: {
          50: '#F5F7FF',
          100: '#E8ECFA',
          200: '#CBD3ED',
          300: '#A5B2D8',
          400: '#7A89B5',
          500: '#59678F',
          600: '#414C70',
          700: '#303851',
          800: '#202638',
          900: '#131722',
          950: '#0A0A12',
          DEFAULT: '#0A0A12',
        },
        charcoal: {
          50: '#F7F8FA',
          100: '#ECEEF2',
          200: '#D5D9E2',
          300: '#B2B8C5',
          400: '#8A93A3',
          500: '#697283',
          600: '#515968',
          700: '#3E4450',
          800: '#292E37',
          900: '#191D24',
          950: '#0E1015',
        },
      },
      fontFamily: {
        sans: [
          'var(--font-inter)',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
        ],
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        'glow-blue': '0 0 48px rgba(37, 99, 255, 0.28)',
        'glow-purple': '0 0 48px rgba(124, 58, 237, 0.28)',
        'glow-cyan': '0 0 48px rgba(6, 182, 212, 0.28)',
      },
      backgroundImage: {
        aurora:
          'radial-gradient(circle at 15% 20%, rgba(37, 99, 255, 0.28), transparent 34%), radial-gradient(circle at 82% 18%, rgba(124, 58, 237, 0.24), transparent 32%), radial-gradient(circle at 55% 82%, rgba(6, 182, 212, 0.2), transparent 38%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      spacing: {
        section: '8rem',
      },
    },
  },
  plugins: [],
};

export default config;
