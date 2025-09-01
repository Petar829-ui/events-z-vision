/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-lime': '#c1ff72',
        'brand-blue': '#075994',
        'brand-green': '#2f492f',
      }
    },
  },
  plugins: [],
};
