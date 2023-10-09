/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tugas-bg': '#152A46',
        'tugas-btn': '#FF6161',
        'tugas-co': '#2A61A8',
      },
      fontFamily: {
        mulish: ['Mulish', 'sans'],
        'bevietnam': ['"Be Vietnam Pro"', 'sans'],
      }
    },
  },
  plugins: [],
}