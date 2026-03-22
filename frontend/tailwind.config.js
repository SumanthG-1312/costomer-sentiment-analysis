/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#0F1115',
        surface: '#151821',
        border: '#232734',
        accent: '#6C8CF5',
        textPrimary: '#E8ECF1',
        textSecondary: '#9AA4B2',
      },
    },
  },
  plugins: [],
}
