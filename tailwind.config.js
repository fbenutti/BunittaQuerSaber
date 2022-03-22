module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'verde-bunitta': '#4AAA7F',
        'verde-claro-bunitta': '#C2F2DC',
        'pastel-default': '#DEF2F1',
        'cinza-claro': '#F5F7F7',
        'verde-escuro': '#0C3A40',
      },
      fontFamily: {
        'header': ["Courgette Regular", "modern"],
      }
    },
  },
  plugins: [],
}
