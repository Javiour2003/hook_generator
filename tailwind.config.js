/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aliceblue: "#e0f4fd",
        black: "#000",
        mediumaquamarine: "#98e9cc",
        gainsboro: "#d9d9d9",
        violet: {
          "100": "#e38ef9",
          "200": "#e38df9",
        },
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "archivo-black": "'Archivo Black'",
        "baloo-chettan": "'Baloo Chettan'",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      "21xl": "40px",
      "17xl": "36px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
