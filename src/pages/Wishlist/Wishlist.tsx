import { Container, Typography, Box, Chip, Tooltip } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { wishlistActions } from "store/redux/wishlist/slice/wishlistSlice";
import { cartActions } from "store/redux/cart/slice/cartSlice";
import { snackbarActions } from "store/redux/ui/slice/snackbarSlice";
import { Product } from "../../types/Product";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store/store";
import {
  StyledWishlistContainer,
  StyledWishlistList,
  StyledWishlistItem,
  StyledWishlistProductImage,
  StyledWishlistProductInfo,
  StyledWishlistProductTitle,
  StyledWishlistProductTags,
  StyledWishlistProductPrice,
  StyledWishlistProductDescription,
  StyledWishlistActionButtons,
  StyledWishlistAddToCartButton,
  StyledWishlistRemoveButton,
  StyledWishlistEmptyState,
  StyledBreadcrumbs
} from "./styles";
import { Home as HomeIcon } from "@mui/icons-material";
import { ShoppingCart, Delete } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const selectWishlist = (state: RootState) => state.WISHLIST.items;
const selectProducts = (state: RootState) => state.PRODUCTS.products;

const selectWishlistProducts = createSelector(
  [selectWishlist, selectProducts],
  (wishlist, products) => products.filter((product: Product) => wishlist.includes(product.id || 0))
);

function Wishlist() {
  const { t } = useTranslation("page-wishlist");
  const dispatch = useAppDispatch();
  const wishlistProducts = useAppSelector(selectWishlistProducts);

  const removeFromWishlist = (productId: number) => {
    dispatch(wishlistActions.removeWishlistItem(productId));
    dispatch(
      snackbarActions.enqueueSnackbar({
        message: "Removed from wishlist ",
        severity: "warning"
      })
    );
  };

  const addToCart = (productId: number) => {
    dispatch(cartActions.fetchAddProductToCart({ productId })).unwrap();
    dispatch(
      snackbarActions.enqueueSnackbar({
        message: "Added to cart ",
        severity: "success"
      })
    );
  };

  const renderProductTags = (product: Product) => {
    const tags = [];
    
    if (product.isOrganic) {
      tags.push(
        <Chip
          key="organic"
          label="Organic"
          color="success"
          size="small"
          className="organic-tag"
        />
      );
    }
    
    if (product.isLocal) {
      tags.push(
        <Chip
          key="local"
          label="Local"
          color="primary"
          size="small"
          className="local-tag"
        />
      );
    }

    return tags.length > 0 ? (
      <StyledWishlistProductTags>{tags}</StyledWishlistProductTags>
    ) : null;
  };

  return (
    <StyledWishlistContainer>
      <StyledBreadcrumbs>
        <HomeIcon className="home-icon" />
        <Typography>/</Typography>
        <Typography>{t("title")}</Typography>
      </StyledBreadcrumbs>

      <Typography variant="h4" component="h1" gutterBottom>
        {t("title")}
      </Typography>

      {wishlistProducts.length === 0 ? (
        <StyledWishlistEmptyState>
          <Typography variant="h5" className="empty-message">
            {t("empty")}
          </Typography>
          <Typography variant="body2" className="empty-description">
            {t("emptyDescription")}
          </Typography>
          <RouterLink to="/products" className="empty-action">
            <Typography variant="body2" className="empty-action">
              {t("emptyAction")}
            </Typography>
          </RouterLink>
        </StyledWishlistEmptyState>
      ) : (
        <StyledWishlistList>
          {wishlistProducts.map((product: Product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="wishlist-item"
            >
              <StyledWishlistItem>
                <RouterLink to={`/product/${product.id}`}>
                  <StyledWishlistProductImage>
                    <img src={product.image} alt={product.title} />
                  </StyledWishlistProductImage>
                  <StyledWishlistProductInfo>
                    <StyledWishlistProductTitle variant="h6">
                      {product.title}
                    </StyledWishlistProductTitle>
                    <StyledWishlistProductDescription variant="body2" color="text.secondary" paragraph>
                      {product.description}
                    </StyledWishlistProductDescription>
                    {renderProductTags(product)}
                    <StyledWishlistProductPrice variant="h6">
                      {product.price.toFixed(2)} €
                    </StyledWishlistProductPrice>
                  </StyledWishlistProductInfo>
                </RouterLink>
                <StyledWishlistActionButtons>
                  <Tooltip title="Add to cart">
                    <StyledWishlistAddToCartButton
                      edge="end"
                      aria-label="add to cart"
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product.id || 0);
                      }}
                    >
                      <ShoppingCart />
                    </StyledWishlistAddToCartButton>
                  </Tooltip>
                  <Tooltip title="Remove from wishlist">
                    <StyledWishlistRemoveButton
                      edge="end"
                      aria-label="remove from wishlist"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromWishlist(product.id || 0);
                      }}
                    >
                      <Delete />
                    </StyledWishlistRemoveButton>
                  </Tooltip>
                </StyledWishlistActionButtons>
              </StyledWishlistItem>
            </motion.div>
          ))}
        </StyledWishlistList>
      )}
    </StyledWishlistContainer>
  );
}

export default Wishlist;
