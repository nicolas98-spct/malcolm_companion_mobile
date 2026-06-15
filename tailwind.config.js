/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        malcolm: { red: '#d71920', yellow: '#ffc928', black: '#101010', gray: '#f1f1f1' },
      },
      fontFamily: {
        body: ['NeueHaasGrotesk'],
        title: ['HelveticaNeueBold'],
      },
    },
  },
  plugins: [],
};
