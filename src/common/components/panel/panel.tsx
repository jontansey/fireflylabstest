import React from "react";
import {
  StyledPanelContainer,
  StyledPanelHeader,
  StyledPanelContent,
} from "./panel.styled";
import Icon from "../icon";

type Props = {
  id?: string;
  title: string;
  canClose: boolean;
  onClose(): void;
  testId?: string;
  width?: string;
  height?: string;
};

export type PanelProps = Props;

const Panel: React.FC<PanelProps> = ({
  children,
  onClose,
  title,
  testId = "panel",
  canClose,
  width,
  height = "230px",
}) => {
  return (
    <StyledPanelContainer data-testid={testId} width={width}>
      <StyledPanelHeader>
        {title}
        <Icon icon="X" onClick={() => onClose()} disabled={!canClose} />
      </StyledPanelHeader>
      <StyledPanelContent height={height}>{children}</StyledPanelContent>
    </StyledPanelContainer>
  );
};

export default Panel;
