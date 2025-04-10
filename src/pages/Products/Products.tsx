import { Container, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { ProductsGrid } from "components/ProductsGrid";
import {
  ProductsFilters,
  ProductsFilterSortBy,
  ProductsFilterSortOrder
} from "components/ProductsGrid/ui/Root/types";
import { useSearchParams } from "react-router-dom";
import { replaceLastPathSegment } from "shared/utils/replaceLastPathSegment";
import { categories } from "../../app/categories";

const getQueryParamAsNumber = (
  param: string | null,
  defaultValue: number | undefined
) => (param ? Number(param) : defaultValue);

const getQueryParamAsBoolean = (
  param: string | null,
  defaultValue: boolean | undefined
) => (param === "true" ? true : defaultValue);

function Products() {
  const [searchParams] = useSearchParams();

  const page = getQueryParamAsNumber(searchParams.get("page"), 1);
  const limit = getQueryParamAsNumber(searchParams.get("limit"), 12);

  const category = searchParams.get("category");
  const categoryName = category ? categories[category]?.title : null;
  const categoryId = category ? categories[category]?.id : null;
  const pageTitle = categoryName ? `Category: ${categoryName}` : "Shop";
  let pathname = location.pathname;

  if (categoryName) {
    pathname = replaceLastPathSegment(location.pathname, categoryName);
  }

  const filters: ProductsFilters = {};

  if (categoryId && categoryId >= 0) {
    filters.category_id = categoryId;
  }
  if (searchParams.get("search_term")) {
    filters.search_term = searchParams.get("search_term")!;
  }
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
      <Breadcrumbs pathname={pathname} />
      <Typography variant="h4" component="h1" gutterBottom>
        {pageTitle}
      </Typography>
      <ProductsGrid
        filters={filters}
        pagination={true}
        page={page}
        limit={limit}
      />
    </Container>
  );
}

export default Products;
