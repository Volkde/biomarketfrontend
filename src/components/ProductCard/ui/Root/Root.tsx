import { Link as MuiLink, Typography, Box } from "@mui/material";
import { useState, useCallback } from "react";
import { FaSearch, FaLeaf, FaShoppingCart, FaEye } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import api from "../../../../services/api";
import { DiscountBadge } from "../DiscountBadge";
import { FavoriteButton } from "../FavoriteButton";
import { ProductQuickViewModal } from "../ProductQuickViewModal";
import { FeaturedProductCard } from "../FeaturedProductCard";
import { Images } from "../Images";
import { Price } from "../Price";
import { Rating } from "../Rating";
import { StockStatus } from "../StockStatus";
import { Tags } from "../Tags";
import * as S from "./styles";
import { ProductCardProps } from "./types";

const Root = ({ product, isFeatured = false }: ProductCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Получаем заголовок продукта
  const productTitle = product.title || product.name;

  const handleFavoriteToggle = useCallback(async () => {
    try {
      // Toggle favorite status
      const newStatus = !isFavorite;
      setIsFavorite(newStatus);
      
      // Call API to update favorite status
      await api.post(`/api/favorites/${product.id}`, { isFavorite: newStatus });
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  }, [isFavorite, product.id]);

  const handleQuickView = useCallback(() => setShowModal(true), []);
  const handleCloseModal = useCallback(() => setShowModal(false), []);

  const handleAddToCart = useCallback(async () => {
    setIsAddingToCart(true);
    try {
      const response = await api.post("/api/cart/add", {
        productId: product.id,
        quantity: 1,
      });
      if (response.status === 200 || response.status === 201) {
        console.log("Product added to cart successfully");
      } else {
        console.warn("Problem adding to cart:", response);
      }
    } catch (err) {
      console.error("Error adding to cart:", err);
    } finally {
      setIsAddingToCart(false);
    }
  }, [product.id]);

  return (
    <S.StyledProductCard 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <S.ImageContainer>
        <Images product={product} images={product.images as any} />
        
        {/* Quick action buttons that appear on hover */}
        <S.QuickActionOverlay>
          <S.ActionButton onClick={handleQuickView}>
            <FaEye /> Quick View
          </S.ActionButton>
          <S.ActionButton onClick={handleAddToCart} disabled={isAddingToCart}>
            {isAddingToCart ? 'Adding...' : <><FaShoppingCart /> Add</>}
          </S.ActionButton>
        </S.QuickActionOverlay>

        {/* Tags */}
        <Box sx={{ position: 'absolute', top: 10, left: 10, zIndex: 2, display: 'flex', gap: 1 }}>
          {product.isOrganic && (
            <Box sx={{ 
              bgcolor: 'success.main', 
              color: 'white', 
              borderRadius: 1, 
              px: 1, 
              py: 0.5,
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: 0.5
            }}>
              <FaLeaf /> Organic
            </Box>
          )}
          
          {product.isLimited && (
            <Box sx={{ 
              bgcolor: 'warning.main', 
              color: 'white', 
              borderRadius: 1, 
              px: 1, 
              py: 0.5,
              fontSize: '0.75rem'
            }}>
              Limited
            </Box>
          )}
        </Box>

        {/* Discount badge */}
        {product.oldPrice && product.discounted && (
          <DiscountBadge
            discount={Math.round(
              ((product.oldPrice - product.price) / product.oldPrice) * 100
            )}
          />
        )}
      </S.ImageContainer>

      <S.ContentArea>
        {/* Tags for Hot and Sale items */}
        <Tags
          tags={[
            product.isHot && { label: "Hot", color: "warning" },
            product.discounted && { label: "Sale", color: "error" },
          ].filter(Boolean)}
        />

        {/* Product title with link */}
        <S.ProductName variant="h6" component="h3">
          <MuiLink component={RouterLink} to={`/product/${product.id}`}>
            {productTitle}
          </MuiLink>
        </S.ProductName>

        {/* Short description (УТП) */}
        {product.shortDescription && (
          <S.ProductDescription variant="body2" color="text.secondary">
            {product.shortDescription}
          </S.ProductDescription>
        )}

        {/* Rating */}
        <Rating 
          value={product.rating || 0} 
          count={typeof product.reviews === 'number' ? product.reviews : product.reviews?.length || 0}
        />
        
        {/* Price */}
        <S.PriceContainer>
          <Price
            price={product.price}
            oldPrice={product.oldPrice}
            isSale={product.discounted}
          />
        </S.PriceContainer>
        
        {/* Stock status */}
        <StockStatus status={product.quantity > 0 ? "in_stock" : "out_of_stock"} />

        {/* Action buttons */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          mt: 'auto',
          pt: 1 
        }}>
          <Box>
            <S.ActionButton 
              onClick={handleAddToCart} 
              disabled={isAddingToCart || product.quantity <= 0}
              style={{ padding: '6px 12px' }}
            >
              {isAddingToCart ? 'Adding...' : <><FaShoppingCart /> Add</>}
            </S.ActionButton>
          </Box>
          
          <FavoriteButton 
            isFavorite={isFavorite}
            onToggle={handleFavoriteToggle}
          />
        </Box>
      </S.ContentArea>

      <ProductQuickViewModal
        open={showModal}
        onClose={handleCloseModal}
        product={product}
      />

      {isFeatured && <FeaturedProductCard product={product} />}
    </S.StyledProductCard>
  );
};

export default Root;
