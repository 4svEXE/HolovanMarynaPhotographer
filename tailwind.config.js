/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens:{
      ssm:"320px",
      sm:"375px",
      md:"768px",
      lg:"1024px"
    },
    extend: {
      colors: {
        "editor-dark": "#1e1e1e",
      },
    },
  },
  plugins: [],
};
