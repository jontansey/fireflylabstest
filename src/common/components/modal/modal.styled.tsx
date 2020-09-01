import styled from "styled-components";

export const Wrapper = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContentWrapper = styled("div")`
  width: calc(100% - 50px);
  margin-bottom: 55px;
  padding: 17px 12px 12px 12px;
  overflow: auto;
`;

export const Footer = styled("div")`
  display: flex;
  flex: 100%;
  justify-content: flex-end;

  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55px;
  background-color: ${({ theme }) => theme.colors.surface};

  padding: 12px;
`;

export const ModalBackground = styled("div")`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: flex-start;
  justify-content: center;
  padding-top: 50px;
`;
