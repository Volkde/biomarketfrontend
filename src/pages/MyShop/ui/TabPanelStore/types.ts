import { Seller } from "types/Seller";

export interface TabPanelStoreProps {
  isLogin?: boolean;
  isSeller?: boolean;
  sellerId?: number;
  seller?: Seller;
}
