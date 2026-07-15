/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#F7C948',
        'brand-espresso': '#2A1B16',
        'brand-cream': '#FFFDF8',
        'brand-beige': '#F5EFE6',
        'brand-charcoal': '#222222',
        'brand-accent': '#D4A017',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
