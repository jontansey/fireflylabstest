import { random } from "faker";
import { NavigationItem } from "../../common/types/navigation";

export const randomNavigationItem = (): NavigationItem => ({
  text: random.words(2),
  url: "#",
});

export const randomNavigationItems = (count = 10): NavigationItem[] =>
  [...Array(count)].map(() => randomNavigationItem());
