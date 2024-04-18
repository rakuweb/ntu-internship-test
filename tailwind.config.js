/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'gray-custom': 'rgb(229, 231, 235)',
      },
    },
  },
  plugins: [],
  // corePlugins: { prefight: false },
};
