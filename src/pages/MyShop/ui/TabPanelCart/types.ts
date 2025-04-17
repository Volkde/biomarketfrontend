import { Order } from "types/Order";
import { Seller } from "types/Seller";

export interface TabPanelCartProps {
  isLogin?: boolean;
  isSeller?: boolean;
  sellerId?: number;
  seller?: Seller;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Order;
  label: string;
  numeric: boolean;
}

export type OrderSort = "asc" | "desc";

export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Order
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: OrderSort;
  orderBy: string;
  rowCount: number;
}

export interface EnhancedTableToolbarProps {
  numSelected: number;
}
