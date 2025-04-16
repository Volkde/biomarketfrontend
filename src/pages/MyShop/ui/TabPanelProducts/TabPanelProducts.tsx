import { Container } from "@mui/material";
import { ProductsGrid } from "components/ProductsGrid";
import { ProductsFilters } from "components/ProductsGrid/types/ProductsFilters";
import { TabPanelProductsProps } from "./types";

function TabPanelProducts({
  isLogin,
  isSeller,
  sellerId,
  seller
}: TabPanelProductsProps) {
  const filters: ProductsFilters = {};

  if (sellerId && sellerId >= 0) {
    filters.seller_id = sellerId;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <ProductsGrid filters={filters} pagination={true} />
    </Container>
  );
}

export default TabPanelProducts;
