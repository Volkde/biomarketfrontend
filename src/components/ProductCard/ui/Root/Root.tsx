import { Box, Link, useTheme } from "@mui/material";
import { useCallback, useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectAuthState } from "store/redux/auth/selectors/selectAuthState";
import { selectCartState } from "store/redux/cart/selectors/selectCartState";
import { cartActions } from "store/redux/cart/slice/cartSlice";
import { loginModalActions } from "store/redux/ui/slice/loginModalSlice";
import { snackbarActions } from "store/redux/ui/slice/snackbarSlice";
import { selectWishlistState } from "store/redux/wishlist/selectors/selectWishlistState";
import { wishlistActions } from "store/redux/wishlist/slice/wishlistSlice";
import { AddToCartButton } from "../AddToCartButton";
import { DiscountBadge } from "../DiscountBadge";
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
  const { isLogin } = useAppSelector(selectAuthState);

  const productId = product?.id ?? -1;

  const { status: wishlistStatus, wishlist } =
    useAppSelector(selectWishlistState);

  const isFavorite = useMemo(() => {
    const ids = wishlist?.productIds ?? [];

    if (!isLogin) {
      return false;
    }

    if (wishlistStatus === "success" && ids.length > 0) {
      return ids.findIndex(item => item === productId) >= 0;
    }

    return false;
  }, [wishlistStatus, isLogin, wishlist, productId]);

  const handleFavoriteToggle = useCallback(async () => {
    try {
      if (productId < 0) {
        throw new Error("Не удалось получить id товара");
      }

      if (!isLogin) {
        return dispatch(loginModalActions.openLoginModal());
      }

      await dispatch(
        wishlistActions.fetchToggleProductInWishlist({ productId })
      ).unwrap();

      dispatch(
        snackbarActions.enqueueSnackbar({
          message: isFavorite
            ? "Товар удален из избранного"
            : "Товар добавлен избранные",
          severity: "success"
        })
      );
    } catch (error) {
      console.error("Ошибка при добавлении в избранные:", error);
    }
  }, [dispatch, isLogin, productId, isFavorite]);

  const handleAddToCart = useCallback(async () => {
    try {
      if (productId < 0) {
        throw new Error("Не удалось получить id товара");
      }

      if (!isLogin) {
        return dispatch(loginModalActions.openLoginModal());
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
  }, [dispatch, isLogin, productId]);

  const { status, cart } = useAppSelector(selectCartState);

  const isAddingToCart = useMemo(() => {
    const cartItems = cart?.items ?? [];

    if (!isLogin) {
      return false;
    }

    if (status === "success" && cartItems.length > 0) {
      return cartItems.findIndex(item => item.productId === productId) >= 0;
    }

    return false;
  }, [status, isLogin, cart, productId]);

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
      {product.discounted && <DiscountBadge />}
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
          <Price
            price={product.price}
            oldPrice={product.oldPrice}
            unitOfMeasure={product.unitOfMeasure}
          />
        </Box>
        <Rating value={product.rating} />
      </Box>
    </StyledProductCard>
  );
}

export default Root;
