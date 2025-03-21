import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ProductCard from '../ProductCard/ProductCard';
import { styles } from './styles';

interface ProductListProps {
  products: {
    id: number;
    name: string;
    price: number;
    rating?: number;
    images?: { id: number; url: string }[];
  }[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div style={styles.container}>
      {products.length > 0 ? (
        <ImageList
          sx={{
            width: '100%',
            // Адаптивное количество колонок
            gridTemplateColumns: {
              xs: 'repeat(auto-fill, minmax(200px, 1fr))', // 2 колонки на мобильных
              sm: 'repeat(auto-fill, minmax(250px, 1fr))', // 3-4 колонки на десктопе
            },
            gap: '20px',
          }}
          cols={3} // Базовое количество колонок (будет переопределено через sx для адаптивности)
          gap={20}
        >
          {products.map((product) => (
            <ImageListItem key={product.id}>
              <ProductCard product={product} />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <p style={styles.noProducts}>No products found</p>
      )}
    </div>
  );
};

export default ProductList;