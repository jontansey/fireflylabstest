import React from "react";
import { ModalProvider as LibModalProvider } from "styled-react-modal";
import { ModalBackground } from "./modal.styled";

const ModalProvider: React.FC = ({ children }) => (
  <LibModalProvider backgroundComponent={ModalBackground}>
    {children}
  </LibModalProvider>
);

export default ModalProvider;
