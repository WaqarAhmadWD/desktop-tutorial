/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      default: {
        900: "rgba(29,44,86,1)",
        800: "rgba(39,54,96,1)",
        700: "rgba(49,64,86,1)",
        600: "rgba(59,74,96,1)",
        500: "rgba(69,84,106,1)",
        400: "rgba(79,94,116,1)",
        300: "rgba(89,104,126,1)",
        200: "rgba(226,232,240,1)",
        100: "rgba(241,245,249,1)",
      },
      primary: "rgba(245,130,32,1)",
    },
  },
  plugins: [require("flowbite/plugin")],
};
