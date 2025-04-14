import {
  Wrapper,
  Title,
  List,
  Total,
  Actions
} from "./styles";

import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { cartActions } from "store/redux/cart/slice/cartSlice";
import { CartItem } from "../../components/CartItem";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "components/Breadcrumbs";

/**
 * Cart page component with shopping cart items and actions
 * @returns {JSX.Element} Cart page component
 */
const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart, status, error } = useAppSelector((state) => state.CART);
  const { t } = useTranslation("page-cart");

  useEffect(() => {
    dispatch(cartActions.fetchGetCart());
  }, [dispatch]);

  const updateQuantity = (productId: number, delta: number) => {
    const item = cart?.items.find((i) => i.productId === productId);
    if (!item) return;
    const newQuantity = Math.max(1, item.quantity + delta);
    dispatch(cartActions.fetchUpdateProductQuantity({ productId, quantity: newQuantity }));
  };

  const removeItem = (productId: number) => {
    dispatch(cartActions.fetchRemoveProductFromCart({ productId }));
  };

  if (status === "loading") return <Wrapper>Loading...</Wrapper>;
  if (status === "error") return <Wrapper>{error ?? "Failed to load cart"}</Wrapper>;
  if (!cart?.items?.length) return <Wrapper>{t("empty")}</Wrapper>;

  const total = cart.items.reduce((sum, item) => sum + item.totalItemPrice, 0);

  return (
    <Wrapper>
      <Breadcrumbs />
      <Title>{t("title")}</Title>

      <List>
        {cart.items.map((item) => (
          <CartItem
            key={item.productId}
            product={item}
            onQuantityChange={updateQuantity}
            onRemove={removeItem}
          />
        ))}
      </List>

      <Total>{t("total")}: {total.toFixed(2)} €</Total>

      <Actions>
        <Button 
          variant="outlined" 
          component={Link} 
          href="/products" 
          sx={{
            mr: 2,
            textTransform: 'none'
          }}
        >
          {t("continueShopping")}
        </Button>
        <Button 
          variant="contained" 
          color="primary"
          onClick={() => {
            if (cart?.items?.length > 0) {
              window.location.href = '/checkout';
            }
          }}
          disabled={!cart?.items?.length}
          sx={{
            textTransform: 'none'
          }}
        >
          {t("checkout")}
        </Button>
      </Actions>
    </Wrapper>
  );
};

export default Cart;
