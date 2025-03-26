import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaShoppingCart, FaStar, FaRegStar } from 'react-icons/fa';
// --- CORRECTED IMPORT PATH ---
// Go up three levels from components/common/ProductCard to src, then into contexts
import { useCart } from '../../../contexts/CartContext';
// If you use path aliases (e.g., '@/' configured to point to 'src/'),
// you might use: import { useCart } from '@/contexts/CartContext';

// Import MUI components needed directly in JSX
import { Box, Link as MuiLink, Typography } from '@mui/material';

// Import styled components using namespace
import * as S from './styles';

// --- Interfaces ---
interface ProductImage {
  id: number;
  url: string;
}

interface Product {
  id: number | string;
  name: string;
  price: number;
  rating?: number;
  discount?: number;
  isNew?: boolean;
  inStock?: boolean;
  images?: ProductImage[];
}

interface ProductCardProps {
  product: Product;
}

// --- Constants ---
const PLACEHOLDER_IMAGE = '/images/placeholder.png'; // Ensure this path is correct relative to your public folder

// --- ProductCard Component ---
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  // Destructure with default values
  const {
    id,
    name,
    price,
    rating = 0,
    discount,
    isNew = false,
    inStock = true,
    images,
  } = product;

  // Calculate final price
  const finalPrice = discount ? (price * (100 - discount)) / 100 : price;

  // Determine image URL
  const imageUrl = images && images.length > 0 ? images[0].url : PLACEHOLDER_IMAGE;

  // --- Event Handlers ---
  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    addToCart(id); // Передача только идентификатора продукта
  };

  // Handle image loading errors
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent infinite loop
    target.src = PLACEHOLDER_IMAGE;
  };

  // --- Rating Stars Rendering ---
  const renderRatingStars = () => {
    if (!rating || rating <= 0) {
      return null;
    }
    return (
      <S.RatingWrapper>
        {Array.from({ length: 5 }).map((_, i) =>
          i < Math.round(rating) ? <FaStar key={i} /> : <FaRegStar key={i} />,
        )}
      </S.RatingWrapper>
    );
  };

  return (
    <S.StyledCard>
      {/* Badges */}
      {isNew && <S.NewBadge>New</S.NewBadge>}
      {discount && discount > 0 && <S.DiscountLabel>-{discount}%</S.DiscountLabel>}

      {/* Product Link */}
      <MuiLink
        component={RouterLink}
        to={`/product/${id}`}
        underline="none"
        color="inherit"
        sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
      >
        <S.ProductImage
          component="img"
          image={imageUrl}
          alt={name}
          onError={handleImageError}
        />
        <S.ProductInfo>
          <S.NameTypography variant="h6" component="h3">
            {name}
          </S.NameTypography>
          <S.PriceTypography variant="body1">
            {discount && discount > 0 && <s>${price.toFixed(2)}</s>}
            ${finalPrice.toFixed(2)}
          </S.PriceTypography>
          {renderRatingStars()}
        </S.ProductInfo>
      </MuiLink>

      {/* Actions Area */}
      <S.CardActionsArea>
        <S.StockStatusTypography component="span" variant="body2" inStock={inStock}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </S.StockStatusTypography>
        <S.AddToCartButton
          variant="contained"
          size="small"
          onClick={handleAddToCart}
          disabled={!inStock}
          startIcon={<FaShoppingCart />}
          aria-label={`Add ${name} to cart`}
        >
          Add to Cart
        </S.AddToCartButton>
      </S.CardActionsArea>
    </S.StyledCard>
  );
};