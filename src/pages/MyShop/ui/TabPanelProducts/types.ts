import { Seller } from "types/Seller";

export interface TabPanelProductsProps {
  isLogin?: boolean;
  isSeller?: boolean;
  sellerId?: number;
  seller?: Seller;
}
