/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // backgroundImage: {
      //   'hero-image': './src/images/hero_test.jpeg',
      // },
      colors: {
        primary: '#50C5E1',
        secondary: '#4DA8F7',
        tertiary: '#4A76ED',
        complementary1: '#4DF7EC',
        complementary2: '#4AEDB4',
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
