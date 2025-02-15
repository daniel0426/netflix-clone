/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-bottom':
          'linear-gradient(to bottom, rgba(20,20,20,0) 0, rgba(20,20,20,.15) 15%,rgba(20,20,20,.35) 30%, rgba(20,20,20,.58) 45%, #141414 68%, #141414 100%)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar-hide'),
    require('tailwind-scrollbar'),
  ],
};
