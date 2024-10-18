import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"], // Ensure fallback font is included
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: {
          500: '#4D26E6',
        },
      },
    },
  },
  plugins: [],
};

export default config;
