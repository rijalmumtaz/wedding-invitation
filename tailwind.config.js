/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./elements/**/*.{js,ts,jsx,tsx}",
    "./parts/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kurale: ["Kurale", "serif"],
        "noto-sans-symbols": ["Noto Sans Symbols", "sans-serif"],
        "passions-conflict": ["Passions Conflict", "cursive"],
        "rozha-one": ["Rozha One", "serif"],
        kapakana: ["Kapakana", "cursive"],
        "bad-script": ["Bad Script", "cursive"],
      },
      colors: {
        black: "#112317",
        brown: "#60453C",
        white: "#F9F9F9",
        "white-bg": "#FCFCFC",
        "pink-bg": "#FFB4B4",
        "purple-bg": "#B2A4FF",
      },
      backgroundImage: {
        "cover-bg": "url('/images/Background.jpg')",
      },
      letterSpacing: {
        wide: "0.13em",
        wider: "0.2em",
        widest: "0.35em",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
