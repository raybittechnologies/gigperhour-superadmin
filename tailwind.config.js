/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E66D3D",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
