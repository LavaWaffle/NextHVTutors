module.exports = {
  content: [
    "./pages//*.{js,ts,jsx,tsx}",
    "./components//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik'],
        'title': ['Anton'],
      },
    },
    aspectRatio: {
      '420/505' : '420 / 505',
      '10/9': '10 / 9',
    },
    ripple: theme => ({
      colors: theme('colors')
    }),
  },
  plugins: [
    require('tailwindcss-ripple')()
  ],
}