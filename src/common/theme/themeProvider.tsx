import React from "react";
import {
  ThemeProvider as StyledThemeProvider,
  DefaultTheme,
} from "styled-components";
import darkTheme from "./dark";
import { GlobalStyle } from "./globalStyles";

interface IProps {
  theme?: DefaultTheme;
  children: React.ReactChild;
}

const ThemeProvider: React.FC<IProps> = ({ theme = darkTheme, children }) => (
  <StyledThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </StyledThemeProvider>
);

export default ThemeProvider;
