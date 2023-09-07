/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1f1f1f',
        secondary: '#c5947c',
        tertiary: '#aadafa',
        complementary1: '#6190c2',
        complementary2: '#71c6b1',
        complementary3: '#9dc8e5',
        complementary4: '#dcdcaf',
      },
      animation: {
        'slideFadeInRight-1': 'slideFadeInRight .4s ease-in-out forwards',
        'slideFadeInRight-2': 'slideFadeInRight .6s ease-in-out forwards',
        'slideFadeInRight-3': 'slideFadeInRight .8s ease-in-out forwards',
        'fadeIn-.4': 'fadeIn .4s ease-in-out',
        'fadeIn-1': 'fadeIn 1s ease-in-out',
        'fadeIn-3': 'fadeIn 8s ease-in-out',
      },
      keyframes: {
        slideFadeInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
