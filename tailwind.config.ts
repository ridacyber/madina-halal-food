import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'hsl(348 78% 98%)',
          100: 'hsl(348 78% 95%)',
          200: 'hsl(348 78% 90%)',
          300: 'hsl(348 78% 80%)',
          400: 'hsl(348 78% 70%)',
          500: 'hsl(348 78% 60%)',
          600: 'hsl(348 78% 50%)',
          700: 'hsl(348 78% 40%)',
          800: 'hsl(348 78% 30%)',
          900: 'hsl(348 78% 28%)',
          950: 'hsl(348 78% 20%)',
        },
        gold: {
          50: 'hsl(42 85% 98%)',
          100: 'hsl(42 85% 95%)',
          200: 'hsl(42 85% 90%)',
          300: 'hsl(42 85% 80%)',
          400: 'hsl(42 85% 70%)',
          500: 'hsl(42 85% 60%)',
          600: 'hsl(42 85% 55%)',
          700: 'hsl(42 85% 45%)',
          800: 'hsl(42 85% 35%)',
          900: 'hsl(42 85% 25%)',
          950: 'hsl(42 85% 15%)',
        },
        accent: {
          50: 'hsl(14 90% 98%)',
          100: 'hsl(14 90% 95%)',
          200: 'hsl(14 90% 90%)',
          300: 'hsl(14 90% 80%)',
          400: 'hsl(14 90% 70%)',
          500: 'hsl(14 90% 60%)',
          600: 'hsl(14 90% 52%)',
          700: 'hsl(14 90% 45%)',
          800: 'hsl(14 90% 35%)',
          900: 'hsl(14 90% 25%)',
          950: 'hsl(14 90% 15%)',
        },
        warm: {
          50: 'hsl(30 30% 98%)',
          100: 'hsl(30 30% 95%)',
          200: 'hsl(30 30% 90%)',
          300: 'hsl(30 30% 80%)',
          400: 'hsl(30 30% 70%)',
          500: 'hsl(30 30% 60%)',
          600: 'hsl(30 30% 50%)',
          700: 'hsl(30 30% 40%)',
          800: 'hsl(30 30% 30%)',
          900: 'hsl(30 30% 20%)',
          950: 'hsl(30 30% 10%)',
        },
      },
      backgroundImage: {
        'gradient-fiery': 'linear-gradient(135deg, hsl(14 90% 52%) 0%, hsl(348 78% 28%) 50%, hsl(42 85% 55%) 100%)',
        'gradient-gold': 'linear-gradient(135deg, hsl(42 85% 55%) 0%, hsl(42 85% 45%) 100%)',
        'gradient-burgundy': 'linear-gradient(135deg, hsl(348 78% 28%) 0%, hsl(348 78% 40%) 100%)',
      },
      boxShadow: {
        'warm': '0 4px 6px -1px hsl(30 30% 20% / 0.1), 0 2px 4px -2px hsl(30 30% 20% / 0.1)',
        'gold': '0 4px 6px -1px hsl(42 85% 35% / 0.3), 0 2px 4px -2px hsl(42 85% 35% / 0.2)',
        'card': '0 10px 15px -3px hsl(30 30% 20% / 0.1), 0 4px 6px -4px hsl(30 30% 20% / 0.1)',
      },
      animation: {
        'flame-flicker': 'flame-flicker 2s ease-in-out infinite',
        'fade-up': 'fade-up 0.8s ease-out',
        'steam-rise': 'steam-rise 3s ease-in-out infinite',
      },
      keyframes: {
        'flame-flicker': {
          '0%, 100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
          '25%': { transform: 'scale(1.05) rotate(1deg)', opacity: '0.9' },
          '50%': { transform: 'scale(0.98) rotate(-1deg)', opacity: '1' },
          '75%': { transform: 'scale(1.02) rotate(0.5deg)', opacity: '0.95' },
        },
        'fade-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'steam-rise': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.3' },
          '50%': { transform: 'translateY(-10px) scale(1.1)', opacity: '0.6' },
          '100%': { transform: 'translateY(-20px) scale(0.9)', opacity: '0' },
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
