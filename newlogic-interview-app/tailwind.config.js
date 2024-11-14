/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#3B82F6',
      white: '#fff',
      main: '#171717',
      tertiary: '#737373',
      error: '#DC2626',
      body: '#FAFAFA',
      'body-secondary': '#E5E5E5',
      'body-tertiary': '#D4D4D4',
      'gray-200': '#E5E7EB',
      'gray-400': '#9CA3AF',
      'red-100': '#DC26261A',
      'red-500': '#EF4444',
      'green-100': '#DCFCE7',
      'green-700': '#15803D',
    },
    extend: {
      brightness: {
        80: '.80',
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}

