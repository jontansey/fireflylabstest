import styled from "styled-components";

export const StyledPanelContainer = styled("div")`
  border: 1px solid ${({ theme }) => theme.colors.border};
  min-width: 482px;
  min-height: 255px;
  margin: 8px;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const StyledPanelHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  height: 26px;
  background-color: ${({ theme }) => theme.colors.headerBackground};
  color: ${({ theme }) => theme.colors.textOnHeader};
  font-weight: ${({ theme }) => theme.font.weightMedium};
`;

export const StyledPanelContent = styled("div")`
  display: flex;
  padding: 15px;
  flex: 1;
  color: ${({ theme }) => theme.colors.textOnHeader};
  font-weight: ${({ theme }) => theme.font.weightMedium};
`;
