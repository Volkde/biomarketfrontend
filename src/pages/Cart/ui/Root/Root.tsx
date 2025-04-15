import {
  Box,
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogTitle,
  Link,
  Alert as MuiAlert,
  TextField,
  Typography
} from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectAuthState } from "store/redux/auth/selectors/selectAuthState";
import { selectCartState } from "store/redux/cart/selectors/selectCartState";
import { cartActions } from "store/redux/cart/slice/cartSlice";
import { snackbarActions } from "store/redux/ui/slice/snackbarSlice";
import { CartItem } from "../CartItem";
import { Actions, List, Total, Wrapper } from "./styles";

function Root() {
  const { t } = useTranslation("page-cart");
  const dispatch = useAppDispatch();
  const { isLogin } = useAppSelector(selectAuthState);

  const [removeDialog, setRemoveDialog] = useState<{
    open: boolean;
    productId: number | null;
  }>({ open: false, productId: null });

  // Promo code state
  const [promo, setPromo] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    dispatch(cartActions.fetchGetCart());
  }, [dispatch]);

  const { cart, status, error } = useAppSelector(selectCartState);

  const updateQuantity = (productId: number, delta: number) => {
    const item = cart?.items.find(i => i.productId === productId);
    if (!item) return;
    const newQuantity = Math.max(1, item.quantity + delta);
    dispatch(
      cartActions.fetchUpdateProductQuantity({
        productId,
        quantity: newQuantity
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
  };

  const removeItem = (productId: number) => {
    setRemoveDialog({ open: true, productId });
  };

  const confirmRemove = () => {
    if (removeDialog.productId == null) return;
    dispatch(
      cartActions.fetchRemoveProductFromCart({
        productId: removeDialog.productId
      })
    )
      .unwrap()
      .then(() => {
        dispatch(
          snackbarActions.enqueueSnackbar({
            message: t("itemRemoved", { defaultValue: "Товар удалён" }),
            severity: "success"
          })
        );
      })
      .catch(() => {
        dispatch(
          snackbarActions.enqueueSnackbar({
            message: t("removeError", {
              defaultValue: "Ошибка удаления товара"
            }),
            severity: "error"
          })
        );
      });
    setRemoveDialog({ open: false, productId: null });
  };

  const handlePromoApply = () => {
    // FIXME: Имитация применения промокода (реализовать через Redux если есть бекенд)
    if (promo.toLowerCase() === "sale10") {
      setDiscount(0.1);
      setPromoApplied(true);
      setPromoError("");
      dispatch(
        snackbarActions.enqueueSnackbar({
          message: t("promoApplied", { defaultValue: "Промокод применён!" }),
          severity: "success"
        })
      );
    } else {
      setPromoApplied(false);
      setPromoError(
        t("promoInvalid", { defaultValue: "Некорректный промокод" })
      );
      dispatch(
        snackbarActions.enqueueSnackbar({
          message: t("promoInvalid", { defaultValue: "Некорректный промокод" }),
          severity: "error"
        })
      );
    }
  };

  if (status === "loading")
    return (
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 300
        }}
      >
        <CircularProgress />
      </Box>
    );

  if (status === "error") {
    return (
      <Typography variant="body1" component="p" gutterBottom>
        {error ?? "Failed to load cart"}
      </Typography>
    );
  }

  if (!cart?.items?.length) {
    return (
      <Wrapper style={{ textAlign: "center", padding: "48px 0" }}>
        <img
          src="/empty-cart.svg"
          alt="empty"
          style={{ maxWidth: 180, marginBottom: 24 }}
        />
        <Typography variant="h5" gutterBottom>
          {t("empty", { defaultValue: "Ваша корзина пуста" })}
        </Typography>
        <Button variant="contained" href="/products" sx={{ mt: 2 }}>
          {t("continueShopping")}
        </Button>
      </Wrapper>
    );
  }

  const subtotal = cart.items.reduce(
    (sum, item) => sum + item.totalItemPrice,
    0
  );
  const discountAmount = promoApplied ? subtotal * discount : 0;
  const total = subtotal - discountAmount;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        {t("title")}
      </Typography>

      {isLogin ? (
        <>
          <List>
            {cart.items.map(item => (
              <CartItem
                key={item.productId}
                value={item}
                onQuantityChange={updateQuantity}
                onRemove={removeItem}
              />
            ))}
          </List>

          {/* Promo code */}
          <div
            style={{
              marginTop: 24,
              marginBottom: 8,
              display: "flex",
              alignItems: "center",
              gap: 8
            }}
          >
            <TextField
              label={t("promoPlaceholder", { defaultValue: "Промокод" })}
              value={promo}
              onChange={e => setPromo(e.target.value)}
              size="small"
              error={!!promoError}
              helperText={promoError}
              disabled={promoApplied}
            />
            <Button
              variant="outlined"
              onClick={handlePromoApply}
              disabled={promoApplied}
            >
              {t("applyPromo", { defaultValue: "Применить" })}
            </Button>
            {promoApplied && (
              <MuiAlert severity="success" sx={{ ml: 2 }}>
                {t("promoApplied", { defaultValue: "Промокод применён!" })}
              </MuiAlert>
            )}
          </div>

          {/* Totals */}
          <Total>
            {t("subtotal", { defaultValue: "Сумма" })}: {subtotal.toFixed(2)} €
            <br />
            {promoApplied && (
              <span style={{ color: "#388e3c" }}>
                -{discountAmount.toFixed(2)} €{" "}
                {t("discount", { defaultValue: "Скидка" })}
                <br />
              </span>
            )}
            <strong>
              {t("total")}: {total.toFixed(2)} €
            </strong>
          </Total>

          <Actions>
            <Button
              variant="outlined"
              component={Link}
              href="/products"
              sx={{
                mr: 2,
                textTransform: "none"
              }}
            >
              {t("continueShopping")}
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                dispatch(cartActions.fetchClearCart())
                  .unwrap()
                  .then(() => {
                    dispatch(
                      snackbarActions.enqueueSnackbar({
                        message: t("cartCleared", {
                          defaultValue: "Корзина очищена"
                        }),
                        severity: "success"
                      })
                    );
                  })
                  .catch(() => {
                    dispatch(
                      snackbarActions.enqueueSnackbar({
                        message: t("clearCartError", {
                          defaultValue: "Ошибка очистки корзины"
                        }),
                        severity: "error"
                      })
                    );
                  });
              }}
              disabled={!cart?.items?.length}
              sx={{
                mr: 2,
                textTransform: "none"
              }}
            >
              {t("clearCart", { defaultValue: "Очистить корзину" })}
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                if (cart?.items?.length > 0) {
                  window.location.href = "/checkout";
                }
              }}
              disabled={!cart?.items?.length}
              sx={{
                textTransform: "none"
              }}
            >
              {t("checkout")}
            </Button>
          </Actions>
        </>
      ) : (
        <p>Нужно войти в аккаунт</p>
      )}

      <Dialog
        open={removeDialog.open}
        onClose={() => setRemoveDialog({ open: false, productId: null })}
      >
        <DialogTitle>
          {t("removeConfirm", { defaultValue: "Удалить товар из корзины?" })}
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={() => setRemoveDialog({ open: false, productId: null })}
          >
            {t("cancel", { defaultValue: "Отмена" })}
          </Button>
          <Button color="error" onClick={confirmRemove}>
            {t("remove", { defaultValue: "Удалить" })}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Root;
