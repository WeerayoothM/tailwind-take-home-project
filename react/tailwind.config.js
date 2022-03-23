const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
};
