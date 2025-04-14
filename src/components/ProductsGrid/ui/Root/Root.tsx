import { Container, Grid } from "@mui/material";
import { ProductCard, ProductCartSkeleton } from "components/ProductCard";
import { useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectProductsState } from "store/redux/products/selectors/selectProductsState";
import { productsActions } from "store/redux/products/slice/productsSlice";
import { Filters } from "../Filters";
import { Pagination } from "../Pagination";
import { RootProps } from "./types";

/**
 * Products grid root component with filtering and pagination
 * @param {RootProps} props - Component props
 * @param {ProductsFilters} props.filters - Products filters
 * @param {number} props.limit - Number of products per page
 * @param {number} props.page - Current page number
 * @param {boolean} props.pagination - Whether to show pagination
 */
function Root({ filters, limit = 8, page = 1, pagination = false }: RootProps) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      productsActions.fetchGetProducts({
        ...filters,
        limit,
        page
      })
    );
  }, [dispatch, filters, limit, page]);

  const {
    status,
    products = [],
    page: currentPage = 1,
    totalPages = 1,
    error
  } = useAppSelector(selectProductsState);

  const elProducts = useMemo(() => {
    if (status === "success" && products.length > 0) {
      return products.map(product => (
        <ProductCard key={product.id} product={product} />
      ));
    } else if (status !== "error") {
      return Array.from({ length: 8 }).map((_, index) => (
        <ProductCartSkeleton key={index} />
      ));
    }

    return null;
  }, [status, products]);

  return (
    <Container>
      {filters && <Filters />}
      {status !== "error" ? (
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
      {pagination && <Pagination page={currentPage} count={totalPages} />}
    </Container>
  );
}

export default Root;
