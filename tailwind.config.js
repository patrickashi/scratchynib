/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kablammo: ['Kablammo', 'cursive'],
        lovers: ['Lovers Quarrel', 'cursive'],
      },
    },
  },
  plugins: [],
}

