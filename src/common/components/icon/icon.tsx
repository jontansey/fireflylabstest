import React from "react";

import Plus from "mdi-react/AddIcon";
import X from "mdi-react/CloseIcon";

import { IconWrapper } from "./icon.styled";
import { TestIdProps, makeTestId } from "../../../utils/testIdUtils";

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
};
export type IconProps = Props & TestIdProps;

export const Icon: React.FC<IconProps> = ({
  icon,
  size = "24",
  title = `${icon} icon`,
  testIdPrefix = "",
  testId = "icon",
  testIdSuffix = "",
  ...rest
}) => {
  const Component = icons[icon];
  if (!Component) return null;

  return (
    <IconWrapper
      role="img"
      title={title}
      data-testid={makeTestId(testIdPrefix, testId, testIdSuffix)}
      {...rest}
    >
      <Component
        size={size}
        data-testid={makeTestId(testIdPrefix, testId, icon)}
      />
    </IconWrapper>
  );
};

export default Icon;
