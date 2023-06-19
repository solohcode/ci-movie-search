/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
		"./src/**/*.{html,js}",
		"./public/**/*.{html,js}",
		"./src/styles/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}