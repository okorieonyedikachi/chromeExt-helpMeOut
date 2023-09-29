/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom:['Inter', 'sans-serif', 'Work Sans', 'Sora']
      },
      height: {
        '498px': '498px',
        '72px': '72px'
      },
      borderWidth:{
        '1px': '1px'
      }
      
    },
  },
  plugins: [],
}

