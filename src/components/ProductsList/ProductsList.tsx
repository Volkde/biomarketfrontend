import axios from "axios";
import { ProductCard } from '../common/ProductCard'; // Добавление именованного импорта
import { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
}

function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);

  async function fetchProducts() {
    const res = await axios.get("/api/products");
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
