import { type Config } from "tailwindcss";
import typography from "tailwindcss/typography";

export default {
  content: ["{routes,islands,components}/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Primary - Deep Orange for main brand identity
        // Use for: Headers, primary buttons, key elements
        primary: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316", // Base primary color
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
        },
        // Secondary - Rich Purple for supporting elements
        // Use for: Secondary buttons, accents, featured content
        secondary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7", // Base secondary color
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
        },
        light: {
          50: "#fefce8",
          100: "#fff8e5",
          200: "#ffefd4",
          300: "#ffe5c2",
          400: "#ffd9aa",
          500: "#ffc891", // Base light color
          600: "#ffb777",
          700: "#ffa15c",
          800: "#ff8b42",
          900: "#ff7528",
        },
        // Accent - Warm Rose for highlights
        // Use for: Special highlights, call-to-actions
        accent: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e", // Base accent color
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
        // Neutral - Warm Gray for text and subtle elements
        // Use for: Body text, borders, subtle backgrounds
        neutral: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c", // Base neutral color
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
      },
    },
  },
  plugins: [typography()],
} satisfies Config;
