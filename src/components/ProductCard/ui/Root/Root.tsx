import { Box, Link, useTheme } from "@mui/material";
import { useCallback, useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectCartState } from "store/redux/cart/selectors/selectCartState";
import { cartActions } from "store/redux/cart/slice/cartSlice";
import { snackbarActions } from "store/redux/ui/slice/snackbarSlice";
import { AddToCartButton } from "../AddToCartButton";
import { FavoriteButton } from "../FavoriteButton";
import { Images } from "../Images";
import { Price } from "../Price";
import { Rating } from "../Rating";
import { StockStatus } from "../StockStatus";
import { StyledButtons, StyledProductCard, StyledProductTitle } from "./styles";
import { ProductCardProps } from "./types";

function Root({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const productId = product?.id ?? -1;

  // TODO: isFavorite
  const isFavorite = false;

  const handleAddToCart = useCallback(async () => {
    try {
      if (productId < 0) {
        throw new Error("Не удалось получить id товара");
      }

      await dispatch(cartActions.fetchAddProductToCart({ productId })).unwrap();
      await dispatch(cartActions.fetchGetCart());
      dispatch(
        snackbarActions.enqueueSnackbar({
          message: "Товар добавлен в корзину",
          severity: "success"
        })
      );
    } catch (error) {
      console.error("Ошибка при добавлении в корзину:", error);
    }
  }, [dispatch, productId]);

  const { status, cart } = useAppSelector(selectCartState);

  const isAddingToCart = useMemo(() => {
    const cartItems = cart?.items ?? [];

    if (status === "success" && cartItems.length > 0) {
      return cartItems.findIndex(item => item.productId === productId) > 0;
    }

    return false;
  }, [status, cart, productId]);

  const handleFavoriteToggle = useCallback(async () => {
    try {
      if (productId < 0) {
        throw new Error("Не удалось получить id товара");
      }

      // TODO: Добавь функциональность позже

      dispatch(
        snackbarActions.enqueueSnackbar({
          message: "Товар добавлен избранные",
          severity: "success"
        })
      );
    } catch (error) {
      console.error("Ошибка при добавлении в избранные:", error);
    }
  }, [dispatch, productId]);

  return (
    <StyledProductCard>
      <Link component={RouterLink} to={`/product/${product.id}`}>
        <Images
          images={[
            {
              id: 0,
              url: product.image
            }
          ]}
        />
      </Link>
      {product.inStock && <StockStatus status="in_stock" />}
      <Box className="product-content">
        <StyledButtons className="product-cart-buttons">
          <AddToCartButton
            isAddingToCart={isAddingToCart}
            onClick={handleAddToCart}
          />
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={handleFavoriteToggle}
          />
        </StyledButtons>
        <StyledProductTitle
          variant="h4"
          sx={{
            color: theme.palette.primary.main
          }}
        >
          <Link component={RouterLink} to={`/product/${product.id}`}>
            {product.title}
          </Link>
        </StyledProductTitle>
        <Box>
          <Price price={product.price} oldPrice={product.oldPrice} />
        </Box>
        <Rating value={product.rating} />
      </Box>
    </StyledProductCard>
  );
}

export default Root;
