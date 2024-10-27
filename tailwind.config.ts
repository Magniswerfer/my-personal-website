import { type Config } from "tailwindcss";
import typography from 'tailwindcss/typography'

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
        colors: {
        primary: {
          orange: '#FF934F',  // Vibrant orange
          purple: '#A5668B',  // Muted purple
          light: '#EEE5E9',   // Off-white
          gray: '#7C7C7C',    // Medium gray
          dark: '#07090F',    // Nearly black
        },
      },
    },
  },
  plugins: [
    typography(),
  ],
} satisfies Config;
