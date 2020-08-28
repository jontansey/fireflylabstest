import React from "react";
import {
  StyledPanelContainer,
  StyledPanelHeader,
  StyledPanelContent,
} from "./panel.styled";

export type Props = {
  id?: string;
  title: string;
  canClose: boolean;
  onClose?(): void;
};

const Panel: React.FC<Props> = ({ children, title }) => {
  return (
    <StyledPanelContainer>
      <StyledPanelHeader>{title}</StyledPanelHeader>
      <StyledPanelContent>{children}</StyledPanelContent>
    </StyledPanelContainer>
  );
};

export default Panel;
