const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.{js,ts,jsx,tsx}',
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
      minHeight: {
        subheader: 'calc(100vh - 68px)'
      },
      maxHeight: {
        '4/5': '80%'
      },
      colors: {
        sky: colors.sky
      },
      transitionDuration: {
        '4000': '4000ms',
      },
      cursor: {
        'zoom-in': 'zoom-in'
      }
    }
  },
  variants: {
    extend: {
      width: ['hover'],
      margin: ['odd', 'even'],
      textColor: ['active'],
      ringColor: ['hover']
    },
  },
  plugins: [],
}
