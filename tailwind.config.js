module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        '1/6': '16.66%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
