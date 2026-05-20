import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: "var(--graphite)",
        surface: "var(--surface)",
        copper: {
          DEFAULT: "var(--copper)",
          light: "var(--copper-light)",
          dark: "var(--copper-dark)",
        },
        muted: "var(--text-muted)",
        border: "var(--border)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
