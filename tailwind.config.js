/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blackish: "#1c1c1c",
      },
      spacing: {
        150: "37.5rem"
      }
    },
  },
  plugins: [],
};
