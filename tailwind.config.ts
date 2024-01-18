import type { Config } from 'tailwindcss';
const { fontFamily } = require("tailwindcss/defaultTheme");
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "bubble-gum": colors.blue
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      }
    },
  },
  plugins: [],
}
export default config
