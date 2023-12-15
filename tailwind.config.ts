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
        'blob-1-anim': {
          '0%': {
            transform: 'translateX(-50%) translateY(0)'
          },
          '14%': {
            transform: 'translateX(-50%) translateY(-8px)'
          },
          '24%': {
            transform: 'translateX(-50%) translateY(0)'
          },
          '100%': {
            transform: 'translateX(-50%) translateY(0)'
          }
        },
        'blob-2-anim': {
          '0%': {
            transform: 'scale(1) translate(-50%, 10px)'
          },
          '30%': {
            transform: 'scale(1) translate(-50%, 10px)'
          },
          '70%': {
            transform: 'scale(1) translate(-50%, 10px)'
          },
          '95%': {
            transform: 'scale(1) translate(-50%, 20px)'
          },
          '100%': {
            transform: 'scale(1) translate(-50%, 10px)'
          }
        },
        scrolly: {
          '0%': {
            transform: 'translate3d(0, -150%, 0) rotateX(90deg) scale(0.5) skewX(3deg)'
          },
          '30%': {
            transform: 'translate3d(0, 0, 0) rotateX(0deg) scale(1) skewX(0deg)'
          },
          '70%': {
            transform: 'translate3d(0, 0, 0) rotateX(0deg) scale(1) skewX(0deg)'
          },
          '95%': {
            transform: 'translate3d(0, 50%, 0) rotateX(-90deg) scale(0.5) skewX(-3deg)'
          },
          '100%': {
            transform: 'translate3d(0, 50%, 0) rotateX(-90deg) scale(0.5) skewX(-3deg)'
          }
        }
      }
    },
    animation: {
      blobOne: 'blob-1-anim 3s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite',
      blobTwo: 'blob-2-anim 3s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite',
      scrollY: 'scrolly 3s cubic-bezier(0.770, 0.000, 0.175, 1.000) forwards infinite'
    }
  },
  plugins: [require('@xpd/tailwind-3dtransforms')]
};
export default config;
