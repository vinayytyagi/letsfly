/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        logo: ["var(--font-logo)", "cursive"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      colors: {
        primary: "#1A73E8",
        secondary: "#F2F2F2",
        accent: "#FFC107",
        foreground: "#171717",
      },
      transitionProperty: {
        'background-image': 'background-image',
      }
    },
  },
  plugins: [],
};
