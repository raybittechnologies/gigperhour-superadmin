/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Define custom keyframes
      keyframes: {
        comeCloser: {
          "0%": {
            opacity: 0,
            transform: "scale(0.5) translateZ(-500px)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1) translateZ(0)",
          },
        },
      },
      // Define custom animations
      animation: {
        comeCloser: "comeCloser 0.8s ease-out",
      },
    },
  },
  plugins: [],
};
