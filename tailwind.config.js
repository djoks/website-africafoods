const defaultTheme = require('tailwindcss/defaultTheme');

const brandColors = {
  green: '#2b322b',
};

const systemColors = {
  blue: '#007aff',
};

module.exports = {
  mode: 'jit',
  purge: {
    mode: 'all',
    content: ['./pages/**/*.html', './js/**/*.js'],
  },
  theme: {
    extend: {
      maxWidth: {
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
      },
      colors: {
        // `ex` prefix will create classes like `text-ex-red`
        // Remove `ex` if you dont want prefix
        ex: {
          ...brandColors,
          ...systemColors,
        },
        coffee: {
          DEFAULT: '#736351',
          50: '#C9BEB2',
          100: '#C1B4A7',
          200: '#B0A08F',
          300: '#9F8C77',
          400: '#8B7862',
          500: '#736351',
          600: '#52473A',
          700: '#312A23',
          800: '#100E0B',
          900: '#000000',
        },
      },
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        xxl: '1410px',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
  },
  plugins: [require('@tailwindcss/custom-forms')],
};
