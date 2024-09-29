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
        primaryBG: "#e1ebe3",
        accentBG: "#fcf6e9",
        accent: "#eabb58",
        lite: "#909090",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
