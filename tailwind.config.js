/* @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        waveHeight: "60px",
      },
      fontFamily: {
        "bungee-inline": ["Bungee Inline", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
      translate: {
        full: "100%",
        "-full": "28%",
      },
      animation: {
        flowBg: "flowBg 10s linear infinite",
      },
      keyframes: {
   
      },
    },
  },
  plugins: [],
};
