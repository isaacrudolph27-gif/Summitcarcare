import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        summit: {
          black: "#0A0A0B",
          charcoal: "#141416",
          graphite: "#1E1E22",
          steel: "#2A2A30",
          silver: "#8A8A96",
          mist: "#C4C4CC",
          white: "#F8F8FA",
          blue: "#3B82F6",
          "blue-dim": "#1D4ED8",
          "blue-glow": "#60A5FA",
          gold: "#C9A84C",
          "gold-light": "#E8C96A",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "glass-dark": "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        shimmer: "shimmer 2s infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59,130,246,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(59,130,246,0.6)" },
        },
      },
      boxShadow: {
        glass: "0 4px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
        "glass-lg": "0 8px 64px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1)",
        "blue-glow": "0 0 32px rgba(59,130,246,0.25)",
        "gold-glow": "0 0 24px rgba(201,168,76,0.2)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
