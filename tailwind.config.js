/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "charcoal": "#242628",
        "putty": "#e2e4dd",
        "blue": "#114adc",
      },
      backgroundImage: {
        "hero-pattern": "src/assets/blue-circles.png",
      },
    },
  },
  plugins: [],
};
