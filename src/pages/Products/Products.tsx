import { Container, Typography } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { ProductsGrid } from "components/ProductsGrid";
import { useSearchParams } from "react-router-dom";
import { replaceLastPathSegment } from "shared/utils/replaceLastPathSegment";
import { categories } from "./data";

function Products() {
  const [searchParams] = useSearchParams();
  const currentPage = 1;

  const category = searchParams.get("category");
  const categoryName =
    (category ? categories[category]?.title : null) ?? category;
  const pageTitle = categoryName ? `Category: ${categoryName}` : "Shop";
  let pathname = location.pathname;

  if (categoryName) {
    pathname = replaceLastPathSegment(location.pathname, categoryName);
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs pathname={pathname} />
      <Typography variant="h4" component="h1" gutterBottom>
        {pageTitle}
      </Typography>
      <ProductsGrid
        filters={true}
        pagination={true}
        page={currentPage}
        limit={12}
      />
    </Container>
  );
}

export default Products;
