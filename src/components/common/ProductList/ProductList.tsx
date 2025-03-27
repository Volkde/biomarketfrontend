import { useState, useEffect } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { Container, Title, LoadingContainer } from './styles';
import { Box, Typography } from '@mui/material';

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
    <Container>
      {title && <Title variant="h2">{title}</Title>}
      
      {isLoading ? (
        <LoadingContainer>
          <Typography variant="body1">Loading products...</Typography>
        </LoadingContainer>
      ) : (
        <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap="20px">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Box>
      )}
    </Container>
  );
};

export default ProductList;