import { MouseEvent } from "react";

export interface CartButtonProps {
  id: string;
  cartItemsCount: number;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}
