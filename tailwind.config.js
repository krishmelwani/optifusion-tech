/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#d1c6ad',
          100: '#d1c6ad',
          200: '#bbada0',
          300: '#a1869e',
          400: '#797596',
          500: '#525b7c',
          600: '#2b4162',
          700: '#2b4162',
          800: '#2b4162',
          900: '#2b4162',
        },
        secondary: {
          50: '#d1c6ad',
          100: '#d1c6ad',
          200: '#bbada0',
          300: '#a1869e',
          400: '#797596',
          500: '#525b7c',
          600: '#2b4162',
          700: '#2b4162',
          800: '#2b4162',
          900: '#2b4162',
        },
        cream: '#F2EFE7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'slide-left': 'slideLeft 25s linear infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
