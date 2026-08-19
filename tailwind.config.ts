import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Obsidian / Charcoal / Ivory / Stone / Oxide / Crimson / Aged Brass —
        // exact palette from the 2026 art-direction brief. Names kept stable
        // (void/graphite/bone/mist/ember/gold) so existing components don't churn.
        void: "#101113",
        graphite: "#191B1E",
        panel: "#1d1f22",
        steel: "#33363a",
        mist: "#AAA59B",
        bone: "#F2EEE5",
        ember: {
          DEFAULT: "#8D1F24",
          bright: "#B42B31",
          dim: "#4a1013",
        },
        gold: "#B3945E",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        editorial: ["var(--font-garamond)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        container: "1200px",
        prose: "62ch",
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-2%, -4%)" },
          "30%": { transform: "translate(3%, 2%)" },
          "50%": { transform: "translate(-3%, 4%)" },
          "70%": { transform: "translate(2%, -2%)" },
          "90%": { transform: "translate(-1%, 3%)" },
        },
      },
      animation: {
        grain: "grain 8s steps(6) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
