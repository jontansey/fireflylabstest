import React from "react";

import Plus from "mdi-react/AddIcon";
import X from "mdi-react/CloseIcon";

import { IconWrapper } from "./icon.styled";

const icons = {
  Plus,
  X,
} as const;

export type AllowedIcons = keyof typeof icons;

export const AllowedIconsArray = Object.keys(icons) as AllowedIcons[];

type Props = {
  icon: AllowedIcons;
  size?: string;
  title?: string;
  onClick?: () => void;
  testId?: string;
  disabled?: boolean;
};
export type IconProps = Props;

export const Icon: React.FC<IconProps> = ({
  icon,
  size = "24",
  title = `${icon} icon`,
  testId = "icon",
  onClick,
  disabled = false,
  ...rest
}) => {
  const Component = icons[icon];
  if (!Component) return null;

  return (
    <IconWrapper
      role="img"
      title={title}
      data-testid={testId}
      clickable={!!onClick}
      disabled={disabled}
      {...rest}
    >
      <Component size={size} />
    </IconWrapper>
  );
};

export default Icon;
