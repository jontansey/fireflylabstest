import React from "react";
import {
  StyledPanelContainer,
  StyledPanelHeader,
  StyledPanelContent,
} from "./panel.styled";
import { TestIdProps, makeTestId } from "../../../utils/testIdUtils";
import noop from "../../../utils/dummyData/noop";
import Icon from "../icon";

export type Props = {
  id?: string;
  title: string;
  canClose: boolean;
  onClose?(): void;
};

type PanelProps = Props & TestIdProps;

const Panel: React.FC<PanelProps> = ({
  children,
  onClose,
  title,
  testIdPrefix = "",
  testId = "panel",
}) => {
  return (
    <StyledPanelContainer data-testid={makeTestId(testIdPrefix, testId)}>
      <StyledPanelHeader
        data-testid={makeTestId(testIdPrefix, testId, "panelHeader")}
      >
        {title}

        <Icon icon="X" onClick={onClose ?? noop} />
      </StyledPanelHeader>
      <StyledPanelContent
        data-testid={makeTestId(testIdPrefix, testId, "panelContent")}
      >
        {children}
      </StyledPanelContent>
    </StyledPanelContainer>
  );
};

export default Panel;
