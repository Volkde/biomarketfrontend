import styled from "@emotion/styled";
import type { StyledButtonIconProps } from "./types";

export const StyledButtonIcon = styled.button<StyledButtonIconProps>`
  --size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(var(--size) * 1.5);
  height: calc(var(--size) * 1.5);
  border: none;
  border-radius: 100%;
  color: white;
  background-color: ${({ disabled }) =>
    disabled ? "var(--secondary-color)" : "var(--primary-color)"};
  cursor: pointer;
  outline: none;
`;

export const SpanIcon = styled.span`
  font-size: var(--size);
`;
