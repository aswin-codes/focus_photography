/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background" : "#181414",
        "activebrown" : "#321A1A",
        "hoverbrown" : "#643737"
      },
      fontFamily: {
        "sanspro" : [ 'Nunito',]
      }
    },
  },
  plugins: [],
}

