import { Seller } from "types/Seller";

export interface TabPanelHistoryProps {
  isLogin?: boolean;
  isSeller?: boolean;
  sellerId?: number;
  seller?: Seller;
}
