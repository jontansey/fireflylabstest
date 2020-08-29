import { default as Select } from "react-select";
import styled from "styled-components";

type StyledSelectProps = {
  disabled: boolean;
  width?: string;
};

export const StyledSelect = styled(Select)<StyledSelectProps>`
  .react-select__control {
    width: ${({ width }) => width ?? "340px"};
    min-height: initial;
    height: 28px;
    margin-right: 15px;

    z-index: 100;
    border-color: ${({ theme }) => theme.colors.border}!important;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textOnSurface};
    border-radius: 0;

    &.react-select__control--is-disabled {
      background-color: ${({ theme }) => theme.colors.surface};
      color: ${({ theme }) => theme.colors.textOnSurface};
      opacity: 0.2;
    }
  }

  .react-select__control--is-focused {
    box-shadow: none;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__value-container {
    height: 28px;
    padding-top: 0;
    padding-bottom: 0;
    border-radius: 0;
    font-weight: ${({ theme }) => theme.font.weightRegular};
  }

  .react-select__single-value {
    margin: 0;
    color: ${({ theme }) => theme.colors.textOnSurface};
    opacity: 0.4;
    font-weight: ${({ theme }) => theme.font.weightRegular};
  }

  .react-select__indicators,
  .react-select__indicator {
    padding: 4px 2px;
    height: 28px;
    svg {
      display: block;
      color: ${({ theme }) => theme.colors.textOnSurface};
    }
  }

  .react-select__menu {
    padding: 0;
    margin: 0;
    margin-top: -1px;
    width: ${({ width }) => width ?? "340px"};
    z-index: 101;
    border-radius: 0;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textOnSurface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-top: 0;
  }

  .react-select__option {
    padding: 3px 10px;
    height: 20px;
    font-weight: ${({ theme }) => theme.font.weightLight}!important;
    font-size: 12px;
    line-height: 14px;

    &.react-select__option--is-focused {
      background-color: ${({ theme }) => theme.colors.highlightDarker};
      color: ${({ theme }) => theme.colors.textOnSurface};
    }

    &.react-select__option--is-selected {
      font-weight: bold;
      background-color: ${({ theme }) => theme.colors.highlightDarker};
      color: ${({ theme }) => theme.colors.textOnSurface};
    }
  }
`;

//TODO custom scrollbar
