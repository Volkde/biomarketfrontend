import { Box, Link, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AddToCartButton } from "../AddToCartButton";
import { FavoriteButton } from "../FavoriteButton";
import { Images } from "../Images";
import { Price } from "../Price";
import { Rating } from "../Rating";
import { StockStatus } from "../StockStatus";
import { StyledButtons, StyledProductCard, StyledProductTitle } from "./styles";
import { ProductCardProps } from "./types";

function Root({ product }: ProductCardProps) {
  const theme = useTheme();

  // TODO: isAddingToCart
  const isAddingToCart = false;

  // TODO: isFavorite
  const isFavorite = false;

  // TODO: handleAddToCart
  const handleAddToCart = async () => {};

  // TODO: handleAddToFavorite
  const handleAddToFavorite = async () => {};

  return (
    <StyledProductCard>
      <Link component={RouterLink} to={`/products/${product.id}`}>
        <Images
          images={[
            {
              id: 0,
              url: product.image
            }
          ]}
        />
      </Link>
      {product.inStock && <StockStatus status="in_stock" />}
      <Box className="product-content">
        <StyledButtons className="product-cart-buttons">
          <AddToCartButton
            isAddingToCart={isAddingToCart}
            onClick={handleAddToCart}
          />
          <FavoriteButton
            isFavorite={isFavorite}
            onToggle={handleAddToFavorite}
          />
        </StyledButtons>
        <StyledProductTitle
          variant="h4"
          sx={{
            color: theme.palette.primary.main
          }}
        >
          <Link component={RouterLink} to={`/products/${product.id}`}>
            {product.title}
          </Link>
        </StyledProductTitle>
        <Box>
          <Price price={product.price} oldPrice={product.oldPrice} />
        </Box>
        <Rating value={product.rating} />
      </Box>
    </StyledProductCard>
  );
}

export default Root;
