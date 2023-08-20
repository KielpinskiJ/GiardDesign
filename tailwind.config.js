/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        beige: {
          200: '#DCC1AB',
        },
        'custom-green': '#1B5B31',
      },
    },
  },
  plugins: [],
};