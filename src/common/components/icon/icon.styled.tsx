import styled from "styled-components";

export const IconWrapper = styled("i")<{
  clickable: boolean;
  disabled: boolean;
}>`
  opacity: ${({ disabled }) => (disabled ? "0.2" : "1")};
  cursor: ${({ clickable }) => (clickable ? "pointer" : "auto")};
  svg {
    display: block;
  }
`;

export const ComboWrapper = styled.span`
  position: relative;

  & > *:nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
    transform: scale(0.67) translate(33%, 33%);
  }

  & > *:nth-child(3) {
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    transform: scale(0.5) translate(45%, 45%);
  }
`;
