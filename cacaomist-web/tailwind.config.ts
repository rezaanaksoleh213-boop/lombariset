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
        "sage-aqua": "#A8CFC1",
        "deep-sage": "#2E6B5B",
        "cocoa-brown": "#70452E",
        "soft-beige": "#EADFCF",
        ivory: "#F8F6EE",
        "muted-gold": "#C4A368",
        "leaf-green": "#7DAA65",
        "warm-sand": "#D9C3A7",
        "forest-green": "#244C38",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        montserrat: ["var(--font-montserrat)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.7s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
        "mist": "mist 8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        mist: {
          "0%, 100%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.05)" },
        },
      },
      backgroundImage: {
        "sage-gradient": "linear-gradient(135deg, #F8F6EE 0%, #EADFCF 40%, #A8CFC1 100%)",
        "cocoa-gradient": "linear-gradient(135deg, #EADFCF 0%, #D9C3A7 50%, #70452E 100%)",
        "hero-gradient": "linear-gradient(160deg, #F8F6EE 0%, #EADFCF 30%, #A8CFC1 70%, #2E6B5B 100%)",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },
    },
  },
  plugins: [],
};

export default config;
