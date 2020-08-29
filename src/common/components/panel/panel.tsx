import React from "react";
import {
  StyledPanelContainer,
  StyledPanelHeader,
  StyledPanelContent,
} from "./panel.styled";
import Icon from "../icon";

export type Props = {
  id?: string;
  title: string;
  canClose: boolean;
  onClose?(): void;
  testId?: string;
  //TODO size prop
};

type PanelProps = Props;

const Panel: React.FC<PanelProps> = ({
  children,
  onClose,
  title,
  testId = "panel",
  canClose,
}) => {
  return (
    <StyledPanelContainer data-testid={testId}>
      <StyledPanelHeader>
        {title}

        <Icon icon="X" onClick={onClose ?? undefined} disabled={!canClose} />
      </StyledPanelHeader>
      <StyledPanelContent>{children}</StyledPanelContent>
    </StyledPanelContainer>
  );
};

export default Panel;
