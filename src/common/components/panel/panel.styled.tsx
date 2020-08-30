import styled from "styled-components";
import { PanelProps } from "./panel";
import { customScrollBar } from "../../theme/mixins";

type ContainerProps = Pick<PanelProps, "width">;
export const StyledPanelContainer = styled("div")<ContainerProps>`
  border: 1px solid ${({ theme }) => theme.colors.border};
  min-width: 482px;
  width: ${({ width }) => width};
  min-height: 255px;
  margin: 8px;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const StyledPanelHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7px 0px 15px;
  height: 26px;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.textOnHeader};
  font-weight: ${({ theme }) => theme.font.weightMedium};
`;

type ContentProps = Pick<PanelProps, "height">;
export const StyledPanelContent = styled("div")<ContentProps>`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  color: ${({ theme }) => theme.colors.textOnHeader};
  font-weight: ${({ theme }) => theme.font.weightMedium};

  overflow: auto;
  height: ${({ height }) => height};

  ${customScrollBar}
`;
