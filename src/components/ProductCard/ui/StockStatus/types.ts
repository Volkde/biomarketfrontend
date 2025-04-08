export interface StockStatusProps {
  status: "in_stock" | "low_stock" | "out_of_stock" | "pre_order";
  showLabel?: boolean;
  size?: "small" | "medium" | "large";
}
