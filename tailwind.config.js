/** @type {import('tailwindcss').Config} */
const { screens } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxsm: "340px",
      xsm: "480px",
      ...screens,
    },
    extend: {
      fontFamily: {
        neuebit: ["var(--font-neuebit)"],
        mondwest: ["var(--font-mondwest)"],
        // sans: ["var(--font-worksans"],
      },
      backgroundImage: {
        "home-hero-number": "url('/assets/img/hero-number-bg.svg')",
      },
      colors: {
        "dark-grey": "#6d6e71",
        "pixel-black": "#000000",
        "software-grey": "#efefef",
        inspiration: "#b0b0ff",
        disruption: "#ccff50",
        insightful: "#ffd6bb",
        welcoming: "#b8ffee",
      },
      cursor: {
        "edit-cursor": 'url("/assets/img/ttDigitalHandSm.png"), auto',
      },
      keyframes: {
        slideLeft: {
          "100%": { transform: "translateX(-35.45%)" },
        },
      },
      animation: {
        slide: "slideLeft 10s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
