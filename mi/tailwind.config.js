module.exports = {
    plugins: [require('daisyui'), require('@tailwindcss/typography')],
    theme: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif']
      }
      
    },
    daisyui: {
      themes: ["pastel", "emerald", "dim", "night"],
    },
  };