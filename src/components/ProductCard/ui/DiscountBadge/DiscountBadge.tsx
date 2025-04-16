import { Typography } from "@mui/material";
import { StyledDiscountBadge } from "./styles";
import { DiscountBadgeProps } from "./types";

const DiscountBadge = ({
  showLabel = true,
  size = "medium"
}: DiscountBadgeProps) => {
  return (
    <StyledDiscountBadge size={size}>
      {showLabel && (
        <Typography variant="body2" component="span">
          Discount
        </Typography>
      )}
    </StyledDiscountBadge>
  );
};

export default DiscountBadge;
