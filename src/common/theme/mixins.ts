import { css } from "styled-components";

export const customScrollBar = css`
  ::-webkit-scrollbar {
    width: 20px;
    position: relative;
    background: transparent;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 20px 20px rgba(52, 58, 73, 0.4);
    border: solid 6px transparent;
  }

  ::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 20px 20px rgba(6, 198, 221, 0.4);
    border: solid 6px transparent;
  }
`;
