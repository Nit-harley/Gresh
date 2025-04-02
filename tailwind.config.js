/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1A1A', // Rich black
          light: '#2A2A2A'
        },
        gold: {
          DEFAULT: '#D4AF37', // Classic gold
          light: '#F4CF37'
        },
        accent: {
          green: '#2E8B57', // Forest green
          orange: '#FF8C00' // Dark orange
        }
      }
    },
  },
  plugins: [],
};