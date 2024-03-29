import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        blue: {
          450: '#2E98D4'
        },
        zinc: {
          450: '#696969',
          750: '#424242'
        }
      },
      boxShadow: {
        '4xl': '0px 4px 12px 0px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
};
export default config;
