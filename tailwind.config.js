/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_bg_color: "#141821",
        primary_blue: "#003199",
      },
      margin: {
        20: "-20px",
      },
    },
  },
  plugins: [],
};
