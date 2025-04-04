import { Breadcrumbs } from "components/Breadcrumbs";
import { ProductCard, ProductCartSkeleton } from "components/ProductCard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectProductsState } from "store/redux/products/selectors/selectProductsState";
import { productsActions } from "store/redux/products/slice/productsSlice";

const usePageName = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  return pathSegments.length ? pathSegments[pathSegments.length - 1] : "home";
};

function Product() {
  const productId = usePageName();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      productsActions.fetchGetProductById({
        productId
      })
    );
  }, [dispatch, productId]);

  const { status, product, error } = useAppSelector(selectProductsState);

  let elProduct;
  if (status === "success" && product) {
    elProduct = <ProductCard product={product} />;
  } else if (status !== "error") {
    elProduct = <ProductCartSkeleton />;
  }

  const updateLastPathSegment = (path: string, pageName: string) => {
    const parts = path.split("/");
    parts[parts.length - 1] = pageName;
    return parts.join("/");
  };

  const pathname = updateLastPathSegment(
    location.pathname,
    (product?.title || `Product ${product?.id}`).trim()
  );

  return (
    <>
      <Breadcrumbs pathname={pathname} />
      {status !== "error" ? elProduct : <p>Error: {error}</p>}
    </>
  );
}

export default Product;
