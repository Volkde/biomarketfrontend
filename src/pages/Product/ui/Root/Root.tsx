import { FavoriteBorder as FavoriteBorderIcon } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { ProductCartSkeleton } from "components/ProductCard";
import { useCallback, useEffect, useMemo } from "react";
import { useLocation } from "react-router";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { cartActions } from "store/redux/cart/slice/cartSlice";
import { selectProductsState } from "store/redux/products/selectors/selectProductsState";
import { productsActions } from "store/redux/products/slice/productsSlice";
import { selectUsersState } from "store/redux/users/selectors/selectUsersState";

function Root() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const productId = useMemo(() => {
    const parts = location.pathname.split("/").filter(Boolean);
    const last = parts[parts.length - 1];
    const id = Number(last);
    return Number.isNaN(id) ? -1 : id;
  }, [location.pathname]);

  const { user } = useAppSelector(selectUsersState);
  const userId = user?.id ?? -1;

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

  const handleAddToCart = useCallback(() => {
    if (userId < 0 || productId < 0) return;

    dispatch(
      cartActions.fetchAddProductToCart({
        userId,
        productId
      })
    );
  }, [dispatch, userId, productId]);

  const handleFavoriteToggle = useCallback(() => {
    // TODO: Добавь функциональность позже
  }, []);

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
            <Button onClick={handleFavoriteToggle}>
              <FavoriteBorderIcon />
            </Button>
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
