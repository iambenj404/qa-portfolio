
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // This line tells Tailwind to scan all .html and .ts files in your src folder
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
           '0%': { opacity: '0' },
           '100%': { opacity: '1' }
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        fadeIn: 'fadeIn 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}
