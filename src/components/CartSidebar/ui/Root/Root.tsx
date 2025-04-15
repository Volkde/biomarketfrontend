import { Box, Button, Drawer, Grid, Toolbar, Typography } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectCartState } from "store/redux/cart/selectors/selectCartState";
import { cartActions } from "store/redux/cart/slice/cartSlice";
import { selectUiState } from "store/redux/ui/selectors/selectUiState";
import { uiActions } from "store/redux/ui/slice/uiSlice";
import { CartItem } from "../CartItem";
import { CartItemSkeleton } from "../CartItemSkeleton";
import { CloseButton } from "../CloseButton";

function CartSidebar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isCartPanelOpen } = useAppSelector(selectUiState);
  const currencySymbol = "€";

  const handleDrawerClose = () => {
    dispatch(uiActions.closeCartPanel());
  };

  useEffect(() => {
    dispatch(cartActions.fetchGetCart());
  }, [dispatch]);

  const { status, cart, error } = useAppSelector(selectCartState);

  const elCartItems = useMemo(() => {
    const cartItems = cart?.items ?? [];

    if (status === "success" && cartItems.length > 0) {
      return cartItems.map((item, i) => (
        <CartItem key={item?.productId ?? i} value={item} />
      ));
    } else if (status !== "error") {
      return Array.from({ length: 3 }).map((_, index) => (
        <CartItemSkeleton key={index} />
      ));
    }

    return null;
  }, [status, cart]);

  return (
    <Drawer
      open={isCartPanelOpen}
      onClose={handleDrawerClose}
      variant="temporary"
      anchor="right"
    >
      <Box>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              marginRight: "auto"
            }}
          >
            Shopping Cart
          </Typography>
          <CloseButton />
        </Toolbar>
      </Box>
      {status !== "error" ? (
        <Grid
          container
          direction="column"
          spacing={3}
          sx={{
            justifyContent: "flex-start",
            padding: "20px 25px"
          }}
        >
          {elCartItems}
        </Grid>
      ) : (
        <p>Error: {error || "Something went wrong"}</p>
      )}
      <Grid
        container
        direction="column"
        spacing={3}
        sx={{
          justifyContent: "flex-start",
          alignItems: "center"
        }}
      >
        <Typography>
          <strong>Subtotal:</strong> {currencySymbol}
          {cart?.totalCartPrice}
        </Typography>
        <Grid
          container
          direction="row"
          spacing={3}
          sx={{
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "10px 25px 50px"
          }}
        >
          <Button
            variant="contained"
            onClick={() => {
              navigate("/cart");
            }}
          >
            View cart
          </Button>
          <Button
            variant="contained"
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Checkout
          </Button>
        </Grid>
      </Grid>
    </Drawer>
  );
}

export default CartSidebar;
