import { Breadcrumbs, Typography } from "@mui/material";
import { ProductsGrid } from "components/ProductsGrid";
import {
  ProductsFilters,
  ProductsFilterSortBy,
  ProductsFilterSortOrder
} from "components/ProductsGrid/ui/Root/types";
import { useSearchParams } from "react-router-dom";
import { Container } from "./styles";

const getQueryParamAsNumber = (
  param: string | null,
  defaultValue: number | undefined
) => (param ? Number(param) : defaultValue);

const getQueryParamAsBoolean = (
  param: string | null,
  defaultValue: boolean | undefined
) => (param === "true" ? true : defaultValue);

export const Search = () => {
  const [searchParams] = useSearchParams();

  const page = getQueryParamAsNumber(searchParams.get("page"), 1);
  const limit = getQueryParamAsNumber(searchParams.get("limit"), 12);

  const filters: ProductsFilters = {};

  if (searchParams.get("search_term")) {
    filters.search_term = searchParams.get("search_term")!;
  }
  const pageTitle = filters.search_term
    ? `Search result: ${filters.search_term}`
    : "Search";

  if (searchParams.get("price_min")) {
    filters.price_min = getQueryParamAsNumber(
      searchParams.get("price_min"),
      undefined
    );
  }

  if (searchParams.get("price_max")) {
    filters.price_max = getQueryParamAsNumber(
      searchParams.get("price_max"),
      undefined
    );
  }
  if (searchParams.get("seller_id")) {
    filters.seller_id = getQueryParamAsNumber(
      searchParams.get("seller_id"),
      undefined
    );
  }
  if (searchParams.get("rating_min")) {
    filters.rating_min = getQueryParamAsNumber(
      searchParams.get("rating_min"),
      undefined
    );
  }
  if (getQueryParamAsBoolean(searchParams.get("in_stock"), false)) {
    filters.in_stock = true;
  }
  if (getQueryParamAsBoolean(searchParams.get("discounted"), false)) {
    filters.discounted = true;
  }

  const sort_by = searchParams.get("sort_by");
  if (sort_by && ["title", "price", "rating"].includes(sort_by)) {
    filters.sort_by = sort_by as ProductsFilterSortBy;
  }

  const sort_order = searchParams.get("sort_order");
  if (sort_order && ["asc", "desc"].includes(sort_order)) {
    filters.sort_order = sort_order as ProductsFilterSortOrder;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h2" gutterBottom>
        {pageTitle}
      </Typography>
      {filters.search_term && (
        <ProductsGrid
          filters={filters}
          pagination={true}
          page={page}
          limit={limit}
        />
      )}
    </Container>
  );
};
