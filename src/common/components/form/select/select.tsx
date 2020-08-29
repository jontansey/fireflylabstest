import React from "react";
import { StyledSelect } from "./select.styled";
import { Option } from "../../../types/select";

type SelectProps = {
  options: Option[];
  onChange: (value: Option) => void;
  testId?: string;
};

export const Select: React.FC<SelectProps> = ({
  options,
  onChange,
  testId = "select",
}) => {
  return (
    <StyledSelect
      data-testid={testId}
      options={options}
      onChange={onChange}
      classNamePrefix="react-select"
    />
  );
};

export default Select;
