import { Box, Button, Grid, Tooltip, Typography } from "@mui/material";
import { useCallback } from "react";
import { useAppDispatch } from "store/hooks";
import { cartActions } from "store/redux/cart/slice/cartSlice";
import { snackbarActions } from "store/redux/ui/slice/snackbarSlice";
import { CartItemProps } from "./types";

function CartItem({ value }: CartItemProps) {
  const dispatch = useAppDispatch();

  const handleRemove = useCallback(async () => {
    try {
      await dispatch(
        cartActions.fetchRemoveProductFromCart({ productId: value.productId })
      ).unwrap();

      dispatch(
        snackbarActions.enqueueSnackbar({
          message: "Товар удален из корзины",
          severity: "success"
        })
      );
    } catch (error) {
      console.error("Ошибка при добавлении в корзину:", error);
    }
  }, [dispatch, value]);

  return (
    <Grid container direction="row" spacing={2}>
      <img width={50} height={50} src={value.image} />
      <Box sx={{ flexGrow: 1, padding: 0 }}>
        <Typography>{value.title}</Typography>
        <Typography>
          {value.quantity} {value.unitOfMeasure}
        </Typography>
        <Typography>${value.totalItemPrice}</Typography>

        <Tooltip title="Remove from cart">
          <Button onClick={handleRemove}>Remove</Button>
        </Tooltip>
      </Box>
    </Grid>
  );
}

export default CartItem;
