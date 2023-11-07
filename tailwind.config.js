/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: "'Lora',  serif",
      },
    },
  },
  daisyui: {
    themes: ["forest"],
  },

  plugins: [require("daisyui")],
};
