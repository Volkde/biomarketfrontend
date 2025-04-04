import { Box, Link as MuiLink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { AddToCartButton } from "../AddToCartButton";
import { Description } from "../Description";
import { DiscountBadge } from "../DiscountBadge";
import { FavoriteButton } from "../FavoriteButton";
import { Images } from "../Images";
import { Price } from "../Price";
import { Rating } from "../Rating";
import { StockStatus } from "../StockStatus";
import { ProductCardProps } from "./types";

// TODO: Изменить карточку товара чтобы она была разной для сетки товаров и для отдельной страницы

const Root = ({ product }: ProductCardProps) => {
  // TODO
  const handleAddToCart = async () => {};

  // TODO
  const handleAddToFavorite = async () => {};

  return (
    <Box>
      <Images
        images={[
          {
            id: 0,
            url: product.image
          }
        ]}
      />
      {product.discounted && <DiscountBadge discount={product.discounted} />}
      <Box>
        <Box>
          <MuiLink component={RouterLink} to={`/products/${product.id}`}>
            {product.title}
          </MuiLink>
        </Box>
        <Description description={product.description} />
        <Rating value={product.rating} />
        <Price price={product.price} />
        {product.inStock && <StockStatus status="in_stock" />}
        <Box>
          <FavoriteButton isFavorite={false} onToggle={handleAddToFavorite} />
          <AddToCartButton isAddingToCart={false} onClick={handleAddToCart} />
        </Box>
      </Box>
    </Box>
  );
};

export default Root;
