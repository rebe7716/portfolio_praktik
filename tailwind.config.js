module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      /*sort*/
      black: "#000000",
      /*hvid*/
      secondary: "#ffffff",
      /*blue*/
      blue: "#0000FF",
      /*neon*/
      neon: "#ABFF68",
      /*grey*/
      grey: "#E8E8E8",
      /*whitegrey*/
      rarewhite: "#DBDBDB",
      /*red */
      redd: "#C30000",
    },

    // fontFamily: {
    //   montserrat: "'Montserrat', sans-serif;",
    //   bebasneue: "'Bebas Neue', cursive",
    // },

    /*sæt baggrundsbillede på*/
    // extend: {
    // //   backgroundImage: {
    // //     gitter: "url('/img/gitter.png')",
    // //   },

    //   fontFamilu
    // },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
