/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quantico: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],

  variants: {
    scrollbar: ["rounded"], // Optional: Makes the scrollbar rounded
  },
};
