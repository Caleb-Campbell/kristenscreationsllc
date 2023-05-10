import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "basic": "url('/splash.jpg')",
      }
    },
  },
  plugins: [],
} satisfies Config;
