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
      backgroundImage: {
        'orange-gradient':
          'linear-gradient(90deg, rgba(255, 152, 88, 0.50) 0.13%, rgba(255, 152, 88, 0.25) 52.08%, rgba(255, 152, 88, 0.50) 99.86%)',
        'purple-gradient':
          'linear-gradient(90deg, rgba(43, 59, 229, 0.50) 0.13%, rgba(43, 59, 229, 0.25) 52.08%, rgba(43, 59, 229, 0.50) 99.86%)',
      },
    },
  },
  plugins: [],
}
