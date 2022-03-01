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
    ripple: theme => ({
      colors: theme('colors')
    }),
  },
  plugins: [
    require('tailwindcss-ripple')()
  ],
}