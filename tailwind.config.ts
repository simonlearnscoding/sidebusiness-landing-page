import { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["GeneralSans", ...fontFamily.sans], // GeneralSans as default sans-serif
        serife: ["Instrument Serif", ...fontFamily.serif], // Instrument Serif as serif
        inter: ["Inter", ...fontFamily.sans], // Inter as custom font
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          500: "#44A5DD",
        },
        secondary: {
          500: "#E1E7D5",
        },
      },
    },
  },
  plugins: [],
};

export default config;
