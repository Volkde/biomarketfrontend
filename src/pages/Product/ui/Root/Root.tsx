import { FavoriteBorder as FavoriteBorderIcon } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { ProductCartSkeleton } from "components/ProductCard";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectProductsState } from "store/redux/products/selectors/selectProductsState";
import { productsActions } from "store/redux/products/slice/productsSlice";

function Root() {
  const dispatch = useAppDispatch();

  // TODO: productId
  const productId = 1;

  useEffect(() => {
    dispatch(
      productsActions.fetchGetProductById({
        productId
      })
    );
  }, [dispatch, productId]);

  const { status, product, error } = useAppSelector(selectProductsState);

  const pathname = `/shop/${product?.title}`;

  const handleAddToCart = async () => {
    // TODO: Используй redux
  };

  const handleFavoriteToggle = async () => {
    // TODO: Используй redux
  };

  const elProduct = useMemo(() => {
    if (status === "success" && product) {
      return (
        <Grid container direction="row" gap={5}>
          <Box
            sx={{
              width: "45%"
            }}
          >
            <img
              src={product.image}
              style={{
                width: "100%"
              }}
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
    } else if (status !== "error") {
      return <ProductCartSkeleton />;
    }

    return null;
  }, [status, product]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs pathname={pathname} />
      {elProduct}
    </Container>
  );
}

export default Root;
