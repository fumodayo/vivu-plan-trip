/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero-bg.jpg')",
      },
      borderRadius: {
        card: "16px",
      },
      borderTopLeftRadius: {
        "t-card": "16px",
      },
      borderBottomLeftRadius: {
        "l-card": "16px",
      },
      borderTopRightRadius: {
        "tr-card": "16px",
      },
      borderBottomRightRadius: {
        "br-card": "16px",
      },
    },
  },
  plugins: [],
};
