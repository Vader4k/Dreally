/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          '50': '#f0f0ff',
          '100': '#d0d0ff',
          '200': '#b9b9ff',
          '300': '#9898ff',
          '400': '#8585ff',
          '500': '#6666ff',
          '600': '#5d5de8',
          '700': '#4848b5',
          '800': '#38388c',
          '900': '#2b2b6b',
        },
        'neutral': {
          '50': '#e7e7e7',
          '100': '#b6b6b6',
          '200': '#929292',
          '300': '#606060',
          '400': '#414141',
          '500': '#121212',
          '600': '#101010',
          '700': '#0d0d0d',
          '800': '#0a0a0a',
          '900': '#080808',
        }
      },
      fontFamily: {
        Sora: ["Sora", "sans-serif"]
      },
      backgroundImage: {
        'vector': "url('./assets/vector.png')",
      }
    },
  },
  plugins: [],
}