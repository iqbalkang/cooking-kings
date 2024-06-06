/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
        Sacramento: ['Sacramento', 'sans-serif'],
      },
      colors: {
        accent: '#D6AE5F',
        whitish: '#FFF9EF',
        blackish: '#444',
      },
      backgroundImage: {
        header: "url('images/header-bg.jpg')",
      },
    },
  },
  plugins: [],
};
