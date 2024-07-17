module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#E83667",
        primaryDark: "#BB2C52",
        secondary: "#21D4B9",
        dark: "#303030",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cursive: ["Ephesis", "cursive"],
      },
      container:{
        center:true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
        }
      },
    },
  },
  plugins: [],
}