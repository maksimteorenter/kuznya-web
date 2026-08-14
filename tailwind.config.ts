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
        void: "#08080a",
        graphite: "#121216",
        panel: "#18181c",
        steel: "#2a2a2f",
        mist: "#93908a",
        bone: "#eae6de",
        ember: {
          DEFAULT: "#c2361c",
          bright: "#e2571f",
          dim: "#7a2513",
        },
        gold: "#a6813d",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-lora)", "serif"],
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
