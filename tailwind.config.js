// tailwind.config.js
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { heroui } = require("/hero");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()],
};
