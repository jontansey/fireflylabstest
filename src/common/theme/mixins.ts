import { css } from "styled-components";

export const customScrollBar = css`
  ::-webkit-scrollbar {
    width: 30px;
    position: relative;
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 30px 30px rgba(52, 58, 73, 0.4);
    border: solid 11px transparent;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 30px 30px rgba(6, 198, 221, 0.4);
    border: solid 11px transparent;
  }
`;
