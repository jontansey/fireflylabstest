import styled from "styled-components";

export const ActionContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 15px 15px 0 15px;
  width: 100%;
  position: absolute;
`;

export const NoReportMessage = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: center;
  flex-wrap: wrap;
  align-content: center;
  div {
    opacity: 0.4;
  }
`;

export const NewIcon = styled("img")`
  display: block;
  flex: 100%;
  margin-bottom: 11px;
`;
