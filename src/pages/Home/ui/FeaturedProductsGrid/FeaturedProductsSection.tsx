import { Box } from "@mui/material";
import { FeaturedProductsListProps } from "./types";

const FeaturedProductsSection = ({ products }: FeaturedProductsListProps) => {
  const products = [];

  return (
    <Box>
      <ProductList products={products} />
    </Box>
  );
};

export default FeaturedProductsSection;
