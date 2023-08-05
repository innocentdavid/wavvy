/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extended: {
      // screens: {
      //   '2xl': "1600px",
      //   '3xl': "1800px",
      // },
      colors: {
        'black-rgba': 'rgb(107, 70, 193)',
        'blue-rgba': 'rgb(107 70 193 / 20%) 0px 0px 50px 0px',
        'gray-rgba': 'rgb(204, 204, 204)',
      }
    },
    fontFamily: {
      playFairDisplay: ['Playfair Display', 'serif'],
      inter: ['Poppins', 'sans-serif']

    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}
