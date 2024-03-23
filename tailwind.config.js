/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'almost-black': '#111729',
      'dark-blue': '#1D1B48',
      'light-blue': '#3662E3',
      'dark-gray': '#20293A',
      'gray': '#364153',
      'light-gray': '#4A5567',
      'almost-white': '#CDD5E0',
    },
    fontFamily: {
      sans: ['Be Vietnam Pro', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

