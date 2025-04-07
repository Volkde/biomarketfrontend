import { useLocation } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';
import { ProductsGrid } from '../../components/ProductsGrid';

export const Products = () => {
  const location = useLocation();
  const currentPage = 1;
  const searchQuery = new URLSearchParams(location.search).get('search') || '';

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Shop
      </Typography>

      {searchQuery && (
        <Typography variant="body1" sx={{ mb: 3 }}>
          Search results for: "{searchQuery}"
        </Typography>
      )}

      <Box sx={{ width: '100%' }}>
        <ProductsGrid 
          filters={true} 
          pagination={true} 
          page={currentPage}
          limit={12}
        />
      </Box>
    </Container>
  );
};

export default Products;