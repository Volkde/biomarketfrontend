import { Typography } from "@mui/material";
import { StyledDiscountBadge } from "./styles";
import { DiscountBadgeProps } from "./types";

/**
 * Компонент отображения скидки на товар
 *
 * @param discount - процент скидки
 * @param size - размер компонента (small, medium, large)
 * @param position - позиция размещения (top-left, top-right, bottom-left, bottom-right)
 *
 * @example
 * // Пример использования
 * <DiscountBadge discount={20} size="medium" position="top-right" />
 */
const DiscountBadge = ({
  discount,
  size = "medium",
  position = "top-right",
}: DiscountBadgeProps) => {
  return (
    <StyledDiscountBadge position={position} size={size}>
      <Typography variant="body2" component="span">
        {discount}%
      </Typography>
    </StyledDiscountBadge>
  );
};

export default DiscountBadge;
