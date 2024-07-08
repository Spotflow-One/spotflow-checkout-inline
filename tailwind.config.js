/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(var(--primary))",
          light: "hsl(var(--primary-light))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
        },
        common: {
          DEFAULT: "hsl(var(--common))",
        },
        grey: {
          DEFAULT: "hsl(var(--grey))",
          "500": "hsl(var(--grey-500))",
        }
      },
    },
  },
  plugins: [],
};
