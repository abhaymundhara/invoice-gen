/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ FIXED: add './src'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
