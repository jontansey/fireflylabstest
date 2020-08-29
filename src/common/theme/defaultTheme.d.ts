export interface DefaultTheme {
  colors: {
    background: string;

    surface: string;
    textOnSurface: string;

    navigationBackground: string;
    navigationSelectedBackground: string;
    textOnNavigation: string;

    headerBackground: string;
    textOnHeader: string;

    highlightLighter: string;
    highlight: string;
    highlightDarker: string;

    border: string;
  };

  button: {
    boarderColor: string;
    textColor: string;

    hoverBackground: string;
    hoverBorder: string;
  };

  font: {
    weightLight: string;
    weightRegular: string;
    weightMedium: string;
    weightBold: string;

    defaultSize: string;
    defaultLineHeight: string;
  };
}
