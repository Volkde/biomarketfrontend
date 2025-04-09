import { Breadcrumbs, Container, Typography } from "@mui/material";
import { ProductsGrid } from "components/ProductsGrid";

function Products() {
  const currentPage = 1;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Breadcrumbs />
      <Typography variant="h4" component="h1" gutterBottom>
        Shop
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
