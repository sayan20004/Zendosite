/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#FFD60A',
        'brand-purple': '#C5B8F0',
        'brand-orange': '#FF9966',
        'brand-orange-red': '#FF4D00',
        'brand-green': '#00C566',
        'brand-black': '#000000',
        'brand-white': '#FFFFFF',
        'brand-beige': '#E8D5B7',
        'brand-beige-light': '#F2E6D0',
        'brand-amber': '#D4920A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
