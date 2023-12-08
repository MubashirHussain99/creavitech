/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        sky: "var(--sky-color)",
        body: "var(--body)",
      },
    },
    fontFamily: {
      bubblefont: ["Bubblegum Sans", "cursive"],
      courgette: ["Courgette", "cursive"],
      luck: ["Luckiest Guy", "cursive"],
      pop: ["Mochiy Pop P One", "cursive"],
      poppins: ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
};
