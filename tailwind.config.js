/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "darkgrey": "#121212",
        "charcoal": "#242628",
        "putty": "#e2e4dd",
        "blue": "#114adc",
        "darkputty": "#BEBFBA",
        "drap": "#33A1C9",
      },
      backgroundImage: {
        "hero-pattern": "url('src/assets/blue-circles.png)",
      },
    },
  },
  plugins: [],
};
