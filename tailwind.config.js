module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    screens: {
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "479px" },
      xs: { max: "319px" },
    },
    extend: {
      colors: {
        primary: {
          100: "#e2d3e7",
          200: "#c5a8cf",
          300: "#a87cb8",
          400: "#8b51a0",
          500: "#6e2588",
          600: "#581e6d",
          700: "#421652",
          800: "#2c0f36",
          900: "#16071b",
        },
        secondary: {
          100: "#fcf3ff",
          200: "#f8e7ff",
          300: "#f5dbfe",
          400: "#f1cffe",
          500: "#eec3fe",
          600: "#be9ccb",
          700: "#8f7598",
          800: "#5f4e66",
          900: "#302733",
        },
      },
      fontSize: {
        "fs--2": "clamp(0.69rem, calc(0.66rem + 0.18vw), 0.8rem)",
        "fs--1": "clamp(0.83rem, calc(0.78rem + 0.29vw), 1rem)",
        "fs-0": "clamp(1rem, calc(0.91rem + 0.43vw), 1.25rem)",
        "fs-1": "clamp(1.2rem, calc(1.07rem + 0.63vw), 1.56rem)",
        "fs-2": "clamp(1.44rem, calc(1.26rem + 0.89vw), 1.95rem)",
        "fs-3": "clamp(1.73rem, calc(1.48rem + 1.24vw), 2.44rem)",
        "fs-4": "clamp(2.07rem, calc(1.73rem + 1.7vw), 3.05rem)",
        "fs-5": "clamp(2.49rem, calc(2.03rem + 2.31vw), 3.82rem)",
      },
    },
  },
  plugins: [],
};
