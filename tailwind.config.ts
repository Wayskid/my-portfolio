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
        primary: "#de3c3a",
        secondary: "#010d1d",
        tertiary: "#4fc39c",
        sub: "#052659",
      },
    },
  },
  plugins: [],
};
export default config;
