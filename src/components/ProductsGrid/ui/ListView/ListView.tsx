import { Box, Typography, Rating, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Product } from '../../../../types/product';
import { 
  ListContainer, 
  ListItem, 
  ImageContainer, 
  ContentContainer, 
  ActionContainer 
} from './styles';

interface ListViewProps {
  /** Массив продуктов для отображения */
  products: Product[];
}

/**
 * Компонент для отображения продуктов в виде списка
 * Показывает более подробную информацию о каждом продукте
 * 
 * @param props - Свойства компонента
 * @returns JSX элемент
 */
const ListView = ({ products }: ListViewProps) => {
  return (
    <ListContainer>
      {products.map(product => (
        <ListItem key={product.id} elevation={1}>
          <ImageContainer>
            <Box
              component="img"
              src={product.images?.[0]?.url || '/placeholder.jpg'}
              alt={product.name}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 1,
              }}
            />
          </ImageContainer>
          
          <ContentContainer>
            <Box>
              <Typography variant="h6" component="h3" gutterBottom>
                {product.name}
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Rating 
                  value={product.rating || 0} 
                  precision={0.5} 
                  readOnly 
                  size="small" 
                />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  ({(Array.isArray(product.reviews) ? product.reviews.length : 0)} reviews)
                </Typography>
              </Box>
              
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {product.description?.substring(0, 150)}
                {product.description && product.description.length > 150 ? '...' : ''}
              </Typography>
            </Box>
            
            <ActionContainer>
              <Box>
                <Typography 
                  variant="h6" 
                  component="span" 
                  color="primary.main" 
                  sx={{ fontWeight: 'bold' }}
                >
                  ${product.price?.toFixed(2)}
                </Typography>
                
                {product.oldPrice && (
                  <Typography 
                    variant="body2" 
                    component="span" 
                    sx={{ 
                      textDecoration: 'line-through', 
                      color: 'text.secondary',
                      ml: 1 
                    }}
                  >
                    ${product.oldPrice.toFixed(2)}
                  </Typography>
                )}
              </Box>
              
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Button 
                  variant="outlined" 
                  size="small"
                  startIcon={<FavoriteIcon />}
                >
                  Favorite
                </Button>
                <Button 
                  variant="contained" 
                  size="small"
                  startIcon={<ShoppingCartIcon />}
                >
                  Add to Cart
                </Button>
              </Box>
            </ActionContainer>
          </ContentContainer>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default ListView;
