/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 'jimbo': {
        //   light: '#e6fffa',
        //   medium: '#ffa17a',
        //   DEFAULT: '#00c9ae',
        //   dark: '#00897b',
        // },
        'bluish': {
          lighter: '#E6F4F1',
          light: "#E16B8A",
          lightish: "#24CDB4",
          medium: '#219EBC',
          DEFAULT: '#005B99',
          dark: '#3C8375',
        },
      }
    },
  },
  plugins: [],
}