import { ShoppingBasketOutlined as ShoppingBasketOutlinedIcon } from "@mui/icons-material";
import { Badge, IconButton, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { useAppSelector } from "store/hooks";
import { selectUiState } from "store/redux/ui/selectors/selectUiState";
import { uiActions } from "store/redux/ui/slice/uiSlice";
import { CartButtonProps } from "./types";

function CartButton({ id, cartItemsCount }: CartButtonProps) {
  const dispatch = useDispatch();
  const { isCartPanelOpen } = useAppSelector(selectUiState);
  const handleDrawerToggle = () => dispatch(uiActions.toggleCartPanel());

  return (
    <Tooltip title={isCartPanelOpen ? "Close cart" : "Open cart"}>
      <IconButton
        id={id}
        size="large"
        aria-label="show 4 new mails"
        aria-controls={`modal-${id}`}
        aria-haspopup="true"
        onClick={handleDrawerToggle}
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
