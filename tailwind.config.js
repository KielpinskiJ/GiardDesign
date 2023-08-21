/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'custom-beige': '#DCC1AB',
        'custom-green': '#1B5B31',
        'custom-grey': '#F5F0EC',
        'custom-black': '#111',
      },
      height: {
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh',
      },
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'hd': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'fullhd': '1920px',
      // => @media (min-width: 1920px) { ... }

      '2k': '2560px',
      // => @media (min-width: 2560px) { ... }

      '4k': '3840px',
      // => @media (min-width: 3840px) { ... }
    }
  },
  plugins: [],
};