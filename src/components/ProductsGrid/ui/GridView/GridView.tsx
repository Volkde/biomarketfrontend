import { Box, Stack } from '@mui/material';
import { ProductCard } from 'components/ProductCard';
import { Product } from '../../../../types/product';
import { ProductItem } from './styles';

interface GridViewProps {
  /** Массив продуктов для отображения */
  products: Product[];
}

/**
 * Компонент для отображения продуктов в виде сетки
 * Использует компонент ProductCard для каждого продукта
 * 
 * @param props - Свойства компонента
 * @returns JSX элемент
 */
const GridView = ({ products }: GridViewProps) => {
  console.log('GridView rendering with products:', products);
  
  return (
    <Box sx={{ width: '100%', mb: 4 }}>
      <Stack 
        direction="row" 
        spacing={2} 
        flexWrap="wrap"
        justifyContent="flex-start"
      >
        {products.map(product => (
          <ProductItem 
            key={product.id}
            sx={{
              width: {
                xs: '100%',
                sm: 'calc(50% - 16px)',
                md: 'calc(33.333% - 16px)',
                lg: 'calc(25% - 16px)'
              },
              mb: 2,
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)'
              }
            }}
          >
            <ProductCard product={product} />
          </ProductItem>
        ))}
      </Stack>
    </Box>
  );
};

export default GridView;
