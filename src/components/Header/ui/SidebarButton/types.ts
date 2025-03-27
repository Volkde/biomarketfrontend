import { MouseEvent } from "react";

export interface SidebarButtonProps {
  id?: string;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}
