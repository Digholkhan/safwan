/** @type {import('tailwindcss').Config} */
import banner from '../    '
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1170px',
      },
    },
    extend: {
      colors: {
        'primary': "#E5745D",
        'secondary': "#00413D",
      },
      backgroundImage: {
        'Banner': "url('/src/assets/BannerBg.png')",
      },
      fontFamily: {
        'Jost': ["Jost", "sans-serif"],
        'vellkorn': ["Vollkorn", "serif"],
      }
    },
  },
  plugins: [],
};
