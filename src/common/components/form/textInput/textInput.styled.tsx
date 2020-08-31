import styled from "styled-components";

export const StyledInputContainer = styled("div")`
  display: inline-block;
  position: relative;
  margin-right: 10px;
`;

export const StyledInput = styled("input")<{ width?: string }>`
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid rgba(59, 60, 64, 0.64);
  border-radius: 0 !important;
  padding: 7px;
  font-weight: ${({ theme }) => theme.font.weightRegular};
  outline: none;
  width: ${({ width }) => (width ? width : "initial")};
  font-size: 10px;
  height: 28px;
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
