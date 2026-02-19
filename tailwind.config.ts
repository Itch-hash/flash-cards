import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        shell: "#f7f4ea",
        ink: "#22201a",
        accent: "#e0a458",
        card: "#fffdf8",
      },
      boxShadow: {
        float: "0 18px 40px -24px rgba(0, 0, 0, 0.35)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 10% 20%, rgba(255,255,255,0.65), transparent 40%), radial-gradient(circle at 80% 0%, rgba(224,164,88,0.18), transparent 35%), radial-gradient(circle at 50% 80%, rgba(50,40,25,0.08), transparent 50%)",
      },
      fontFamily: {
        sans: ["Poppins", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
