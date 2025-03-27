import { MouseEvent } from "react";

export interface WishlistButtonProps {
  id: string;
  wishlistItemsCount: number;
  onClick: (event: MouseEvent<HTMLElement>) => void;
}
