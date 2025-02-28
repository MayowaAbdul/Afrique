/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Plus Jakarta Sans', 'sans-serif'],
        'serif': ['Crimson Pro', 'serif'],
      },
    },
  },
  plugins: [],
};