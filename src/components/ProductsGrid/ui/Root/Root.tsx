import { Container, Grid, Typography } from "@mui/material";
import { ProductCard, ProductCartSkeleton } from "components/ProductCard";
import { useSyncFiltersWithUrl } from "components/ProductsGrid/hooks/useSyncFiltersWithUrl";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { selectProductsState } from "store/redux/products/selectors/selectProductsState";
import { productsActions } from "store/redux/products/slice/productsSlice";
import { FiltersContext } from "../../context/FiltersContext";
import { ProductsFilters } from "../../types/ProductsFilters";
import { Filters } from "../Filters";
import { Pagination } from "../Pagination";
import { RootProps } from "./types";

function Root({
  filters: initialFilters,
  limit = 8,
  page = 1,
  pagination = false
}: RootProps) {
  const [filters, setFilters] = useState<ProductsFilters>(initialFilters ?? {});
  const dispatch = useAppDispatch();

  useSyncFiltersWithUrl(filters, setFilters);

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
    } else if (status === "success" && products.length === 0) {
      return <Typography>Нет результатов</Typography>;
    } else if (status !== "error") {
      return Array.from({ length: 8 }).map((_, index) => (
        <ProductCartSkeleton key={index} />
      ));
    }

    return null;
  }, [status, products]);

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
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
    </FiltersContext.Provider>
  );
}

export default Root;
