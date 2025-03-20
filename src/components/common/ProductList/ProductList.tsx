import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { styled } from '@mui/material/styles';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface ProductListProps {
  products: Product[];
}

const StyledImageList = styled(ImageList)(({ theme }) => ({
  width: '100%',
  height: 'auto',
  padding: theme.spacing(2),
}));

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <StyledImageList cols={3} gap={16}>
      {products.map((product) => (
        <ImageListItem key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            style={{ borderRadius: '8px' }}
          />
          <ImageListItemBar
            title={product.name}
            subtitle={`${product.price} ₽`}
            position="below"
          />
        </ImageListItem>
      ))}
    </StyledImageList>
  );
};

export default ProductList;