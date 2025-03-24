import type { CSSProperties, MouseEvent } from "react";

export interface StyledButtonProps {
  disabled?: boolean;
}

export interface ButtonProps extends StyledButtonProps {
  name?: string;
  type?: "submit" | "button" | "reset";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
}
