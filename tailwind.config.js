/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      color: {
        primary: "#F0ECE5",
        accent: "#B6BBC4",
        secondary: "#31304D",
        dark: "#161A30",
      },
      color_white: {
        primary: "#A25772",
        accent: "#7C93C3",
        secondary: "#9EB8D9",
        dark: "#EEF5FF",
      },
    },
  },
  plugins: [],
}
