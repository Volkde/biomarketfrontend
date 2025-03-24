import axios from "axios";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
}

function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    const res = await axios.get("/api/products/all");
    setProducts(res.data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const elProducts = products.map(p => (
    <li key={p.id}>
      Title: {p.title} Price: {p.price}
    </li>
  ));

  return (
    <div>
      <ul>{elProducts}</ul>
    </div>
  );
}

export default ProductsList;
