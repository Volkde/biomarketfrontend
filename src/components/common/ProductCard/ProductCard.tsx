import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaStar, FaRegStar } from 'react-icons/fa';
import { styles } from './styles';

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

  // Функция для отображения звезд рейтинга
  const renderRatingStars = (rating: number = 0) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStar key={i} style={{ opacity: 0.5 }} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    
    return stars;
  };

  // Обработчик ошибки загрузки изображения
  const [imgError, setImgError] = useState(false);
  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <div style={styles.productCard}>
      <Link to={`/products/${product.id}`} style={styles.imageLink}>
        {product.isNew && <div style={styles.badge}>New</div>}
        {product.inStock === false && <div style={styles.outOfStock}>Out of Stock</div>}
        <img
          src={imgError || !product.images?.[0]?.url ? 'https://via.placeholder.com/300x220?text=Bio+Market' : product.images[0].url}
          alt={product.name}
          style={styles.image}
          onError={handleImageError}
        />
      </Link>
      <div style={styles.info}>
        <div>
          <Link to={`/products/${product.id}`}>
            <h3 style={styles.name}>{product.name}</h3>
          </Link>
          <div style={styles.rating}>
            {product.rating ? renderRatingStars(product.rating) : 'Not rated yet'}
            {product.rating ? ` (${product.rating.toFixed(1)})` : ''}
          </div>
        </div>
        <div>
          <div style={styles.price}>
            {product.discount && (
              <span style={styles.discountPrice}>${(product.price + product.discount).toFixed(2)}</span>
            )}
            <span style={styles.priceValue}>${product.price.toFixed(2)}</span>
          </div>
          <button 
            style={styles.addButton} 
            onClick={handleAddToCart}
            disabled={product.inStock === false}
          >
            <FaShoppingCart />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;