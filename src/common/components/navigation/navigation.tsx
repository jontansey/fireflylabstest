import React, { useEffect, useState } from "react";
import { NavigationItem } from "../../types/navigation";
import { randomNavigationItems } from "../../../utils/dummyData/dummyNavigation";
import {
  StyledNavigationContainer,
  StyledNavigation,
} from "./navigation.styled";

const currentURL = "screener";

const Navigation: React.FC = () => {
  const [navigationItems, setNavigationItems] = useState<NavigationItem[]>([]);

  useEffect(() => {
    setNavigationItems([
      ...randomNavigationItems(),
      { text: "Screener", url: "screener" },
      { text: "+", url: "add" },
    ]);
  }, []);

  return (
    <StyledNavigationContainer>
      <StyledNavigation href="#" isActive={false}>
        other
      </StyledNavigation>
      <br />
      {navigationItems.map(({ url, text }) => (
        <StyledNavigation href={url} isActive={url === currentURL}>
          {text}
        </StyledNavigation>
      ))}
    </StyledNavigationContainer>
  );
};

export default Navigation;
