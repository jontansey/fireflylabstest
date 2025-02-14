import React from "react";
import { DefaultTheme, StyledComponentProps } from "styled-components";

import { StyledButton } from "./button.styled";
import Icon from "../icon";
import { AllowedIcons } from "../icon/icon";

export interface ButtonProps
  extends StyledComponentProps<"button", DefaultTheme, {}, never> {
  icon?: AllowedIcons;
  title?: string;
  testId?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  title,
  disabled,
  onClick,
  testId = "iconButton",
  ...rest
}) => (
  <StyledButton
    disabled={disabled}
    title={title}
    icon={icon}
    data-testid={testId}
    onClick={onClick}
    {...rest}
  >
    {icon && <Icon icon={icon} title={title} size="19px" />}
    {children}
  </StyledButton>
);

export default Button;
