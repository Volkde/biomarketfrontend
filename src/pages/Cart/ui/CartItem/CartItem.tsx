import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Remove as RemoveIcon
} from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "store/hooks";
import { cartActions } from "store/redux/cart/slice/cartSlice";
import { snackbarActions } from "store/redux/ui/slice/snackbarSlice";
import {
  CartItemContainer,
  ProductInfo,
  QuantityControls,
  RemoveButton
} from "./styles";
import { CartItemProps } from "./types";

function CartItem({ value }: CartItemProps) {
  const { t } = useTranslation("page-cart");
  const dispatch = useAppDispatch();

  const productId = value.productId;
  const productPrice = value.totalItemPrice / value.quantity;

  const handleRemove = useCallback(async () => {
    try {
      await dispatch(cartActions.fetchRemoveProductFromCart({ productId }))
        .unwrap()
        .then(() => {
          dispatch(
            snackbarActions.enqueueSnackbar({
              message: t("removeProductFromCart", {
                defaultValue: "Товар удален из корзины"
              }),
              severity: "success"
            })
          );
        })
        .catch(() => {
          dispatch(
            snackbarActions.enqueueSnackbar({
              message: t("removeProductFromCartError", {
                defaultValue: "Ошибка удаления товара из корзины"
              }),
              severity: "error"
            })
          );
        });
    } catch (error) {
      console.error("Ошибка при добавлении в корзину:", error);
    }
  }, [dispatch, productId, value]);

  const handleQuantityChange = useCallback(
    async (change: number) => {
      try {
        const quantity = value.quantity + change;

        if (quantity >= 1) {
          await dispatch(
            cartActions.fetchUpdateProductQuantity({
              productId,
              quantity
            })
          )
            .unwrap()
            .then(() => {
              dispatch(
                snackbarActions.enqueueSnackbar({
                  message: t("quantityUpdated", {
                    defaultValue: "Количество обновлено"
                  }),
                  severity: "success"
                })
              );
            })
            .catch(() => {
              dispatch(
                snackbarActions.enqueueSnackbar({
                  message: t("quantityUpdateError", {
                    defaultValue: "Ошибка обновления количества"
                  }),
                  severity: "error"
                })
              );
            });
        }
      } catch (error) {
        console.error("Ошибка при добавлении в корзину:", error);
      }
    },
    [dispatch, productId, value]
  );

  return (
    <CartItemContainer>
      <ProductInfo>
        <Typography variant="h6">{value?.title}</Typography>
        <Typography variant="body1" color="primary">
          ${productPrice?.toFixed(2)}
        </Typography>
        <Typography variant="body2">
          Total: ${value?.totalItemPrice?.toFixed(2)}
        </Typography>
      </ProductInfo>
      <QuantityControls>
        <IconButton
          onClick={() => handleQuantityChange(-1)}
          disabled={value?.quantity === 1}
        >
          <RemoveIcon />
        </IconButton>
        <Typography variant="body1">{value?.quantity}</Typography>
        <IconButton onClick={() => handleQuantityChange(1)}>
          <AddIcon />
        </IconButton>
      </QuantityControls>
      <RemoveButton onClick={handleRemove}>
        <DeleteIcon />
      </RemoveButton>
    </CartItemContainer>
  );
}

export default CartItem;
