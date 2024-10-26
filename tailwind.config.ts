import { type Config } from "tailwindcss";
import typography from 'tailwindcss/typography'

export default {
  content: [
    "{routes,islands,components}/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography(),
  ],
} satisfies Config;
