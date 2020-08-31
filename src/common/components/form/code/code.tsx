import React from "react";
import { StyledCodeContainer, StyledPre, StyledLabel } from "./styled.code";

type CodeProps = {
  label: string;
  width: string;
};

export const Code: React.FC<CodeProps> = ({ label, width, children }) => {
  return (
    <StyledCodeContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledPre width={width}>{children}</StyledPre>
    </StyledCodeContainer>
  );
};

export default Code;
