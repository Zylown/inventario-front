/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255, 255, 255, 0.25)",
        brown: "rgb(30,30,17)",
        carbon: "rgb(34,34,34)",
        "verde-claro": "rgb(4,87,87)",
        "verde-oscuro": "rgb(4,67,67)",
        crema: "rgb(228,228,228)",
      },
    },
  },
  plugins: [],
};
