/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'loop-scroll': 'loop-scroll 40s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from : {transform : "translateX(0)"},
          to : {transform : "translateX(-100)"},
        },
      },
      colors: {
        primary: "#9400D3",
        secondary: "",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

