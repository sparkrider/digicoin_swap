/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandblue: "#6285D54D",
        brandgreen: "#62D56A4D",
        brandrd: "#D562624D",
      },
    },
    screens: {
      sm: {
        min: "420px",
      },
      md: {
        min: "900px",
      },
      lg: {
        min: "1024px",
      },
      _md: {
        max: "900px",
      },
      _sm: {
        max: "420px",
      },
      _lg: {
        max: "1024px",
      },
    },
  },
  plugins: [
    require("tailwindcss-grid-area"),
    function ({ addUtilities }) {
      addUtilities({
        /* Hide scrollbar for WebKit browsers (Chrome, Safari, Edge, Opera) */
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        /* Hide scrollbar for Firefox */
        ".no-scrollbar": {
          "scrollbar-width": "none",
          overflow: "hidden",
        },
      });
    },
  ],
};
