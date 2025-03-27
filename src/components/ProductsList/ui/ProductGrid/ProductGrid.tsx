import { useEffect, useState } from "react";
import { ButtonView as AddToCartButton } from "../ProductCard/ui/AddToCartButton";
import { FavoriteButton } from "../ProductCard/ui/FavoriteButton";
import { Price } from "../ProductCard/ui/Price";
import { Rating } from "../ProductCard/ui/Rating";
import { StockStatus } from "../ProductCard/ui/StockStatus";
import { Tags } from "../ProductCard/ui/Tags";
import { Product } from "../Root";
import {
  StyledGridContainer,
  StyledProductCard,
  StyledProductImage,
  StyledProductInfo,
} from "./styles";
import { ProductGridProps } from "./types";

const ProductGrid = ({ products = [] }: ProductGridProps) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);

    if (filter === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(product => product.category === filter),
      );
    }
  };

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <StyledGridContainer>
      <div style={{ marginBottom: 20 }}>
        <button
          style={
            activeFilter === "all"
              ? { backgroundColor: "blue", color: "white" }
              : {}
          }
          onClick={() => handleFilterChange("all")}
        >
          Show All
        </button>

        <button
          style={
            activeFilter === "meat"
              ? { backgroundColor: "blue", color: "white" }
              : {}
          }
          onClick={() => handleFilterChange("meat")}
        >
          Meat
        </button>

        <button
          style={
            activeFilter === "season"
              ? { backgroundColor: "blue", color: "white" }
              : {}
          }
          onClick={() => handleFilterChange("season")}
        >
          Season
        </button>

        <button
          style={
            activeFilter === "vegetables"
              ? { backgroundColor: "blue", color: "white" }
              : {}
          }
          onClick={() => handleFilterChange("vegetables")}
        >
          Vegetables
        </button>
      </div>

      {filteredProducts.map(product => (
        <StyledProductCard key={product.id}>
          <StyledProductImage src={product.image} alt={product.name} />

          <StyledProductInfo>
            {/* Компоненты статусов */}
            {product.isNew && (
              <Tags tags={[{ label: "New", color: "primary" }]} />
            )}
            {product.isOrganic && (
              <Tags tags={[{ label: "Organic", color: "success" }]} />
            )}
            {product.isSale && (
              <Tags tags={[{ label: "Sale", color: "error" }]} />
            )}
            {product.featured && (
              <Tags tags={[{ label: "Featured", color: "warning" }]} />
            )}

            <h3>{product.name}</h3>

            {/* Компонент рейтинга */}
            <Rating value={product.rating} count={product.reviews} />

            {/* Компонент цены */}
            <Price
              price={product.price}
              oldPrice={product.oldPrice}
              isSale={product.isSale}
            />

            {/* Компонент наличия */}
            <StockStatus status="in_stock" />

            {/* Кнопка добавления в избранное */}
            <FavoriteButton isFavorite={false} onToggle={() => {}} />

            {/* Кнопка добавления в корзину */}
            <AddToCartButton productId={product.id} />
          </StyledProductInfo>
        </StyledProductCard>
      ))}
    </StyledGridContainer>
  );
};

export default ProductGrid;
