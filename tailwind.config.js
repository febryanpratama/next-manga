import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        "pink" : "#D46868",
        // "violetborder" : "from-[#FF1CF7] to-[#b249f8]",
        'violetgradient': '#FF1CF7',
        // "violettogradient" : "from-[#FF1CF7] to-[#b249f8]",
      },
      backgroundImage: {
        'violettogradient': 'linear-gradient(to right, #FF1CF7, #b249f8)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
