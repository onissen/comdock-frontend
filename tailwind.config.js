/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#006378',
          50: '#BAF3FF',
          100: '#97EDFF',
          200: '#4FE0FF',
          300: '#08D4FF',
          400: '#009EBF',
          500: '#006378',
          600: '#005669',
          700: '#004A59',
          800: '#003D4A',
          900: '#00313B',
          950: '#002A33'
        },
        secondary: {
          DEFAULT: '#26626A',
          50: '#DEF1F3',
          100: '#C4E5EA',
          200: '#8FCFD7',
          300: '#5BB8C4',
          400: '#39939F',
          500: '#26626A',
          600: '#22585F',
          700: '#1E4D53',
          800: '#1A4348',
          900: '#16383D',
          950: '#143337'
        },
      }
    },
  },
  plugins: [],
};

