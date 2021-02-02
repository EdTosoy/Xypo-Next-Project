module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        Hero: "url('/images/background.png')",
      }),
      colors: {
        pink: "#fab3c4",
        darkPink: "#e2899e",
      },
      height: {
        "80vh": "80vh",
      },

      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
