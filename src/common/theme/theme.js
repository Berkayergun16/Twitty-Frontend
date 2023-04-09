import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    mode: {
      light: {
        primary: "white",
        secondary: "gray",
        background: "white",
        text: "black",
        buttonBg: "black",
        sliderDot: "#000",
        activeTintColor: "black",
        tabBarIconColor: "black",
      },
      dark: {
        primary: "#576CBC",
        secondary: "gray",
        background: "black",
        text: "white",
        buttonBg: "#E26310",
        sliderDot: "#ccc",
        activeTintColor: "#E26310",
        tabBarIconColor: "white",
      },
    },
  },

  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
});
