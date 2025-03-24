import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";

export interface ToolbarButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  style?: CSSProperties;
}
