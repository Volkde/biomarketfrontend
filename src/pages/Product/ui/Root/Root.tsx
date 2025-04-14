import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { ProductCartSkeleton } from "components/ProductCard";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { cartActions } from "store/redux/cart/slice/cartSlice";
import { selectProductsState } from "store/redux/products/selectors/selectProductsState";
import { productsActions } from "store/redux/products/slice/productsSlice";
import { snackbarActions } from "store/redux/ui/slice/snackbarSlice";
import { selectWishlistState } from "store/redux/wishlist/selectors/selectWishlistState";
import { wishlistActions } from "store/redux/wishlist/slice/wishlistSlice";
import { FavoriteButton } from "../FavoriteButton";

function Root() {
  const { t } = useTranslation("page-product");
  const dispatch = useAppDispatch();
  const location = useLocation();

  const productId = useMemo(() => {
    const parts = location.pathname.split("/").filter(Boolean);
    const last = parts[parts.length - 1];
    const id = Number(last);
    return Number.isNaN(id) ? -1 : id;
  }, [location.pathname]);

  useEffect(() => {
    if (productId > 0) {
      dispatch(productsActions.fetchGetProductById({ productId }));
    }
  }, [dispatch, productId]);

  const {
    status: productsStatus,
    product,
    error: productsError
  } = useAppSelector(selectProductsState);

  const pathname = product?.title ? `/shop/${product.title}` : "/shop";

  const { status: wishlistStatus, wishlist } =
    useAppSelector(selectWishlistState);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const ids = wishlist?.productIds ?? [];

    if (wishlistStatus === "success" && ids.length > 0) {
      setIsFavorite(ids.includes(productId));
    } else {
      setIsFavorite(false);
    }
  }, [wishlistStatus, wishlist, productId]);

  const handleFavoriteToggle = useCallback(async () => {
    try {
      if (productId < 0) {
        throw new Error("Не удалось получить id товара");
      }

      await dispatch(
        wishlistActions.fetchToggleProductInWishlist({ productId })
      ).unwrap();

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

  const elProduct = useMemo(() => {
    if (productsStatus === "success" && product) {
      return (
        <Grid container direction="row" gap={5}>
          <Box sx={{ width: "45%" }}>
            <img
              src={product.image}
              alt={product.title}
              onError={e => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/fallback.jpg";
              }}
              style={{ width: "100%" }}
            />
          </Box>
          <Box>
            <Typography variant="h2">{product.title}</Typography>
            <Box>
              <Typography component="span">Price:</Typography>
              <ins>
                <bdi>
                  <span>$</span>
                  <span>{product.price}</span>
                </bdi>
              </ins>
            </Box>
            {product.oldPrice && (
              <Box>
                <Typography component="span">Old price:</Typography>
                <ins>
                  <bdi>
                    <span>$</span>
                    <span>{product.oldPrice}</span>
                  </bdi>
                </ins>
              </Box>
            )}
            <Typography component="p">{product.description}</Typography>
            <Button variant="contained" onClick={handleAddToCart}>
              Add to cart
            </Button>
            <FavoriteButton
              isFavorite={isFavorite}
              onToggle={handleFavoriteToggle}
            />
          </Box>
        </Grid>
      );
    }

    if (productsStatus !== "error") {
      return <ProductCartSkeleton />;
    }

    return null;
  }, [productsStatus, product, handleAddToCart, handleFavoriteToggle]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs pathname={pathname} />
      {productsStatus !== "error" ? (
        elProduct
      ) : (
        <Typography color="error">
          Error: {productsError || "Something went wrong"}
        </Typography>
      )}
    </Container>
  );
}

export default Root;
