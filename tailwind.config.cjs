/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        section1:
          "url('https://global-uploads.webflow.com/63234a846c8cfe190247a6b7/633b4aa550de1323716feb31_matrix2000x2000.webp)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
