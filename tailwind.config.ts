import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ['Playfair Display, serif'],
    },
    extend: {
      backgroundImage: {
        "basic": "url('/splash.jpg')",
      },
      colors: {
        pinky: "#e6c7b9",
      },


    },
  },
  plugins: [],
} satisfies Config;
