import { scopedPreflightStyles, isolateInsideOfContainer } from 'tailwindcss-scoped-preflight';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  important: "#checkout-modal",
  theme: {
    extend: {
      screens: {
        "max-sm": { max: "639px" },
      },
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
          lighter: "hsl(var(--primary-lighter))",
          dark: "hsl(var(--primary-dark))",
          darker: "hsl(var(--primary-darker))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
        },
        error: {
          DEFAULT: "hsl(var(--error))",
        },
        common: {
          DEFAULT: "hsl(var(--common))",
        },
        grey: {
          DEFAULT: "hsl(var(--grey))",
          100: "hsl(var(--grey-100))",
          200: "hsl(var(--grey-200))",
          300: "hsl(var(--grey-300))",
          400: "hsl(var(--grey-400))",
          500: "hsl(var(--grey-500))",
          600: "hsl(var(--grey-600))",
          700: "hsl(var(--grey-700))",
          800: "hsl(var(--grey-800))",
        },
      },
    },
  },
  plugins: [
    scopedPreflightStyles({
      isolationStrategy: isolateInsideOfContainer('#checkout-modal', {
      }),
    }),
  ],
};
