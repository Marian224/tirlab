import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#08090A",
          900: "#0D0F10",
          800: "#131517",
          700: "#1B1E21",
          600: "#26292D",
          500: "#35393E",
          400: "#54595F",
        },
        accent: {
          DEFAULT: "#FF3D1A",
          dim: "#B32B12",
          glow: "#FF6640",
        },
        paper: "#EDEDE9",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};

export default config;
