import React from "react";
import ThemeProvider from "./common/theme/themeProvider";
import { ScreenClassProvider } from "react-grid-system";

const Providers: React.FC = ({ children }) => (
  <ScreenClassProvider>
    <ThemeProvider>
      <>{children}</>
    </ThemeProvider>
  </ScreenClassProvider>
);

export default Providers;
