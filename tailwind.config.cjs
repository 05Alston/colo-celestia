/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Orbitron': 'Orbitron',
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
        'space-bg': '#060607',
      },
      aspectRatio: {
        '3/4': '3 / 4',
        'videoVert': '9 / 16',
      },
      keyframes: {
        tear: {
          '0%': { transform: 'rotate(0deg)' },
          '40%': { transform: 'rotate(6deg)' },
          '50%': { transform: 'rotate(5deg)' },
          '60%': { transform: 'translateY(10vh) rotate(5deg)' },
          'to': { transform: 'translateY(80vh) rotate(5deg)' },
        },
        customSpin: {
          'to': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        customBounce: {
          '0%, 100%': { transform: 'translateY(-25%) rotate(90deg)' },
          '50%': { transform: 'translateY(0%) rotate(90deg)' },
        },
        flicker: {
          '0%, 40%, 50%': { color: 'hsla(0,0%,100%,0)' },
          '20%': { color: 'hsla(0,0%,100%,.3)' },
          '60%': { color: 'hsla(0,0%,100%,.6)' },
          '100%': { color: '#fff' }
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
