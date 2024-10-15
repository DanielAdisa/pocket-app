/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'great' : ['GreatVibes', 'cursive'],
        'grey-reg' : ['Aon-Reg','sans-serif'],
        'grey-med' : ['Aon-Med','sans-serif'],
        'grey-lit' : ['Aon-Light','sans-serif'],
        'grey-bold' : ['Aon-Bold','sans-serif'],
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        "stop-scroll": "stop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)"},
          to: { transform: "translateX(-100%)"},
        },
        "stop-scroll": {
          from: { transform: "translateX(0)"},
          to: { transform: "translateX(0)"},
        },
      },
      
    },
  },
  plugins: [],
}