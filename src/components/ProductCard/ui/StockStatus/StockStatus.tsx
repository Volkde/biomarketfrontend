import { Typography } from "@mui/material";
import { StyledStockStatus } from "./styles";
import { StockStatusProps } from "./types";

const statusLabels: Record<string, string> = {
  in_stock: "In Stock",
  low_stock: "Low Stock",
  out_of_stock: "Out of Stock",
  pre_order: "Pre-Order"
};

const StockStatus = ({
  status,
  showLabel = true,
  size = "medium"
}: StockStatusProps) => {
  return (
    <StyledStockStatus status={status} size={size}>
      {showLabel && (
        <Typography variant="body2" component="span">
          {statusLabels[status]}
        </Typography>
      )}
    </StyledStockStatus>
  );
};

export default StockStatus;
