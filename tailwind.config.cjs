/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif',
      },
      colors: {
        gray: {
          100: '#F9F9F9',
          200: '#dcdcdc',
          500: '#898989',
          600: '#5a5a5a',
          700: '#202020',
        },
        purple: {
          700: '#775da6',
          100: '#EFECF4',
        },
        blue: {
          700: '#70b6c1',
          500: '#abdfe7',
        },
        yellow: {
          700: '#f3cc5c',
        },
        pink: {
          500: '#ffb1b7',
        },
        red: {
          500: '#f9837c',
        },
      },
    },
  },
  plugins: [],
}
