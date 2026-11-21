/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        cardlink: {
          navy: "#142536",
          deep: "#0E1C2A",
          ink: "#1B2938",
          muted: "#73808D",
          ivory: "#F7F5F0",
          line: "#E8E7E1",
          accent: "#C6D0DA",
          white: "#FFFFFF",
        },
      },

      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        heading: ["Manrope", "sans-serif"],
      },

      boxShadow: {
        profile: "0 24px 80px rgba(20,37,54,0.08)",
        avatar: "0 5px 18px rgba(20,37,54,0.09)",
      },
    },
  },

  plugins: [],
};