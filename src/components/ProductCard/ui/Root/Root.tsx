import { Link as MuiLink } from "@mui/material";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import api from "../../../../services/api";
import { AddToCartButton } from "../AddToCartButton";
import { Description } from "../Description";
import { DiscountBadge } from "../DiscountBadge";
import { FavoriteButton } from "../FavoriteButton";
import { FeaturedProductCard } from "../FeaturedProductCard";
import { Images } from "../Images";
import { Price } from "../Price";
import { Rating } from "../Rating";
import { StockStatus } from "../StockStatus";
import { Tags } from "../Tags";
import * as S from "./styles";
import { ProductCardProps } from "./types";

// --- Constants ---
const PLACEHOLDER_IMAGE = "/images/placeholder.png";

// --- ProductCard Component (Arrow Function) ---
const Root = ({ product, isFeatured = false }: ProductCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleQuickView = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleAddToCart = async () => {
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
  };

  return (
    <S.StyledProductCard>
      {/* Изображения продукта */}
      <Images product={product} />

      {/* Бейдж скидки */}
      {product.oldPrice && (
        <DiscountBadge
          discount={(
            ((product.oldPrice - product.price) / product.oldPrice) *
            100
          ).toFixed(0)}
        />
      )}

      {/* Информация о продукте */}
      <S.StyledProductInfo>
        {/* Теги */}
        <Tags
          tags={[
            product.isNew && { label: "New", color: "primary" },
            product.isOrganic && { label: "Organic", color: "success" },
            product.isSale && { label: "Sale", color: "error" },
            product.featured && { label: "Featured", color: "warning" },
          ].filter(Boolean)}
        />

        {/* Название продукта */}
        <S.StyledProductName>
          <MuiLink component={RouterLink} to={`/product/${product.id}`}>
            {product.name}
          </MuiLink>
        </S.StyledProductName>

        {/* Описание */}
        <Description description={product.description} />

        {/* Рейтинг */}
        <Rating value={product.rating} />

        {/* Цена */}
        <Price
          price={product.price}
          oldPrice={product.oldPrice}
          isSale={product.isSale}
        />

        {/* Статус наличия */}
        <StockStatus status="in_stock" />

        {/* Кнопки */}
        <S.StyledButtons>
          <FavoriteButton productId={product.id} />
          <AddToCartButton
            productId={product.id}
            onAddToCart={handleAddToCart}
            isAdding={isAddingToCart}
          />
          <S.StyledQuickViewButton onClick={handleQuickView}>
            <FaSearch /> Quick View
          </S.StyledQuickViewButton>
        </S.StyledButtons>
      </S.StyledProductInfo>

      {/* Модальное окно быстрого просмотра */}
      <ProductQuickViewModal
        open={showModal}
        onClose={handleCloseModal}
        product={product}
      />

      {/* Специальный контент для выделенных продуктов */}
      {isFeatured && <FeaturedProductCard product={product} />}
    </S.StyledProductCard>
  );
};

export default Root;
