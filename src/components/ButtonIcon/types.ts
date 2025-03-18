import type { CSSProperties, MouseEvent } from "react";

export interface StyledButtonIconProps {
  disabled?: boolean;
}

export interface ButtonProps extends StyledButtonIconProps {
  icon?: string;
  title?: string;
  type?: "submit" | "button" | "reset";
  style?: CSSProperties;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
