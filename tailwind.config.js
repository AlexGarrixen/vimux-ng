/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: "24px",
      screens: {
        DEFAULT: "1280px",
      },
    },
    extend: {
      fontFamily: {
        base: "Sora, Helvetica",
      },
      boxShadow: {
        border: "0 0 0 2px #000000",
      },
    },
    colors: {
      transparent: "transparent",
      white: "#ffffff",
      black: "#000000",
      gray: {
        1: "rgb(var(--gray1) / <alpha-value>)",
        2: "rgb(var(--gray2) / <alpha-value>)",
        3: "rgb(var(--gray3) / <alpha-value>)",
        4: "rgb(var(--gray4) / <alpha-value>)",
        5: "rgb(var(--gray5) / <alpha-value>)",
        6: "rgb(var(--gray6) / <alpha-value>)",
        7: "rgb(var(--gray7) / <alpha-value>)",
        8: "rgb(var(--gray8) / <alpha-value>)",
        9: "rgb(var(--gray9) / <alpha-value>)",
        10: "rgb(var(--gray10) / <alpha-value>)",
        11: "rgb(var(--gray11) / <alpha-value>)",
        12: "rgb(var(--gray12) / <alpha-value>)",
      },
      brand: {
        1: "rgb(var(--brand1) / <alpha-value>)",
        2: "rgb(var(--brand2) / <alpha-value>)",
        3: "rgb(var(--brand3) / <alpha-value>)",
        4: "rgb(var(--brand4) / <alpha-value>)",
        5: "rgb(var(--brand5) / <alpha-value>)",
        6: "rgb(var(--brand6) / <alpha-value>)",
        7: "rgb(var(--brand7) / <alpha-value>)",
        8: "rgb(var(--brand8) / <alpha-value>)",
        9: "rgb(var(--brand9) / <alpha-value>)",
        10: "rgb(var(--brand10) / <alpha-value>)",
        11: "rgb(var(--brand11) / <alpha-value>)",
        12: "rgb(var(--brand12) / <alpha-value>)",
        DEFAULT: "rgb(var(--brand9) / <alpha-value>)",
      },
      contrast: {
        textHi: "rgb(var(--gray12) / <alpha-value>)",
        textLow: "rgb(var(--gray11) / <alpha-value>)",
        fillHi: "rgb(var(--gray1) / <alpha-value>)",
        outline: "rgb(var(--gray3) / <alpha-value>)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
