/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#015612",
        primaryLight: "#E0EAE2",
        primaryBG: "#e1ebe3",
        accentBG: "#fcf6e9",
        accent: "#eabb58",
        lite: "#909090",
        lightGray: "#626262",
        black: "#161515",
        blackLight: "#1A1A1A",
        customWhite: "#F4F4F4",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
