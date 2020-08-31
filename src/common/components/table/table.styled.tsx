import styled from "styled-components";

export const StyledTable = styled("table")`
  width: 100%;
  margin-top: 10px;
  position: relative;
`;

export const StyledTHead = styled("thead")`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const StyledTH = styled("th")`
  height: 24px;
  padding: 0 12px;
  text-align: left;

  font-weight: ${({ theme }) => theme.font.weightRegular};
  color: ${({ theme }) => theme.table.headerFontColor};
  border-right: 0.8px dotted rgba(101, 100, 101, 0.72);
  :last-child {
    border: none;
  }
`;

export const StyledTD = styled("td")<{ displayCenter?: boolean }>`
  height: 28px;
  padding-left: 12px;

  text-align: ${({ displayCenter }) => (displayCenter ? "center" : "left")};

  font-weight: ${({ theme }) => theme.font.weightRegular};
  color: ${({ theme }) => theme.table.fontColor};

  border-right: 0.8px dotted rgba(101, 100, 101, 0.72);

  :last-child {
    border: none;
  }
`;
