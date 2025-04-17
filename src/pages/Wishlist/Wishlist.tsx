import { Container, Grid, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { ProductCard, ProductCartSkeleton } from "components/ProductCard";
import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectAuthState } from "store/redux/auth/selectors/selectAuthState";
import { selectProductsState } from "store/redux/products/selectors/selectProductsState";
import { productsActions } from "store/redux/products/slice/productsSlice";
import { loginModalActions } from "store/redux/ui/slice/loginModalSlice";
import { selectWishlistState } from "store/redux/wishlist/selectors/selectWishlistState";

function Wishlist() {
  const { t } = useTranslation("page-wishlist");
  const dispatch = useAppDispatch();
  const { isLogin } = useAppSelector(selectAuthState);

  useEffect(() => {
    dispatch(productsActions.fetchGetProducts({}));
  }, [dispatch]);

  const { products = [], error } = useAppSelector(selectProductsState);

  const { status: wishlistStatus, wishlist } =
    useAppSelector(selectWishlistState);

  const wishlistProducts = useMemo(() => {
    const ids = wishlist?.productIds ?? [];

    if (wishlistStatus === "success" && ids.length > 0) {
      return products.filter(product => {
        return product.id && ids.includes(product.id);
      });
    }
    return [];
  }, [wishlistStatus, wishlist, products]);

  const elProducts = useMemo(() => {
    if (!isLogin) {
      dispatch(loginModalActions.openLoginModal());

      return (
        <Typography variant="body1" component="p" gutterBottom>
          {t("You are not logged in.")}
        </Typography>
      );
    }

    if (wishlistStatus === "success" && wishlistProducts.length > 0) {
      return wishlistProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ));
    } else if (wishlistStatus === "success" && !wishlistProducts.length) {
      return (
        <Typography variant="body1" component="p" gutterBottom>
          {t("Your wishlist is empty.")}
        </Typography>
      );
    } else if (wishlistStatus !== "error") {
      return Array.from({ length: 3 }).map((_, index) => (
        <ProductCartSkeleton key={index} />
      ));
    }

    return null;
  }, [dispatch, isLogin, wishlistStatus, wishlistProducts]);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        {t("title")}
      </Typography>
      {wishlistStatus !== "error" ? (
        <Grid
          container
          wrap="wrap"
          justifyContent="center"
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {elProducts}
        </Grid>
      ) : (
        <p>Error: {error || "Something went wrong"}</p>
      )}
    </Container>
  );
}

export default Wishlist;
