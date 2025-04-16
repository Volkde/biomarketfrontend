import { Seller } from "types/Seller";

export interface TabPanelCartProps {
  isLogin?: boolean;
  isSeller?: boolean;
  sellerId?: number;
  seller?: Seller;
}
