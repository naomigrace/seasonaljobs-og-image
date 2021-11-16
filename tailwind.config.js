module.exports = {
  important: true,
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        laborers: "url('/laborers.jpg')",
      },
      colors: {
        dolBlue: "#005ea2",
        sjBlue: "#0071bc",
        bannerBlue: "#112e51",
        dolFooterSecondary: "#e6e6e6",
        dolFooterPrimary: "#f9f9f9",
      },
      fontFamily: {
        sans: ["Source Sans Pro Web", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
