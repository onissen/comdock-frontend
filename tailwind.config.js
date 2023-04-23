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
        dark: {
          DEFAULT: '#1E252B',
          50: '#3A4854',
          100: '#37444F',
          200: '#313C46',
          300: '#2B353D',
          400: '#242D34',
          500: '#1E252B',
          600: '#181D22',
          700: '#111519',
          800: '#0B0E10',
          900: '#050607',
          950: '#020202'
        },
        light: {
          DEFAULT: '#f5f5f5',
          50: '#F5F5F5',
          100: '#F3F4F4',
          200: '#F1F1F2',
          300: '#EEEFEF',
          400: '#EBECED',
          500: '#E9E9EA',
          600: '#E6E7E8',
          700: '#E4E4E5',
          800: '#E1E2E3',
          900: '#DEDFE0',
          950: '#DDDEDF'
        },
      }
    },
  },
  plugins: [],
};

