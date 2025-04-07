import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Stack,
  Tabs,
  Tab,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

// Импорт компонентов из ProductCard/ui
import Rating from '../../components/ProductCard/ui/Rating/Rating';
import Price from '../../components/ProductCard/ui/Price/Price';
import StockStatus from '../../components/ProductCard/ui/StockStatus/StockStatus';
import Tags from '../../components/ProductCard/ui/Tags/Tags';
import AddToCartButton from '../../components/ProductCard/ui/AddToCartButton/AddToCartButton';
import FavoriteButton from '../../components/ProductCard/ui/FavoriteButton/FavoriteButton';

import {
  PageContainer,
  Section,
  ProductName,
  DescriptionBox,
} from './styles';
import { Product } from './types';
import api from '../../services/api';
import DetailedImages from './ui/Images/Images';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const theme = useTheme();

  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log(`Fetching product with ID: ${id}`);
        const response = await api.get(`/api/products/${id}`);
        console.log('API response:', response);

        let data = response.data;
        if (response.data && response.data.product) {
          data = response.data.product;
        }

        console.log('Product data:', data);

        const adaptedProduct: Product = {
          id: String(data.id),
          name: data.title || data.name,
          price: Number(data.price),
          oldPrice: data.discounted ? Number(data.price) * 1.2 : undefined,
          rating: data.rating || 0,
          images: data.images?.length ? data.images : [{ id: 1, url: data.image }],
          isHot: data.isHot || false,
          isSale: data.discounted,
          description: data.description || 'No description available',
          shortDescription: data.shortDescription || 'Premium organic product',
          quantity: data.inStock !== false ? 10 : 0,
          discounted: data.discounted,
          reviews: data.reviews || [],
          isOrganic: data.isOrganic || Math.random() > 0.5,
          isLimited: data.isLimited || Math.random() > 0.7,
        };

        console.log('Adapted product:', adaptedProduct);

        setProduct(adaptedProduct);
        setLoading(false);
      } catch (e) {
        console.error('Error loading product:', e);
        setError('Unable to load product.');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    try {
      const response = await api.post('/api/cart', { productId: id, quantity });
      if (response.status === 200 || response.status === 201) {
        console.log('Product added to cart successfully');
      } else {
        console.warn('Problem adding to cart:', response);
      }
    } catch (err) {
      console.error('Error adding to cart:', err);
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleFavoriteToggle = useCallback(async () => {
    try {
      const newStatus = !isFavorite;
      setIsFavorite(newStatus);
      await api.post(`/api/favorites/${id}`, { isFavorite: newStatus });
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  }, [id, isFavorite]);

  if (loading || !product) {
    return (
      <Container>
        <PageContainer>
          <Typography variant="h5">Loading product...</Typography>
        </PageContainer>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <PageContainer>
          <Typography variant="h5" color="error">
            {error}
          </Typography>
        </PageContainer>
      </Container>
    );
  }

  return (
    <Container>
      <PageContainer>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }}
          gap={4}
          sx={{ alignItems: 'start' }}
        >
          {/* Изображения */}
          <Section sx={{ position: 'relative' }}>
            <DetailedImages images={product.images} product={product} />
            {/* Теги */}
            <Box sx={{ position: 'absolute', top: 16, left: 16, zIndex: 2, display: 'flex', gap: 1 }}>
              {product.isOrganic && (
                <Box sx={{ 
                  bgcolor: 'success.main', 
                  color: 'white', 
                  borderRadius: 1, 
                  px: 1.5, 
                  py: 0.5,
                  fontSize: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  fontWeight: 600
                }}>
                  <AddIcon fontSize="small" /> Organic
                </Box>
              )}
              {product.isLimited && (
                <Box sx={{ 
                  bgcolor: 'warning.main', 
                  color: 'white', 
                  borderRadius: 1, 
                  px: 1.5, 
                  py: 0.5,
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}>
                  Limited
                </Box>
              )}
            </Box>
            {/* Бейдж скидки */}
            {product.oldPrice && product.discounted && (
              <Box sx={{ position: 'absolute', top: 16, right: 16, zIndex: 2 }}>
                <Box sx={{ 
                  bgcolor: 'error.main', 
                  color: 'white', 
                  borderRadius: 1, 
                  px: 1.5, 
                  py: 0.5,
                  fontSize: '0.85rem',
                  fontWeight: 600
                }}>
                  {(((product.oldPrice - product.price) / product.oldPrice) * 100).toFixed(0)}% OFF
                </Box>
              </Box>
            )}
          </Section>

          {/* Контент */}
          <Section>
            <Stack direction="row" spacing={1} mb={2}>
              <StockStatus 
                status={product.quantity > 0 ? 'in_stock' : 'out_of_stock'} 
                showLabel={true} 
                size="medium" 
              />
              <Tags
                tags={[
                  product.isHot && { label: "Hot", color: "warning" },
                  product.discounted && { label: "Sale", color: "error" },
                ].filter(Boolean)}
                size="small"
                spacing={0.5}
              />
            </Stack>

            <ProductName variant="h4">{product.name}</ProductName>
            
            {product.shortDescription && (
              <Typography 
                variant="subtitle1" 
                color="text.secondary" 
                sx={{ mt: 0.5, mb: 2, fontStyle: 'italic' }}
              >
                {product.shortDescription}
              </Typography>
            )}

            <Box display="flex" alignItems="center" mb={2}>
              <Rating 
                value={product.rating} 
                max={5} 
                count={product.reviews.length} 
                size="medium" 
              />
            </Box>

            <Box display="flex" alignItems="center" mb={3}>
              <Price 
                price={product.price} 
                oldPrice={product.oldPrice} 
                isSale={product.discounted} 
              />
            </Box>

            <Divider sx={{ my: 3 }} />

            <DescriptionBox>
              <Tabs value={tabValue} onChange={(_, newValue) => setTabValue(newValue)} sx={{ mb: 2 }}>
                <Tab label="Description" />
                <Tab label="Reviews" />
              </Tabs>
              {tabValue === 0 && <Typography variant="body1">{product.description}</Typography>}
              {tabValue === 1 && (
                product.reviews.length > 0 ? (
                  product.reviews.map((review, index) => (
                    <Box key={index} sx={{ mb: 2 }}>
                      <Typography variant="body2">{review.text}</Typography>
                      <Rating value={review.rating} readOnly size="small" />
                    </Box>
                  ))
                ) : (
                  <Typography variant="body1" color="text.secondary">
                    No reviews yet. Be the first to leave a review!
                  </Typography>
                )
              )}
            </DescriptionBox>

            <Box mt="auto" display="flex" flexDirection="column" gap={2}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="start"
                sx={{
                  border: `1px solid ${theme.palette.divider}`,
                  borderRadius: 1,
                  width: 'fit-content',
                  px: 1,
                }}
              >
                <IconButton
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ px: 2 }}>{quantity}</Typography>
                <IconButton
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity >= product.quantity}
                >
                  <AddIcon />
                </IconButton>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, width: '100%', mb: 2 }}>
                <Box sx={{ flexGrow: 1 }}>
                  <AddToCartButton
                    onClick={handleAddToCart}
                    isAddingToCart={isAddingToCart}
                    disabled={product.quantity <= 0}
                    fullWidth={true}
                    size="large"
                    label={product.quantity <= 0 ? "Out of Stock" : "Add to Cart"}
                  />
                </Box>
                <Box>
                  <FavoriteButton
                    isFavorite={isFavorite}
                    onToggle={handleFavoriteToggle}
                    size="large"
                  />
                </Box>
              </Box>
            </Box>
          </Section>
        </Box>

        {/* Отзывы */}
        <Section sx={{ mt: 6, mb: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h5">
              Customer Reviews
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Rating value={product.rating || 0} readOnly size="small" />
              <Typography variant="body2" color="text.secondary">
                ({product.reviews?.length || 0} reviews)
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ mb: 3 }} />
          
          {product.reviews && product.reviews.length > 0 ? (
            product.reviews.map((review, index) => (
              <Box key={index} sx={{ mb: 2 }}>
                <Typography variant="body2">{review.text}</Typography>
                <Rating value={review.rating} readOnly size="small" />
              </Box>
            ))
          ) : (
            <Box sx={{ py: 4, textAlign: 'center' }}>
              <Typography variant="body1" color="text.secondary">
                Be the first to review this product
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Rating 
                  value={0} 
                  readOnly={false} 
                  size="large" 
                  onChange={(newValue) => console.log('New rating:', newValue)}
                />
              </Box>
            </Box>
          )}
        </Section>
      </PageContainer>
    </Container>
  );
};

export default ProductDetail;