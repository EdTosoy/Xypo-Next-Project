module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        Hero: "url('/images/background.png')",

        "footer-texture": "url('/img/footer-texture.png')",
      }),

      colors: {
        pink: "#fab3c4",
        darkPink: "#e2899e",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
