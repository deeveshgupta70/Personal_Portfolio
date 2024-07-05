/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        scrolldown: {
          "0%": { top: "-1px", opacity: "0.2" },
          "50%": { top: "10px", opacity: "0.5" },
          "100%": { top: "50px", opacity: "0.9" },
        },
      },
    },
  },
  plugins: [],
};

// background: linear-gradient(90deg, #4831d4 67%, #ccf381 33%);
