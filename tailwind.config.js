const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/*.{js,jsx,ts,tsx}',
    './public/index.html'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      width: {
        4.5: '1.125rem',
        22: '5.5rem'
      },
      height: {
        4.5: '1.125rem',
      },
      colors: {
        sky: colors.sky
      },
      transitionDuration: {
        '4000': '4000ms',
      }
    }
  },
  variants: {
    extend: {
      width: ['hover'],
      margin: ['odd', 'even'],
      textColor: ['active']
    },
  },
  plugins: [],
}
