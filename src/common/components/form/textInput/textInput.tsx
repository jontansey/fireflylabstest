import React, { ChangeEvent } from "react";
import { StyledInput } from "./textInput.styled";

type HTMLInputProps = Partial<
  Pick<
    HTMLInputElement,
    "name" | "type" | "placeholder" | "value" | "type" | "maxLength"
  >
>;

type TEventHandler = (e: ChangeEvent<any>) => void;

type InputProps = HTMLInputProps & {
  error?: string | boolean;
  label: string;
  onChange?: TEventHandler;
  testId?: string;
};

export const TextInput: React.FC<InputProps> = ({ testId, ...props }) => {
  return <StyledInput type="text" data-testid={testId} {...props} />;
};

export default TextInput;
