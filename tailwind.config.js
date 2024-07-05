/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        ghostwhite: {
          "100": "#f8f9fd",
          "200": "#f7f7ff",
        },
        dimgray: "#6a6a6a",
        midnightblue: {
          "100": "#060336",
          "200": "rgba(6, 3, 54, 0.45)",
        },
        forestgreen: "#2da247",
        blueviolet: "#4f45eb",
        darkgray: "#959595",
        darkslateblue: "#383669",
        gainsboro: "#e6e6e6",
        darkslategray: "#444",
        slategray: "#73779c",
        dodgerblue: "#6c8dff",
        mediumpurple: "#b493ff",
        skyblue: "#66daff",
        mediumslateblue: "#756bff",
        gray: "#828282",
        steelblue: {
          "100": "#0c76b4",
          "200": "#3b5a98",
        },
        deepskyblue: "#54acee",
      },
      spacing: {},
      fontFamily: {
        "space-grotesk": "'Space Grotesk'",
        "lexend-deca": "'Lexend Deca'",
      },
    },
   
  },
  plugins: [],
}