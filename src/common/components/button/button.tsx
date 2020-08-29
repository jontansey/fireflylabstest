import React from "react";
import { DefaultTheme, StyledComponentProps } from "styled-components";

import { StyledButton } from "./button.styled";
import Icon from "../icon";
import { AllowedIcons } from "../icon/icon";

interface Props
  extends StyledComponentProps<"button", DefaultTheme, {}, never> {
  icon: AllowedIcons;
  title: string;
  testId?: string;
}

export type ButtonProps = Props;

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  title,
  disabled,
  onClick,
  testId = "iconButton",
}) => (
  <StyledButton
    disabled={disabled}
    title={title}
    icon={icon}
    data-testid={testId}
    onClick={onClick}
  >
    {icon && <Icon icon={icon} title={title} size="19px" />}
    {children}
  </StyledButton>
);

export default Button;
