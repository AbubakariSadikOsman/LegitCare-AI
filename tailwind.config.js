/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        black: "#00040f",
        white: "#fff",
        bgColor: "#040F32",
        menuBg: "#4745A5",
        visitBtn: "#00EEEE",
        logoColor: 'linear-gradient(157.81deg, #def9fa -43.27%, #bef3f5 -21.24%, #9dedf0 12.19%, #7de7eb 29.82%, #5ce1e6 51.94%, #33bbcf 90.29%)',
        emailBtn: "#4643C9",
        bgGradient: "linear-gradient(99.26deg, #3939BA -1.13%, #00EEEE 116.52%)"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        roboto_condensed: ["Roboto Condensed"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};