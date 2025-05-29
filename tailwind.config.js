/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'lg': {'max': '1024px'}, 
      'md': {'max': '830px'},
      'sm': {'max': '440px'}
    },
  },
  plugins: [],
};
