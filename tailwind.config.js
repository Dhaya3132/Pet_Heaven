/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'JosefinSans':["Josefin+Sans"],
        'DancingScript' :['Dancing Script']
      },
      colors :{
        'Primary' : "#8338ec",
        'Second_Primary' : "#BF92FF",
        'Star': "#FFBE0B",
        'Red':"#FA3E65",
        'Pink':"FF96AC",
        'Green':"#3EFADB"
      },
    },
  },
  plugins: [],
}