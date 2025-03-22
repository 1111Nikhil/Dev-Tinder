/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure correct paths
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")], // Correct syntax for DaisyUI
  daisyui: {
    themes: ["light"], // Default themes
  },
};
