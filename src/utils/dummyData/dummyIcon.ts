import {
  AllowedIcons,
  AllowedIconsArray,
} from "../../common/components/icon/icon";

export const randomIcon = (): AllowedIcons => {
  return AllowedIconsArray[
    Math.floor(Math.random() * (AllowedIconsArray.length - 1 - 0 + 1)) + 0
  ];
};
