import { text } from "stream/consumers";
import { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {

h1 {
  @apply font-bebas text-4xl font-bold text-primary-500;
}
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: "var(--font-bebas-neue)",
        sans: ["Bebas Neue", ...fontFamily.sans], // Add Bebas Neue to the default sans family
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: {
          500: "#4D26E6",
        },
      },
    },
  },
  plugins: [],
};

export default config;
