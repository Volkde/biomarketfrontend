import {
  AddShoppingCart as AddShoppingCartIcon,
  ShoppingCart as ShoppingCartIcon
} from "@mui/icons-material";
import { StyledButton } from "./styles";
import { AddToCartButtonProps } from "./types";

const AddToCartButton = ({
  isAddingToCart = false,
  size = "small",
  onClick
}: AddToCartButtonProps) => {
  const Icon = isAddingToCart ? ShoppingCartIcon : AddShoppingCartIcon;

  return (
    <StyledButton
      isAddingToCart={isAddingToCart}
      size={size}
      onClick={onClick}
      disabled={isAddingToCart}
    >
      <Icon />
    </StyledButton>
  );
};

export default AddToCartButton;
