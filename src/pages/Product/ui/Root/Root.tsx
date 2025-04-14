import { Box, Button, Container, Grid, Typography, IconButton } from "@mui/material";
import { Breadcrumbs } from "components/Breadcrumbs";
import { ProductCartSkeleton } from "components/ProductCard";
import { useCallback, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { cartActions } from "store/redux/cart/slice/cartSlice";
import { selectProductsState } from "store/redux/products/selectors/selectProductsState";
import { productsActions } from "store/redux/products/slice/productsSlice";
import { snackbarActions } from "store/redux/ui/slice/snackbarSlice";
import { wishlistActions } from "store/redux/wishlist/slice/wishlistSlice";
import {
  PageContainer,
  ProductGrid,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  CurrentPrice,
  OldPrice,
  ProductDescription,
  ActionButtons,
  AddToCartButton,
  FavoriteButton
} from "./styles";

import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

/**
 * Product page component with product details and actions
 * @returns {JSX.Element} Product page component
 */
function Root() {
  const { t } = useTranslation("page-product");
  const dispatch = useAppDispatch();
  const location = useLocation();

  const productId = useMemo(() => {
    const parts = location.pathname.split("/").filter(Boolean);
    const last = parts[parts.length - 1];
    const id = Number(last);
    return Number.isNaN(id) ? -1 : id;
  }, [location.pathname]);

  useEffect(() => {
    if (productId > 0) {
      dispatch(productsActions.fetchGetProductById({ productId }));
    }
  }, [dispatch, productId]);

  const {
    status: productsStatus,
    product,
    error: productsError
  } = useAppSelector(selectProductsState);

  const pathname = product?.title ? `/products/${product.title}` : "/products";

  const handleAddToCart = useCallback(async () => {
    try {
      if (productId < 0) {
        throw new Error("Не удалось получить id товара");
      }

      await dispatch(cartActions.fetchAddProductToCart({ productId })).unwrap();
      await dispatch(cartActions.fetchGetCart());
      dispatch(
        snackbarActions.enqueueSnackbar({
          message: "Товар добавлен в корзину",
          severity: "success"
        })
      );
    } catch (error) {
      console.error("Ошибка при добавлении в корзину:", error);
    }
  }, [dispatch, productId]);

  const handleFavoriteToggle = useCallback(() => {
    if (productId < 0) {
      console.error("Не удалось получить id товара");
      return;
    }

    dispatch(wishlistActions.toggleWishlistItem(productId));
    dispatch(
      snackbarActions.enqueueSnackbar({
        message: "Товар добавлен в избранное",
        severity: "success"
      })
    );
  }, [dispatch, productId]);

  const elProduct = useMemo(() => {
    if (productsStatus === "success" && product) {
      return (
        <ProductGrid container>
          <ProductImage>
            <img
              src={product.image}
              alt={product.title}
              onError={e => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "/fallback.jpg";
              }}
            />
            <div className="product-actions">
              <IconButton>
                <ShareIcon />
              </IconButton>
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            </div>
          </ProductImage>
          
          <ProductInfo>
            <ProductName variant="h1">{product.title}</ProductName>
            
            <ProductPrice>
              <CurrentPrice>
                <span className="currency">€</span>
                <span>{product.price}</span>
              </CurrentPrice>
              {product.oldPrice && (
                <OldPrice>
                  <span className="currency">€</span>
                  <span>{product.oldPrice}</span>
                </OldPrice>
              )}
            </ProductPrice>

            <ProductDescription variant="body1">
              {product.description}
            </ProductDescription>

            <ActionButtons>
              <AddToCartButton
                variant="contained"
                onClick={handleAddToCart}
                startIcon={<ShoppingCartIcon />}
              >
                Add to cart
              </AddToCartButton>
              
              <FavoriteButton
                variant="contained"
                onClick={handleFavoriteToggle}
                startIcon={<FavoriteBorderIcon />}
              >
                Add to wishlist
              </FavoriteButton>
            </ActionButtons>
          </ProductInfo>
        </ProductGrid>
      );
    }

    if (productsStatus !== "error") {
      return <ProductCartSkeleton />;
    }

    return (
      <PageContainer>
        <Typography color="error" variant="h6">
          Error: {productsError || "Something went wrong"}
        </Typography>
      </PageContainer>
    );
  }, [productsStatus, product, handleAddToCart, handleFavoriteToggle]);

  return (
    <PageContainer>
      <Breadcrumbs pathname={pathname} />
      {elProduct}
    </PageContainer>
  );
}

export default Root;
