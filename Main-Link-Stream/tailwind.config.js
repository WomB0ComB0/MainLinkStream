/** @type {import('tailwindcss').Config} */
export default {
  content: ["./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", "./public/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './public/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
};