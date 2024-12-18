/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        salmon: "salmon",
      },
      // gap: {
      //   30: "30px",
      // },
      // spacing: {
      //   1: "5px",
      //   2: "10px",
      //   3: "15px",
      //   4: "20px",
      //   5: "25px",
      //   6: "30px",
      // },
    },
  },
  plugins: [],
};
