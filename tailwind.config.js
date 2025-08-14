/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors:{
      primaryColor: "#82B440",
      black: "#000000",
      white: "#FFFFFF",
      blue: "#0000FF",
      orange: "#FFA500"
    }
    },
 
  },
  plugins: [],
}

