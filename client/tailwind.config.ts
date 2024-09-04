import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          pri: "#252525",
        },
        primary: "#F12727",
      },
      fontFamily: {
        inter: "var(--inter)",
        jost: "var(--jost)",
      },
    },
  },
  plugins: [],
};
export default config;
