import { Container, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { ProductsGrid } from "components/ProductsGrid";
import { ProductsFilters } from "components/ProductsGrid/types/ProductsFilters";
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
  // const { t } = useTranslation("page-products");
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
