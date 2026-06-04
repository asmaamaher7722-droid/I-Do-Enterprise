import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563EB",
          600: "#2563EB",
          700: "#1D4ED8",
          100: "#E8F0FF",
        },
        navy: {
          DEFAULT: "#0F2540",
          900: "#0F2540",
          950: "#0B1F3A",
        },
        surface: {
          light: "#F5F8FF",
          light2: "#EEF3FF",
        },
        muted: "#5B6B82",
        strong: "#0F2540",
        hairline: "#E6ECF5",
        teal: "#0FB6A0",
        orange: "#F08A24",
        purple: "#7C5CFC",
      },
      fontFamily: {
        sans: ["var(--font-cairo)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        tile: "14px",
      },
      boxShadow: {
        sm: "0 4px 12px rgba(15,37,64,0.06)",
        md: "0 8px 24px rgba(15,37,64,0.08)",
        lg: "0 16px 40px rgba(15,37,64,0.14)",
        mockup: "0 24px 60px rgba(15,37,64,0.18)",
      },
      maxWidth: {
        container: "1200px",
        prose: "640px",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #2E6BF0 0%, #1D4ED8 100%)",
        "navy-gradient":
          "linear-gradient(135deg, #0F2540 0%, #0B1F3A 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
