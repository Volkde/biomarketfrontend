import styled from "@emotion/styled";
import type { StyledButtonProps } from "./types";

export const StyledButton = styled.button<StyledButtonProps>`
  min-width: 100px;
  min-height: 48px;
  padding: 10px 15px;
  background-color: ${({ disabled }) =>
    disabled ? "var(--secondary-color)" : "var(--primary-color)"};
  border: none;
  border-radius: var(--border-radius);
  color: white;
  font-family: Lato, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  letter-spacing: 0.5px;
  outline: none;
  cursor: pointer;
`;
