import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStar, FaRegStar } from 'react-icons/fa';
import { 
  ProductCardContainer, 
  ProductLink, 
  ProductImage, 
  ProductInfo, 
  ProductName, 
  ProductPrice, 
  ProductRating 
} from './styles';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    rating?: number;
    discount?: number;
    isNew?: boolean;
    inStock?: boolean;
    images?: { id: number; url: string }[];
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleAddToCart = async () => {
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: product.id, quantity: 1 }),
      });
      if (response.ok) {
        alert('Product added to cart!');
      } else {
        alert('Error adding to cart');
      }
    } catch (err) {
      alert('Error adding to cart');
    }
  };

  const renderRatingStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? <FaStar key={i} /> : <FaRegStar key={i} />);
    }
    return stars;
  };

  return (
    <ProductCardContainer>
      <ProductLink component={Link} to={`/product/${product.id}`}>
        <ProductImage src={product.images?.[0]?.url} alt={product.name} />
        <ProductInfo>
          <ProductName variant="h6">{product.name}</ProductName>
          <ProductPrice variant="body1">${product.price}</ProductPrice>
          {product.rating && (
            <ProductRating>
              {renderRatingStars(product.rating)}
            </ProductRating>
          )}
        </ProductInfo>
      </ProductLink>
      <button onClick={handleAddToCart}>
        <FaShoppingCart /> Add to Cart
      </button>
    </ProductCardContainer>
  );
};

export default ProductCard;