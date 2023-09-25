/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");


export default {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "900px",
      xl: "1260px",
      "2xl": "1536px",
    },

    fontFamily: {
      sans: ["Bai Jamjuree", "sans-serif"],
    },
    extend: {
      colors: {
        "accent-1": "hsl(171, 66%, 44%)",
        "accent-2": "hsl(233, 100%, 69%)",

        "border-1": "hsl(170, 68%, 37%)",
        "border-2": "hsl(223, 69%, 55%)",

        "Shadow-1" : "0px 15px 30px -10px hsl(171, 52%, 58%)",
        "Shadow-2" : "0px 15px 30px -10px hsl(233, 100%, 77%)",

        "hover-1": "hsl(171, 52%, 58%)",
        "hover-2": "hsl(233, 100%, 77%)",

        "neutral-400": "hsl(210, 10%, 33%)",
        "neutral-200": "hsl(201, 11%, 66%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { fontSize: "18px" },
      });
    }),
  ],
};

