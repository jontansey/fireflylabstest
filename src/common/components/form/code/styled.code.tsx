import styled from "styled-components";
import { customScrollBar } from "../../../theme/mixins";

export const StyledCodeContainer = styled("div")`
  display: block;
  position: relative;
  margin-right: 10px;
  margin-top: 33px;
  height: 290px;
`;

export const StyledPre = styled("pre")<{ width?: string }>`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid rgba(59, 60, 64, 0.64);
  border-radius: 0 !important;
  padding: 7px;
  font-weight: ${({ theme }) => theme.font.weightRegular};
  width: ${({ width }) => (width ? width : "initial")};
  font-size: 10px;
  height: 290px;

  ${customScrollBar}
`;

export const StyledLabel = styled("label")`
  color: ${({ theme }) => theme.colors.highlight};
  position: absolute;
  top: -6px;
  left: 7px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: ${({ theme }) => theme.font.weightBold};
  z-index: 200;
`;
