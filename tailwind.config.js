/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        MontserratBlack: ["Montserrat-Black"],
        MontserratBlackItalic: ["Montserrat-BlackItalic"],
        MontserratBold: ["Montserrat-Bold"],
        MontserratBoldItalic: ["Montserrat-BoldItalic"],
        MontserratExtraBold: ["Montserrat-ExtraBold"],
        MontserratExtraLight: ["Montserrat-ExtraLight"],
        MontserratExtraLightItalic: ["Montserrat-ExtraLightItalic"],
        MontserratItalic: ["Montserrat-Italic"],
        MontserratLight: ["Montserrat-Light"],
        MontserratLightItalic: ["Montserrat-LightItalic"],
        MontserratMedium: ["Montserrat-Medium"],
        MontserratMediumItalic: ["Montserrat-MediumItalic"],
        MontserratRegular: ["Montserrat-Regular"],
        MontserratSemiBold: ["Montserrat-SemiBold"],
        MontserratSemiBoldItalic: ["Montserrat-SemiBoldItalic"],
        MontserratThin: ["Montserrat-Thin"],
        MontserratThinItalic: ["Montserrat-ThinItalic"],
      },
      colors: {
        ...colors,
        primaryText: "#303030",
      }
    },
  },
  plugins: [],
}

