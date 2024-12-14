/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
      },
      fontFamily: {
        harry: ['Harry Potter', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        cormorant: ['Cormorant', 'serif'],
      },
    },
  },
  plugins: [],
};