/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0ea5e9', // sky-500 (Friendly Blue)
          dark: '#0284c7', // sky-600
        },
        secondary: {
          DEFAULT: '#f97316', // orange-500 (Warm Accent)
          light: '#fdba74', // orange-300
        },
        accent: {
          DEFAULT: '#86efac', // green-300 (Clean/Fresh)
        }
      },
      fontFamily: {
        sans: ['"M PLUS Rounded 1c"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
