import styled from "styled-components";

export const StyledNavigationContainer = styled("div")`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  margin: 0 -15px;
`;

export const StyledNavigation = styled("a")<{ isActive: boolean }>`
  display: inline-flex;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.colors.surface};
  padding: 0 15px;
  height: 20px;
  background-color: ${({ theme, isActive }) =>
    isActive
      ? theme.colors.navigationSelectedBackground
      : theme.colors.navigationBackground};
  color: ${({ theme }) => theme.colors.textOnNavigation};
`;
