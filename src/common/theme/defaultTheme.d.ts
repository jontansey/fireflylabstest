export interface DefaultTheme {
  colors: {
    background: string;

    surface: string;
    textOnSurface: string;

    headerBackground: string;
    textOnHeader: string;

    highlightLighter: string;
    highlight: string;
    highlightDarker: string;

    border: string;
  };
  font: {
    family: string;
    atImportUrl: string;

    weightRegular: string;
    weightMedium: string;
    weightBold: string;

    defaultSize: string;
    defaultLineHeight: string;
  };
}
