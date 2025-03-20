import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'neo-black': '#000000',
        'neo-white': '#FFFFFF',
        'neo-yellow': '#FFF3C4',
        'nihil': {
          'primary': '#FF00FF',
          'secondary': '#00FF00',
          'accent': '#FF0000',
          'dark': '#000000',
          'light': '#FFFFFF',
        },
        'social': {
          'instagram': '#E4405F',
          'x': '#000000',
          'github': '#171515',
          'linkedin': '#0A66C2',
        }
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-hover': '6px 6px 0px 0px rgba(0,0,0,1)',
        'nihil': '8px 8px 0 0 #000',
        'nihil-sm': '4px 4px 0 0 #000',
        'nihil-lg': '12px 12px 0 0 #000',
        'nihil-animate': 'var(--shadow-x) var(--shadow-y) 0 0 #000',
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'glitch-fast': 'glitch 0.5s infinite',
        'glitch-slow': 'glitch 2s infinite',
        'skew': 'skew 2s infinite',
        'skew-fast': 'skew 1s infinite',
        'float': 'float 3s ease-in-out infinite',
        'chaos': 'chaos 5s linear infinite',
        'shadow-dance': 'shadowDance 3s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-5px, 2px)' },
          '66%': { transform: 'translate(5px, -2px)' },
        },
        skew: {
          '0%, 100%': { transform: 'skewX(0)' },
          '50%': { transform: 'skewX(-10deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        chaos: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(90deg) scale(1.2)' },
          '50%': { transform: 'rotate(180deg) scale(0.8)' },
          '75%': { transform: 'rotate(270deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        shadowDance: {
          '0%': { '--shadow-x': '8px', '--shadow-y': '8px' },
          '25%': { '--shadow-x': '12px', '--shadow-y': '4px' },
          '50%': { '--shadow-x': '4px', '--shadow-y': '12px' },
          '75%': { '--shadow-x': '12px', '--shadow-y': '12px' },
          '100%': { '--shadow-x': '8px', '--shadow-y': '8px' },
        }
      },
    },
  },
  plugins: [],
}
export default config
