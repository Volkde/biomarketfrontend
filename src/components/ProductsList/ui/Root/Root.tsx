import axios from "axios";
import { useEffect, useState } from "react";
import ProductGrid from "../ProductGrid";
import { Product } from "./types";

function Root() {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    const res = await axios.get("/api/products");
    setProducts(res.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return <ProductGrid products={products} />;
}

export default Root;
