/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        'brand-orange': '#ed5128',
        'brand-orange-hover': '#d9401b',
        'brand-dark': '#0f100a',
        'brand-charcoal': '#282828',
        'brand-muted': '#9f9f9f',
        'brand-medium': '#575756',
        'brand-surface': '#f9f9f9',
        'brand-form': '#f0f0f0',
      },
    },
  },
  plugins: [],
};
