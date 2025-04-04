import { ShoppingBasketOutlined as ShoppingBasketOutlinedIcon } from "@mui/icons-material";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { CartButtonProps } from "./types";

function CartButton({ id, cartItemsCount, onClick }: CartButtonProps) {
  return (
    <Tooltip title="Open cart">
      <IconButton
        id={id}
        size="large"
        aria-label="show 4 new mails"
        aria-controls={`modal-${id}`}
        aria-haspopup="true"
        onClick={onClick}
        color="inherit"
      >
        <Badge badgeContent={cartItemsCount} color="error">
          <ShoppingBasketOutlinedIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
}

export default CartButton;
