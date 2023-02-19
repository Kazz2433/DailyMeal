/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      smart: "732px",
      tablet: "1140px",
      window: "1440px",
    },
    extend: {
      colors: {
        orange: {
          500: "#FF9E2D",
        },
        gray: {
          300: "#262626",
          700: "#262626",
        },
        background: {
          900: "#191919",
        },
      },
      width: {
        85: "352px",
        516: "516px",
        540: "540px",
        468: "468px",
      },
      height: {
        18: "74px",
        25: "86px",
        100: "820px",
      },
      fontFamily: {
        sans: ["Poppins"],
      },
      lineHeight: {
        20: "74px",
      },
    },
    plugins: [],
  },
}
