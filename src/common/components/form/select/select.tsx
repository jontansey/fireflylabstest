import React from "react";
import { StyledSelect, StyledSelectContainer } from "./select.styled";
import { Option } from "../../../types/select";
import { StyledLabel } from "../textInput/textInput.styled";

type SelectProps = {
  options: Option[];
  onChange: (value: Option) => void;
  testId?: string;
  placeholder?: string;
  value?: Option;
  width?: string;
  label?: string;
  disabled?: boolean;
};

export const Select: React.FC<SelectProps> = ({
  options,
  onChange,
  placeholder = "select...",
  testId = "select",
  value,
  width = "330px",
  label,
  disabled,
}) => {
  return (
    <StyledSelectContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledSelect
        data-testid={testId}
        options={options}
        onChange={onChange}
        classNamePrefix="react-select"
        placeholder={placeholder}
        value={value}
        width={width}
        isDisabled={disabled}
      />
    </StyledSelectContainer>
  );
};

export default Select;
