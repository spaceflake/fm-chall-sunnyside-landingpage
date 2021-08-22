module.exports = {
  purge: ["./dist/*.html", "./dist/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        softred: "hsl(7, 99%, 70%)",
        softerred: "hsla(7, 99%, 70%, 50%)",
        yellow: "hsl(51, 100%, 49%)",
        softyellow: "hsla(51, 100%, 49%, 50%)",
        darkdescyan: "hsl(167, 40%, 24%)",
        darkblue: "hsl(198, 62%, 26%)",
        darkmodcyan: "hsl(168, 34%, 41%)",
      },
      neutral: {
        vdarddesblue: "hsl(212, 27%, 19%)",
        vdarkgrayblue: "hsl(213, 9%, 39%)",
        darkgrayblue: "hsl(232, 10%, 55%)",
        grayblue: "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
      serif: ["Fraunces"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
