/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      screens: {
        '2xl': { max: '1535px' },
        // => @media (max-width: 1535px) { ... }

        xl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        lg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        md: { max: '825px' },
        // => @media (max-width: 767px) { ... }

        sm: { max: '639px' },

        xs: { max: '425px' },
        // => @media (max-width: 375px) { ... }
      },
      colors: {
        // Using modern `rgb`
        background: '#19191C',
        card: '#303033',
        greyText: '#BBBBBB',
      },
    },
  },
  plugins: [],
};
