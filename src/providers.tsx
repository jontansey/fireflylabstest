import React from "react";
import ThemeProvider from "./common/theme/themeProvider";
import { ScreenClassProvider } from "react-grid-system";
import { ModalProvider } from "./common/components/modal";

const Providers: React.FC = ({ children }) => (
  <ScreenClassProvider>
    <ThemeProvider>
      <ModalProvider>
        <>{children}</>
      </ModalProvider>
    </ThemeProvider>
  </ScreenClassProvider>
);

export default Providers;
