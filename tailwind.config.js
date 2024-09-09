import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "pink": "#D46868",
        'violetgradient': '#FF1CF7',
      },
      backgroundImage: {
        'violettogradient': 'linear-gradient(to right, #FF1CF7, #b249f8)',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: '#000000',
            secondary: '#000000',
            fixed: '#000000',
            textwhiteblack: '#ffffff',
            textpinkblack: '#ffffff',
            // Add other light theme colors here
          },
        },
        dark: {
          colors: {
            primary: '#FF1CF7',
            secondary: '#CE454B',
            fixed: '#FFFFFF',
            textwhiteblack: '#000000',
            textpinkblack: '#FF1CF7',
            // Add other dark theme colors here
          },
        },
      },
    }),
  ],
}
