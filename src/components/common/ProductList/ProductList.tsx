import { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { styles } from './styles';

interface ProductListProps {
  products: {
    id: number;
    name: string;
    price: number;
    rating?: number;
    discount?: number;
    isNew?: boolean;
    inStock?: boolean;
    images?: { id: number; url: string }[];
  }[];
  title?: string;
}

const ProductList = ({ products, title }: ProductListProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div style={styles.container}>
      {title && <h2 style={styles.title}>{title}</h2>}
      
      {isLoading ? (
        <div style={styles.loadingContainer}>
          <p>Loading products...</p>
        </div>
      ) : products.length > 0 ? (
        <div style={styles.productGrid}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div style={styles.noProducts}>
          <p>No products found. Check back later for new arrivals!</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;