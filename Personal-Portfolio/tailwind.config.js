/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      1: '1px',
      1.5: '1.5px',
    },

    backdropBlur: {
      mxl: '10px',
    },
  },
  plugins: [],
};
