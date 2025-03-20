import React from 'react';
import { Link } from 'react-router-dom';
import { styles } from './styles';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    rating?: number;
    images?: { id: number; url: string }[];
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
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

  return (
    <div style={styles.productCard}>
      <Link to={`/products/${product.id}`} style={styles.imageLink}>
        <img
          src={product.images?.[0]?.url || 'https://via.placeholder.com/200'}
          alt={product.name}
          style={styles.image}
        />
      </Link>
      <div style={styles.info}>
        <Link to={`/products/${product.id}`}>
          <h3 style={styles.name}>{product.name}</h3>
        </Link>
        <div style={styles.rating}>
          ⭐ {product.rating || 'No rating'}
        </div>
        <p style={styles.price}>${product.price}</p>
        <button style={styles.addButton} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;