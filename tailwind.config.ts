import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#49BBBD",
        secondary: "#7eccce",
        container:"#9DCCFF",
        accent: "#ACACAC",
        main: "#F48C06",
        linear: "#136CB5",
        sub: "#2F327D",
        subheading: "#00CBB8",
        foot: "#252641"

      },
    },
  },
  plugins: [],
};
export default config;
