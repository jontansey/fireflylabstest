import { DefaultTheme } from "styled-components";

const darkTheme: DefaultTheme = {
  colors: {
    background: "#0C1117",

    surface: "#1A1D24",
    textOnSurface: "#FFFFFF",

    navigationBackground: "#363E4A",
    navigationSelectedBackground: "#6C7D85",
    textOnNavigation: "#FFFFFF",

    headerBackground: "#343A49",
    textOnHeader: "#FFFFFF",

    highlightDarker: "#13455D",
    highlight: "#06C6DD",
    highlightLighter: "#00ADF8",

    border: "#343A49",
  },
  font: {
    weightRegular: "400",
    weightMedium: "500",
    weightBold: "700",

    defaultSize: "12px",
    defaultLineHeight: "14px",
  },
};

export default darkTheme;
