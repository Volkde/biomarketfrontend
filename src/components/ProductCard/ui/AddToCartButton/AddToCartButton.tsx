import {
  AddShoppingCart as AddShoppingCartIcon,
  ShoppingCart as ShoppingCartIcon
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { StyledButton } from "./styles";
import { AddToCartButtonProps } from "./types";

/**
 * Add to cart button component
 * @param {AddToCartButtonProps} props - Component props
 * @param {boolean} props.isAddingToCart - Whether the item is already in cart
 * @param {"small" | "medium" | "large"} props.size - Button size
 * @param {() => void} props.onClick - Click handler
 */
const AddToCartButton = ({
  isAddingToCart = false,
  size = "small",
  onClick
}: AddToCartButtonProps) => {
  const Icon = isAddingToCart ? ShoppingCartIcon : AddShoppingCartIcon;

  return (
    <Tooltip title={isAddingToCart ? "Added to cart" : "Add to cart"}>
      <StyledButton
        isAddingToCart={isAddingToCart}
        size={size}
        onClick={onClick}
        disabled={isAddingToCart}
      >
        <Icon />
      </StyledButton>
    </Tooltip>
  );
};

export default AddToCartButton;
