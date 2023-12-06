import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    screens: {
      xxs: '375px',
      xs: '425px',
      s: '500px',
      '3xl': '1800px',
      ...defaultTheme.screens,
      'screen-h-xs': { raw: '(min-height: 480px)' },
      'screen-h-sm': { raw: '(min-height: 600px)' },
      'screen-h-md': { raw: '(min-height: 800px)' },
      'screen-h-lg': { raw: '(min-height: 1000px)' },
      'screen-h-xl': { raw: '(min-height: 1300px)' }
    },
    extend: {
      keyframes: {
        fingerScroll: {
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(15px)'
          }
        }
      }
    },
    animation: {
      fingerScroll: 'fingerScroll 1s ease-in-out infinite'
    }
  },
  plugins: []
};
export default config;
