/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          50: "#e5fffd",
          100: "#ccfffb",
          200: "#99fff7",
          300: "#66fff2",
          400: "#33ffee",
          500: "#00ffea",
          600: "#00ccbb",
          700: "#00998c",
          800: "#00665e",
          900: "#00332f",
          950: "#001a17",
        },
        background: {
          50: "#e5fffc",
          100: "#ccfffa",
          200: "#99fff5",
          300: "#66fff0",
          400: "#33ffeb",
          500: "#00ffe6",
          600: "#00ccb8",
          700: "#00998a",
          800: "#00665c",
          900: "#00332e",
          950: "#001a17",
        },
        primary: {
          50: "#e6feff",
          100: "#cdfdfe",
          200: "#9bfcfd",
          300: "#68fafd",
          400: "#36f9fc",
          500: "#04f7fb",
          600: "#03c6c9",
          700: "#029497",
          800: "#026364",
          900: "#013132",
          950: "#001919",
        },
        secondary: {
          50: "#e6efff",
          100: "#cddefe",
          200: "#9bbdfd",
          300: "#689cfd",
          400: "#367bfc",
          500: "#045afb",
          600: "#0348c9",
          700: "#023697",
          800: "#022464",
          900: "#011232",
          950: "#000919",
        },
        accent: {
          50: "#e6e6ff",
          100: "#cdcefe",
          200: "#9b9cfd",
          300: "#686bfd",
          400: "#3639fc",
          500: "#0408fb",
          600: "#0306c9",
          700: "#020597",
          800: "#020364",
          900: "#010232",
          950: "#000119",
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
