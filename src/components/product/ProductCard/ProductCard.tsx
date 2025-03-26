import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaStar, FaShoppingCart, FaSearch, FaHeart, FaLayerGroup } from 'react-icons/fa';

// Import MUI components needed directly in JSX (usually Link)
import { Link as MuiLink, Typography, CircularProgress } from '@mui/material';

// Import styled components using namespace
import * as S from './styles';

// Import other components and services
import ProductQuickViewModal from '../ProductQuickViewModal/ProductQuickViewModal'; // Adjust path if needed
import api from '../../../services/api'; // Assuming this path is correct
// import { useCart } from '../../../contexts/CartContext'; // Uncomment if using Cart Context

// --- Interfaces ---
interface ProductImage {
  id: number | string; // Allow string IDs for images too
  url: string;
}

interface Product {
  id: string; // Keep ID as string, often better for APIs
  name: string;
  price: number;
  oldPrice?: number;
  rating?: number; // Rating is optional
  images?: ProductImage[]; // Images are optional
  isHot?: boolean;
  isSale?: boolean;
  description?: string;
  // Add other potential fields like 'slug', 'stockStatus', etc.
}

interface ProductCardProps {
  product: Product;
  // Add any other props needed, like onAddToCartSuccess, etc.
}

// --- Constants ---
const PLACEHOLDER_IMAGE = '/images/placeholder.png'; // Ensure this exists in your public folder

// --- ProductCard Component (Arrow Function) ---
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // const { addToCart } = useCart(); // Use if context is preferred over direct API call
  const [showModal, setShowModal] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  // Add state for wishlist/compare if those become API calls
  // const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  const {
    id,
    name,
    price,
    oldPrice,
    rating = 0, // Default rating to 0
    images,
    isHot,
    isSale,
    description,
  } = product;

  const imageUrl = images && images.length > 0 ? images[0].url : PLACEHOLDER_IMAGE;

  // --- Event Handlers ---
  const handleAddToCart = async (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent link navigation if needed
    event.stopPropagation();
    setIsAddingToCart(true);
    try {
      // Using direct API call as in original example
      const response = await api.post('/api/cart/add', {
        productId: id,
        quantity: 1
      });
      if (response.status === 200 || response.status === 201) {
        console.log('Product added to cart:', response.data);
        // Add user feedback (e.g., toast/snackbar) instead of alert
        // showSnackbar('Product added to cart!', 'success');
      } else {
        // Handle non-2xx responses that aren't errors
        console.warn('Problem adding to cart:', response);
         // showSnackbar(`Error: ${response.statusText}`, 'error');
      }
    // } catch (err: any) { // More specific error typing if possible
    } catch (err) {
      console.error('Error adding to cart:', err);
      // showSnackbar('Failed to add product to cart.', 'error');
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleQuickView = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setShowModal(true);
  };

  const handleAddToWishlist = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    // Replace alert with API call + feedback
    // setIsAddingToWishlist(true); -> make API call -> setIsAddingToWishlist(false);
    console.log(`Adding ${name} to wishlist (API call placeholder)`);
    // showSnackbar(`${name} added to wishlist!`, 'info');
    alert(`Added ${name} to favorites (placeholder)`);
  };

   const handleAddToCompare = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    // Replace alert with API call or context update + feedback
    console.log(`Adding ${name} to compare list (placeholder)`);
    alert(`Added ${name} to compare list (placeholder)`);
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    target.onerror = null; // Prevent infinite loop
    target.src = PLACEHOLDER_IMAGE;
  };

  // --- Render Helpers ---
  const renderRatingStars = () => {
    if (rating <= 0) return null; // Don't render if no rating
    return (
      <S.RatingContainer>
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar key={i} style={{ color: i < Math.round(rating) ? undefined : '#e4e5e9' }} />
          // Using undefined relies on RatingContainer's inherited color for filled stars
        ))}
        {/* Optional: Display numeric rating */}
        {/* <Typography variant="caption" sx={{ ml: 0.5 }}>({rating.toFixed(1)})</Typography> */}
      </S.RatingContainer>
    );
  };

  return (
    <>
      <S.CardWrapper>
        <S.MediaContainer>
          {isHot && <S.HotTag component="span">Hot</S.HotTag>}
          {isSale && <S.SaleTag component="span">Sale</S.SaleTag>}

          {/* Link wrapping the image */}
           <MuiLink component={RouterLink} to={`/products/${id}`} underline="none">
              <S.ProductImage
                component="img"
                className="product-image" // Class for hover effect targeting
                image={imageUrl}
                alt={name}
                onError={handleImageError}
              />
           </MuiLink>

          {/* Actions Overlay - uses class name for hover targeting */}
          <S.ActionsOverlay className="product-actions-overlay">
            <S.ActionButton
              aria-label="Add to Cart"
              title="Add to Cart"
              onClick={handleAddToCart}
              disabled={isAddingToCart} // Disable while adding
            >
              {isAddingToCart ? <CircularProgress size={18} color="inherit" /> : <FaShoppingCart />}
            </S.ActionButton>
            <S.ActionButton
              aria-label="Quick View"
              title="Quick View"
              onClick={handleQuickView}
            >
              <FaSearch />
            </S.ActionButton>
            <S.ActionButton
              aria-label="Add to Wishlist"
              title="Add to Wishlist"
              onClick={handleAddToWishlist}
            >
              <FaHeart />
            </S.ActionButton>
            <S.ActionButton
              aria-label="Add to Compare"
              title="Add to Compare"
              onClick={handleAddToCompare}
            >
              <FaLayerGroup />
            </S.ActionButton>
          </S.ActionsOverlay>

        </S.MediaContainer>

        <S.ContentArea>
          {/* Box to group top content (name, desc, price) */}
          <div>
            {/* Use StyledProductLink only if specific styling needed, else basic MuiLink is fine */}
            <MuiLink component={RouterLink} to={`/products/${id}`} underline="none" color="inherit">
                <S.ProductName variant="h6" component="h3">
                {name}
                </S.ProductName>
            </MuiLink>

            {description && (
              <S.ProductDescription variant="body2">
                {description}
              </S.ProductDescription>
            )}

            <S.PriceContainer>
              <S.CurrentPrice component="span">
                ${price.toFixed(2)}
              </S.CurrentPrice>
              {oldPrice && oldPrice > price && (
                <S.OldPrice component="span">
                  ${oldPrice.toFixed(2)}
                </S.OldPrice>
              )}
            </S.PriceContainer>
          </div>

          {/* Rating pushes down due to flexbox justify-content */}
          {renderRatingStars()}

        </S.ContentArea>
      </S.CardWrapper>

      {/* Quick View Modal */}
      {showModal && (
        <ProductQuickViewModal
          // Pass necessary product details to the modal
          product={{
             id: id,
             name: name,
             price: price,
             oldPrice: oldPrice,
             rating: rating,
             description: description, // Pass full description maybe
             image: imageUrl, // Pass current image
             // Add other required fields by the modal
           }}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

// Using named export as requested in the prompt context
// export default ProductCard; // Remove default export if using named