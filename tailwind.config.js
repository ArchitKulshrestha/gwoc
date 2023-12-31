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
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        text: {
          50: "#eef3f7",
          100: "#dce6ef",
          200: "#bacede",
          300: "#97b5ce",
          400: "#749dbe",
          500: "#5284ad",
          600: "#416a8b",
          700: "#314f68",
          800: "#213545",
          900: "#101a23",
          950: "#080d11",
        },
        background: {
          50: "#eef2f6",
          100: "#dde6ee",
          200: "#bbccdd",
          300: "#99b2cc",
          400: "#7799bb",
          500: "#557faa",
          600: "#446688",
          700: "#334c66",
          800: "#223344",
          900: "#111922",
          950: "#090d11",
        },
        primary: {
          50: "#e8f3fc",
          100: "#d1e6fa",
          200: "#a3cdf5",
          300: "#75b5f0",
          400: "#479ceb",
          500: "#1983e6",
          600: "#1469b8",
          700: "#0f4f8a",
          800: "#0a345c",
          900: "#051a2e",
          950: "#030d17",
        },
        secondary: {
          50: "#efecf9",
          100: "#dfd8f3",
          200: "#c0b2e6",
          300: "#a08bda",
          400: "#8165cd",
          500: "#613ec1",
          600: "#4e329a",
          700: "#3a2574",
          800: "#27194d",
          900: "#130c27",
          950: "#0a0613",
        },
        accent: {
          50: "#e6f3fe",
          100: "#cde8fe",
          200: "#9bd1fd",
          300: "#69bafc",
          400: "#37a3fb",
          500: "#058cfa",
          600: "#0470c8",
          700: "#035496",
          800: "#023864",
          900: "#011c32",
          950: "#010e19",
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};

// https://www.realtimecolors.com/?colors=080d11-f7f9fb-2288e7-a793dc-3ba4fb&fonts=Noto%20Sans%20Symbols%202-Bubbler%20One
