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

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['"playfair Display"', 'serif']
      },
    },
  },
  plugins: [],
};
