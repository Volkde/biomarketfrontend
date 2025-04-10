import { Box, Link, useTheme } from "@mui/material";
import { useCallback } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { cartActions } from "store/redux/cart/slice/cartSlice";
import { selectUsersState } from "store/redux/users/selectors/selectUsersState";
import { AddToCartButton } from "../AddToCartButton";
import { FavoriteButton } from "../FavoriteButton";
import { Images } from "../Images";
import { Price } from "../Price";
import { Rating } from "../Rating";
import { StockStatus } from "../StockStatus";
import { StyledButtons, StyledProductCard, StyledProductTitle } from "./styles";
import { ProductCardProps } from "./types";

function Root({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const theme = useTheme();

  const { user } = useAppSelector(selectUsersState);
  const userId = user?.id ?? -1;

  const productId = product?.id ?? -1;

  // TODO: isAddingToCart
  const isAddingToCart = false;

  // TODO: isFavorite
  const isFavorite = false;

  const handleAddToCart = useCallback(() => {
    if (userId < 0 || productId < 0) return;

    dispatch(
      cartActions.fetchAddProductToCart({
        userId,
        productId
      })
    );
  }, [dispatch, userId, productId]);

  const handleFavoriteToggle = useCallback(() => {
    // TODO: Добавь функциональность позже
  }, []);

  return (
    <StyledProductCard>
      <Link component={RouterLink} to={`/product/${product.id}`}>
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
            onToggle={handleFavoriteToggle}
          />
        </StyledButtons>
        <StyledProductTitle
          variant="h4"
          sx={{
            color: theme.palette.primary.main
          }}
        >
          <Link component={RouterLink} to={`/product/${product.id}`}>
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
