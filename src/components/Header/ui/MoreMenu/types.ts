import { MenuProps } from "@mui/material";
import { MouseEvent } from "react";

export interface MoreMenuProps extends MenuProps {
  login: boolean;
  cartItemsCount: number;
  wishlistItemsCount: number;
  myShopItemsCount: number;
  handleClose: () => void;
  handleAccountMenuOpen: (event: MouseEvent<HTMLElement>) => void;
}
