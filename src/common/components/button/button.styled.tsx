import styled from "styled-components";
import { ButtonProps } from "./button";

export const StyledButton = styled("button")<ButtonProps>`
  -webkit-appearance: none;
  cursor: pointer;
  position: relative;
  backface-visibility: hidden;

  border: 1px solid ${({ theme }) => theme.button.boarderColor};
  border-radius: 2px;
  outline: none !important;

  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  padding: 0;
  margin: 0 2px;
  height: 26px;
  min-width: 106px;

  font-size: 12px;
  line-height: 16px;
  font-weight: ${({ theme }) => theme.font.weightMedium};

  color: ${({ theme }) => theme.button.textColor};
  background: transparent;

  text-decoration: none;
  text-transform: uppercase;

  transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);

  &:active,
  &:hover {
    border-color: ${({ theme }) => theme.button.hoverBorder};
    background-color: ${({ theme }) => theme.button.hoverBackground};
  }

  &:disabled {
    opacity: 0.2;
  }
`;
