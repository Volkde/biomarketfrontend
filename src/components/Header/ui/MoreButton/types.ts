import { MouseEvent } from "react";

export interface MoreButtonProps {
  id: string;
  open: boolean;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}
