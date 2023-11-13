import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
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
