// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '300px',
      // => @media (min-width: 640px) { ... }

      'md': '500px',
      // => @media (min-width: 768px) { ... }

      'lg': '700px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1500px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'bg-cl-orange': '#ff7000',
      },
    },
  },
  plugins: [],
}