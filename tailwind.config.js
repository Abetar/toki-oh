/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0f1012",
        fg: "#f5f5f5",
        accent: "#f28b1a",
        accent2: "#e63946",
        muted: "#bdbdbd",
        card: "#16181c",
        line: "#2a2e34",
        gold: "#d4af37",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// Si tu package.json tiene "type":"module", usa export default:
export default config;

// Si no te reconoce export default, cambia la última línea a:
// module.exports = config;
