/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        black: '#1D1D1D',
        purple: '#6202FF',
        'light-gray': '#F9F9F9',
      },
    },
  },
  plugins: [],
}
