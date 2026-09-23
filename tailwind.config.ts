import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neu: {
          light: "#e8edf5",
          dark: "#131722",
          "card-light": "#e8edf5",
          "card-dark": "#161b26",
          "surface-light": "#edf2f9",
          "surface-dark": "#1a2130",
        },
        procure: {
          blue: "#2563eb",
          cyan: "#0284c7",
          emerald: "#059669",
          amber: "#d97706",
          purple: "#7c3aed",
          rose: "#e11d48",
        },
      },
      boxShadow: {
        "neu-raised": "var(--neu-shadow-raised)",
        "neu-raised-sm": "var(--neu-shadow-raised-sm)",
        "neu-raised-lg": "var(--neu-shadow-raised-lg)",
        "neu-inset": "var(--neu-shadow-inset)",
        "neu-inset-sm": "var(--neu-shadow-inset-sm)",
        "neu-pill": "var(--neu-shadow-pill)",
        "neu-pill-active": "var(--neu-shadow-pill-active)",
        "neu-button": "var(--neu-shadow-button)",
        "neu-button-pressed": "var(--neu-shadow-button-pressed)",
        "neu-glow-blue": "0 0 20px -2px rgba(37, 99, 235, 0.45)",
        "neu-glow-emerald": "0 0 20px -2px rgba(5, 150, 105, 0.45)",
      },
      borderRadius: {
        neu: "1.25rem",
        "neu-lg": "1.75rem",
        "neu-xl": "2.25rem",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
