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
        'shadow-glitch': 'shadowGlitch 2s infinite',
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
        },
        shadowGlitch: {
          '0%': { 
            boxShadow: '8px 8px 0 0 #000',
            transform: 'translate(0) scale(1) rotate(0deg)'
          },
          '10%': { 
            boxShadow: '20px -15px 0 0 #FF00FF, -15px 10px 0 -5px #00FF00',
            transform: 'translate(-4px, 2px) scale(1.02) rotate(1deg)'
          },
          '20%': { 
            boxShadow: '-18px 12px 0 0 #00FF00, 12px -8px 0 -5px #FF0000',
            transform: 'translate(6px, -3px) scale(0.98) rotate(-2deg)'
          },
          '30%': { 
            boxShadow: '15px -12px 0 0 #FF0000, -10px -10px 0 -5px #FF00FF',
            transform: 'translate(-3px, -4px) skew(3deg) rotate(1deg)'
          },
          '40%': { 
            boxShadow: '-25px 15px 0 0 #FF00FF, 12px 12px 0 -5px #00FF00',
            transform: 'translate(5px, 5px) scale(1.03) rotate(-3deg)'
          },
          '50%': { 
            boxShadow: '16px 16px 0 0 #00FF00, -15px -15px 0 -5px #FF0000',
            transform: 'translate(-5px, 0) skew(-3deg) rotate(2deg)'
          },
          '60%': { 
            boxShadow: '-20px -20px 0 0 #FF0000, 10px 8px 0 -5px #FF00FF',
            transform: 'translate(4px, -4px) scale(0.97) rotate(-1deg)'
          },
          '70%': { 
            boxShadow: '18px -8px 0 0 #FF00FF, -12px 15px 0 -5px #00FF00',
            transform: 'translate(-2px, 6px) skew(2deg) rotate(3deg)'
          },
          '80%': { 
            boxShadow: '-8px -18px 0 0 #00FF00, 15px -12px 0 -5px #FF0000',
            transform: 'translate(0, -6px) scale(1.01) rotate(-2deg)'
          },
          '90%': { 
            boxShadow: '15px 12px 0 0 #FF0000, -18px 8px 0 -5px #FF00FF',
            transform: 'translate(3px, 3px) skew(-2deg) rotate(1deg)'
          },
          '100%': { 
            boxShadow: '8px 8px 0 0 #000',
            transform: 'translate(0) scale(1) rotate(0deg)'
          }
        }
      },
    },
  },
  plugins: [],
}
export default config
