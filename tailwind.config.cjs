/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'colonight' : 'url("./src/assets/colonite.webp")',
        'entrage' : 'url("./src/assets/entrage.webp")',
        'speaker1' : 'url("./src/assets/speaker1.webp")',
        'speaker2' : 'url("./src/assets/speaker2.webp")',
        'speaker3' : 'url("./src/assets/speaker3.webp")',
        'player' : 'url("./src/assets/player.webp")',
        'robot' : 'url("./src/assets/robot.webp")',
        'colonight-alt' : 'url("./src/assets/colonight.webp")',
        'decor' : 'url("./src/assets/colosseumdbit.webp")',
      },
      fontFamily: {
        'WorkSans': 'Work Sans',
        'Oswald': 'Oswald',
      },
      animation: {
        ticketTear: 'tear 0.8s forwards ease-out',
        buttonPop: 'buttonPop .25s ease-out',
      },
      transitionTimingFunction: {
        'btn': 'cubic-bezier(.4,0,.2,1)',
      },
      colors: {
        'space-bg': '#030405',
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
      keyframes: {
        tear: {
          '0%': { transform: 'rotate(0deg)' },
          '40%': { transform: 'rotate(6deg)' },
          '50%': { transform: 'rotate(5deg)' },
          '60%': { transform: 'translateY(10vh) rotate(5deg)' },
          'to': { transform: 'translateY(80vh) rotate(5deg)' },
        },
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
  plugins: [require("daisyui")],
}
