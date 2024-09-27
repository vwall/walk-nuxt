/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      height: {
        // @ts-ignore
        screen: ['100vh /* Fallback */', '100dvh'],
      },
      minHeight: {
        // @ts-ignore
        screen: ['100vh /* Fallback */', '100dvh'],
      },
    },
  },
  plugins: [],
}
