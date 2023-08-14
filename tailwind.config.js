/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1025px",
      xl: "1280px",
    },
    extend: {
      colors: {
        btnBlue: "#437EF7",
        bgBlue: "#2B63D9",
        pTextColor: "#B1CCFB",
        pTextLightColor: "#5F6D7E",
        bgDark: "#151B28",
        bgLightGray: "#F8F9FB",
        bgLight: "#FAFBFC",
        lineGray:"#2E3545",
        
      },
    },
  },
  plugins: [],
};