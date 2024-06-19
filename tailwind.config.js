/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'ncnl': "#f39220",
        'ncnl50': "#f8be79",
      },
      fontFamily: {
        'noto': ["'Noto Sans JP'"],
      }
    },
  },
  plugins: [],
}

