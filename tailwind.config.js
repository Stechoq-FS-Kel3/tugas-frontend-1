/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem'
        }
      },
      colors: {
        primary: '#F5AC4E',
        secondary: '#004578',
        dark: '#2A2E4B',
        base: '#2A2E4B',
        neutral: '#646464'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: '#F5AC4E',
          secondary: '#004578',
          base: '#101828',
          'primary-content': '#ffffff',
          'secondary-content': '#ffffff',
          neutral: '#646464',
          'base-100': '#ffffff'
        }
      }
    ]
  }
}
