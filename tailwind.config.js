// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
      },
      inset: {
        '1/6': '16.66%',
      },
      gridTemplateRows: {
        header: '15% auto 50px',
      },
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
