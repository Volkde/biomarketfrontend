import { Typography } from "@mui/material";
import { StyledDiscountBadge } from "./styles";
import { DiscountBadgeProps } from "./types";

const DiscountBadge = ({
  discount,
  size = "medium",
  position = "top-right"
}: DiscountBadgeProps) => {
  return (
    <StyledDiscountBadge position={position} size={size}>
      <Typography variant="body2" component="span">
        {discount ? `-${discount}%` : ""}
      </Typography>
    </StyledDiscountBadge>
  );
};

export default DiscountBadge;
