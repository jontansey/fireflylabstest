import React, { ChangeEvent } from "react";
import {
  StyledInput,
  StyledLabel,
  StyledInputContainer,
} from "./textInput.styled";

type HTMLInputProps = Partial<
  Pick<
    HTMLInputElement,
    | "name"
    | "type"
    | "placeholder"
    | "value"
    | "type"
    | "maxLength"
    | "disabled"
  >
>;

type TEventHandler = (e: ChangeEvent<any>) => void;

type InputProps = HTMLInputProps & {
  error?: string | boolean;
  label: string;
  onChange?: TEventHandler;
  testId?: string;
  width?: string;
};

export const TextInput: React.FC<InputProps> = ({
  testId,
  label,
  ...props
}) => {
  return (
    <StyledInputContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput type="text" data-testid={testId} {...props} />
    </StyledInputContainer>
  );
};

export default TextInput;
