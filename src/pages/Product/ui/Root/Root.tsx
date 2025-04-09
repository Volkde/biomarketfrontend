import { Container } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { ProductCard, ProductCartSkeleton } from "components/ProductCard";
import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { replaceLastPathSegment } from "shared/utils/replaceLastPathSegment";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectProductsState } from "store/redux/products/selectors/selectProductsState";
import { productsActions } from "store/redux/products/slice/productsSlice";

function Root() {
  const location = useLocation();
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

  const pathname = replaceLastPathSegment(location.pathname, product?.title);

  // const handleAddToCart = async () => {
  //   // TODO: Используй redux
  // };

  // const handleFavoriteToggle = async () => {
  //   // TODO: Используй redux
  // };

  const elProduct = useMemo(() => {
    if (status === "success" && product) {
      return <ProductCard product={product} />;
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
