import { Container, Grid2 } from "@mui/material";
import axios from "axios";
import { ProductCard, ProductCartSkeleton } from "components/ProductCard";
import { useEffect, useState } from "react";
import { Filters } from "../Filters";
import { Pagination } from "../Pagination";
import { Product, RootProps } from "./types";

function Root({
  filters = false,
  limit = 8,
  page = 1,
  pagination = false,
}: RootProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    // TODO: fetchProducts()
    const res = await axios.get("/api/products");
    setProducts(res.data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const count = isLoading ? 8 : products.length;

  const elProducts = isLoading
    ? Array.from(new Array(count)).map(item => (
        <ProductCartSkeleton key={item} />
      ))
    : products.map(product => (
        <ProductCard key={product.id} product={product} />
      ));

  return (
    <Container>
      {filters && <Filters />}
      <Grid2
        container
        wrap="wrap"
        justifyContent="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {elProducts}
      </Grid2>
      {pagination && <Pagination count={count} />}
    </Container>
  );
}

export default Root;
