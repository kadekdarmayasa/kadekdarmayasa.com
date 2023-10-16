/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    container: {
      center: true,
    },
    colors: {
      black: '#1D1D1D',
    },
    extend: {
      colors: {
        purple: '#6202FF',
        'ligt-gray': '#F9F9F9',
      },
    },
  },
  plugins: [],
}
