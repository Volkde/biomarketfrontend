import { ProductCard, ProductCartSkeleton } from "components/ProductCard";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectProductsState } from "store/redux/products/selectors/selectProductsState";
import { productsActions } from "store/redux/products/slice/productsSlice";

function ProductPage() {
  const dispatch = useAppDispatch();
  const productId = 1;
  useEffect(() => {
    dispatch(
      productsActions.fetchGetProductById({
        productId
      })
    );
  }, [dispatch, productId]);

  const { status, product, error } = useAppSelector(selectProductsState);

  const handleAddToCart = async () => {
    // TODO: Используй redux
  };

  const handleFavoriteToggle = async () => {
    // TODO: Используй redux
  };

  const elProduct = useMemo(() => {
    if (status === "success" && product) {
      return <ProductCard product={product} />;
    } else if (status !== "error") {
      return <ProductCartSkeleton />;
    }

    return null;
  }, [status, product]);

  return elProduct;
}

export default ProductPage;
