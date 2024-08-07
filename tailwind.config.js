/** @type {import('tailwindcss').Config} */

module.exports = {
  // mode: "jit",
  content: ["./client/**/*.js", "./client/**/*.jsx", "./**/*.html"],
  // purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      transparent: "transparent",
      priblue: "#191970",
      secblue: "#434f3e",
      // thdblue: "#F4F2E9",
      // foublue: "#e2ddc7",
      priwhite: "white",
      secwhite: "#D9D9D9",
      thdwhite: "lightgray",
    },
    extend: {},
  },
  variants: {
    extend: {
      fontFamily: {
        display: "Barlow Semi Condensed",
      },
    },
  },
  // plugins: [require("tailwindcss"), require("autoprefixer")],
};
