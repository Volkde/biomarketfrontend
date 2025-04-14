import {
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { StyledButton } from "./styles";
import { FavoriteButtonProps } from "./types";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { wishlistActions } from "../../../../store/redux/wishlist/slice/wishlistSlice";

/**
 * Favorite button component for adding/removing items from wishlist
 * @param {FavoriteButtonProps} props - Component props
 * @param {number} props.productId - Product ID
 * @param {"small" | "medium" | "large"} props.size - Button size
 */
const FavoriteButton = ({
  productId,
  size = "small"
}: FavoriteButtonProps) => {
  const dispatch = useAppDispatch();
  const wishlist = useAppSelector((state) => state.WISHLIST.items);

  const isFavorite = wishlist.includes(productId);

  const toggleFavorite = () => {
    dispatch(wishlistActions.toggleWishlistItem(productId));
  };

  const Icon = isFavorite ? FavoriteIcon : FavoriteBorderIcon;

  return (
    <Tooltip title={isFavorite ? "Remove from wishlist" : "Add to wishlist"}>
      <StyledButton isFavorite={isFavorite} size={size} onClick={toggleFavorite}>
        <Icon />
      </StyledButton>
    </Tooltip>
  );
};

export default FavoriteButton;
