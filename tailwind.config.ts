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
        // Approved direction: black-and-white poster with one blood red.
        // The page alternates paper and deep-black sections; red is the only
        // hue on either ground, so it always reads as the same signal.
        paper: "#EDEAE4",
        paperDim: "#E2DED6",
        ink: "#111111",
        inkSoft: "#3B3A38",
        // Small uppercase labels sit here. Darkened twice: first to clear AA
        // (#6E6B66 was 4.42:1), then again because at 13px the labels still
        // read as washed out. Now 7.4:1 on paper.
        inkFaint: "#4A4844",
        deep: "#0B0B0C",
        deepSoft: "#141416",
        blood: {
          DEFAULT: "#C1121F",
          dark: "#8D1F24",
        },
        // Legacy dark-theme names, kept so untouched components still compile.
        // New work should use paper/ink/deep/blood above.
        void: "#0B0B0C",
        graphite: "#141416",
        panel: "#1d1f22",
        steel: "#33363a",
        // Secondary text on the deep sections. Lifted from #8E8B85 (5.8:1) so
        // small labels on black read as clearly as body copy does. Now 8.6:1.
        mist: "#ADA9A2",
        bone: "#F5F3EF",
        ember: {
          DEFAULT: "#C1121F",
          bright: "#C1121F",
          dim: "#4a1013",
        },
        gold: "#B3945E",
        flame: {
          DEFAULT: "#E8B23D",
          dim: "#B3862B",
        },
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
