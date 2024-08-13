/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'get-banner': "url('./src/assets/get.png')",
      },
    },
    fontFamily: {
      'jose': ['Josefin Sans', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
    }
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}
