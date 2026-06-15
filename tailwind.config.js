/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F44336',
        redVariant: '#FF4B3E',
        appBg: '#EDEDED',
        card: '#FFFFFF',
        ink: '#1A1A1A',
        muted: '#6B6B6B',
        soft: '#D9D9D9',
        blackBlock: '#111111',
        progress: '#E3B02C',
        tabInactive: '#A0A0A0',
      },
    },
  },
  plugins: [],
};
