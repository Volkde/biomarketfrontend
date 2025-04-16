import { Seller } from "types/Seller";

export interface TabPanelDashboardProps {
  isLogin?: boolean;
  isSeller?: boolean;
  sellerId?: number;
  seller?: Seller;
}
