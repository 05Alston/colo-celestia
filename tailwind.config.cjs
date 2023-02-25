/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'WorkSans': 'Work Sans',
        'Oswald': 'Oswald',
      },
      animation: {
        buttonPop: 'buttonPop .25s ease-out',
      },
      transitionTimingFunction: {
        'btn': 'cubic-bezier(.4,0,.2,1)',
      },
      keyframes: {
        buttonPop: {
          '0%': { transform: 'scale(1))' },
          '40%': { transform: 'scale(0.95)' },
          'to': { transform: 'scale(1)' },
        },
      },
      screens: {
        'xs': '425px',
      },
    },
  },
  plugins: [],
}
