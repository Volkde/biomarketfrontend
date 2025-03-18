import type { CSSProperties, ReactNode } from "react";

export interface StyledFlexBoxProps {
  direction?: "column" | "row";
}

export interface FlexBoxProps extends StyledFlexBoxProps {
  style?: CSSProperties;
  children?: ReactNode;
}
