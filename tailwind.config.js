/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primaryColor: '#0d0c0f',
        borderColor: '#28262d',
        buttonColor: '#00925d',
      },
    },
  },
  plugins: [],
}