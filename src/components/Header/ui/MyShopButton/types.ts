import { MouseEvent } from "react";

export interface MyShopButtonProps {
  id: string;
  myShopItemsCount: number;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}
