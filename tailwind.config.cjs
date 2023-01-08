/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        screens: {
          md: "1000px",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
